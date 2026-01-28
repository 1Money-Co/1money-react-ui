#!/usr/bin/env python3
import glob
import os
import re
import sys

ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', 'references'))
EXCLUDE_SUBSTRINGS = ['/Foundation/', 'references/README.md']

REQUIRED_FRONT_MATTER_KEYS = ['name', 'category', 'description']
REQUIRED_SECTIONS_IN_ORDER = [
    '## Component Overview',
    '## Usage Scenarios',
    '## Design Specifications',
    '## API',
    '## Examples',
    '## Core Principles'
]

STOP_SECTION_TITLES = ['## Examples', '## Core Principles']
TABLE_HEADER_KEYS = {'Name', 'Method', 'Property'}
PRIMEREACT_HINTS = ['PrimeReact', 'primereact']

# Example usage consistency checks (regex -> message)
EXAMPLE_FORBIDDEN_PATTERNS = {
    'InputAmount.md': [
        (r'onChange=\{\(e\)\s*=>', 'InputAmount examples should use onChange={(e, val) => ...}'),
        (r'\.target\.value', 'InputAmount examples should not read e.target.value; use the value argument'),
    ],
    'Switch.md': [
        (r'\bchecked=', 'Switch examples should not use controlled checked; use defaultChecked'),
    ],
    'Modal.md': [
        (r'\bvisible=', 'Modal examples should not use visible prop; use ref.show()/hide()'),
    ],
    'Checkbox.md': [
        (r'e\.checked', 'Checkbox examples should use onChange={(next) => ...} with boolean value'),
    ],
    'CheckboxGroup.md': [
        (r'e\.checked', 'CheckboxGroup examples should use boolean value in onChange'),
    ],
    'Select.md': [
        (r'\.target\.value', 'Select examples should use e.value (not e.target.value)'),
    ],
}

# Example usage required patterns (any-of -> message)
EXAMPLE_REQUIRED_PATTERNS = {
    'Tooltip.md': [
        ([r'\banchorSelect=', r'\banchorId='], 'Tooltip examples should set anchorSelect or anchorId'),
    ],
}


def api_block(text: str) -> str:
    if '## API' not in text:
        return ''
    after = text.split('## API', 1)[1]
    end = len(after)
    for stop in STOP_SECTION_TITLES:
        idx = after.find(stop)
        if idx != -1:
            end = min(end, idx)
    return after[:end]


def examples_block(text: str) -> str:
    if '## Examples' not in text:
        return ''
    after = text.split('## Examples', 1)[1]
    end = len(after)
    stop = '## Core Principles'
    idx = after.find(stop)
    if idx != -1:
        end = min(end, idx)
    return after[:end]


def extract_doc_props(text: str) -> set[str]:
    block = api_block(text)
    props: set[str] = set()
    for line in block.splitlines():
        if not line.lstrip().startswith('|'):
            continue
        cols = [c.strip() for c in line.strip().strip('|').split('|')]
        if not cols or cols[0] in TABLE_HEADER_KEYS or set(cols[0]) == {'-'}:
            continue
        key = cols[0].strip('`').strip()
        if key:
            props.add(key)
    return props


def extract_interface_props(text: str) -> set[str]:
    props: set[str] = set()
    depth = 0
    for line in text.splitlines():
        stripped = line.strip()
        if stripped.startswith('//'):
            pass
        else:
            if depth == 1:
                m = re.match(r'^\s*([A-Za-z_][A-Za-z0-9_]*)\??\s*:', line)
                if m:
                    props.add(m.group(1))
        depth += line.count('{') - line.count('}')
        if depth < 0:
            depth = 0
    return props


def requires_primereact_hint(interface_text: str) -> bool:
    return 'primereact/' in interface_text


def has_primereact_hint(doc_text: str) -> bool:
    return any(hint in doc_text for hint in PRIMEREACT_HINTS)


def read_text(path: str) -> str:
    with open(path, 'r', encoding='utf-8') as f:
        return f.read()


def parse_front_matter(text: str) -> dict:
    lines = text.splitlines()
    if not lines or lines[0].strip() != '---':
        return {}
    end_idx = None
    for i in range(1, len(lines)):
        if lines[i].strip() == '---':
            end_idx = i
            break
    if end_idx is None:
        return {}
    data = {}
    for line in lines[1:end_idx]:
        if ':' not in line:
            continue
        key, _ = line.split(':', 1)
        key = key.strip()
        if key:
            data[key] = True
    return data


def first_heading_after_api(text: str):
    if '## API' not in text:
        return None
    after = text.split('## API', 1)[1]
    m = re.search(r'^(#{2,3})\s+(.+)$', after, flags=re.M)
    if not m:
        return None
    return m.group(1), m.group(2)


def api_headings_are_level3(text: str) -> bool:
    if '## API' not in text:
        return False
    after = text.split('## API', 1)[1]
    end = len(after)
    for stop in STOP_SECTION_TITLES:
        idx = after.find(stop)
        if idx != -1:
            end = min(end, idx)
    api_block = after[:end]
    for m in re.finditer(r'^(##+)\s+(.+)$', api_block, flags=re.M):
        if len(m.group(1)) < 3:
            return False
    return True


def check_sections_order(text: str):
    positions = []
    for sec in REQUIRED_SECTIONS_IN_ORDER:
        idx = text.find(sec)
        positions.append(idx)
    if any(idx == -1 for idx in positions):
        return False
    return positions == sorted(positions)


def main() -> int:
    ref_files = [p for p in glob.glob(os.path.join(ROOT, '*', '*.md'))
                 if all(s not in p for s in EXCLUDE_SUBSTRINGS)]

    errors = []
    for path in ref_files:
        text = read_text(path)
        rel = os.path.relpath(path, ROOT)
        fm = parse_front_matter(text)
        missing_fm = [k for k in REQUIRED_FRONT_MATTER_KEYS if k not in fm]
        if missing_fm:
            errors.append(f"{rel}: missing front matter keys: {', '.join(missing_fm)}")

        # H1
        if not re.search(r'^#\s+.+', text, flags=re.M):
            errors.append(f"{rel}: missing H1 heading")

        # Required sections & order
        for sec in REQUIRED_SECTIONS_IN_ORDER:
            if sec not in text:
                errors.append(f"{rel}: missing section {sec}")
        if not check_sections_order(text):
            errors.append(f"{rel}: sections are not in required order")

        # API checks (structure)
        if '## API' not in text:
            errors.append(f"{rel}: missing ## API section")
        else:
            first = first_heading_after_api(text)
            if not first:
                errors.append(f"{rel}: missing headings under ## API")
            else:
                level, title = first
                if not (level == '###' and title == 'Component Props'):
                    errors.append(f"{rel}: first API heading must be '### Component Props' (found '{level} {title}')")
            if not api_headings_are_level3(text):
                errors.append(f"{rel}: all API headings must be level-3 (###)")

        # API checks (coverage warnings)
        iface = os.path.join(os.path.dirname(os.path.dirname(ROOT)), 'src', 'components', os.path.basename(path).replace('.md', ''), 'interface.ts')
        if os.path.exists(iface):
            iface_text = read_text(iface)
            iface_props = extract_interface_props(iface_text)
            doc_props = extract_doc_props(text)
            missing_props = sorted(p for p in iface_props if p not in doc_props)
            if missing_props:
                errors.append(f"{rel}: missing props in API tables: {', '.join(missing_props)}")

            if requires_primereact_hint(iface_text) and not has_primereact_hint(text):
                errors.append(f"{rel}: missing PrimeReact inheritance note")

        # Example consistency checks
        file_name = os.path.basename(path)
        examples = examples_block(text)
        if file_name in EXAMPLE_FORBIDDEN_PATTERNS:
            for pattern, message in EXAMPLE_FORBIDDEN_PATTERNS[file_name]:
                if re.search(pattern, examples):
                    errors.append(f"{rel}: {message}")
        if file_name in EXAMPLE_REQUIRED_PATTERNS:
            for patterns, message in EXAMPLE_REQUIRED_PATTERNS[file_name]:
                if not any(re.search(p, examples) for p in patterns):
                    errors.append(f"{rel}: {message}")

    if errors:
        print('Reference consistency check failed:')
        for e in errors:
            print('-', e)
        return 1

    print('Reference consistency check passed.')
    return 0


if __name__ == '__main__':
    sys.exit(main())
