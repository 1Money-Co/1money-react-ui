# Example: Table Page (Search + States)

## Components
- Input (search)
- Table (data list)
- Button (retry)

## States
- loading: show Loading UI + disable search
- error: show Message + retry
- empty: table value = []

## Code
```tsx
import { useEffect, useMemo, useState } from 'react';
import { Input, Table, Button, Message } from '@1money/react-ui';

type Row = { id: number; name: string; email: string };

export function UsersTablePage() {
  const [q, setQ] = useState('');
  const [rows, setRows] = useState<Row[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>('');

  const columns = useMemo(
    () => [
      { field: 'name', header: 'Name' },
      { field: 'email', header: 'Email' },
    ],
    []
  );

  const load = async () => {
    setError('');
    try {
      setLoading(true);
      // TODO: fetch data
      await new Promise((r) => setTimeout(r, 500));
      const data: Row[] = [
        { id: 1, name: 'Alice', email: 'alice@example.com' },
        { id: 2, name: 'Bob', email: 'bob@example.com' },
      ];
      setRows(data);
    } catch (e) {
      setError('Failed to load users');
      setRows([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  const filtered = useMemo(() => {
    const kw = q.trim().toLowerCase();
    if (!kw) return rows;
    return rows.filter((r) => r.name.toLowerCase().includes(kw) || r.email.toLowerCase().includes(kw));
  }, [q, rows]);

  return (
    <div>
      {error ? (
        <div style={{ marginBottom: 12 }}>
          <Message severity="error" text={error} />
          <div style={{ marginTop: 8 }}>
            <Button severity="secondary" onClick={load} disabled={loading}>
              Retry
            </Button>
          </div>
        </div>
      ) : null}

      <Input
        type="text"
        label="Search"
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Name or email"
        disabled={loading}
      />

      <div style={{ marginTop: 12 }}>
        <Table value={filtered} columns={columns} rowBorder />
      </div>
    </div>
  );
}
```
