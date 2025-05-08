# Radio

单选框组件，允许用户从一组选项中选择一个选项。

## APIs
| 名称 | 描述 | 类型 | 默认值 |
| --- | --- | --- | --- |
| keyId | 单选框的唯一ID | string | - |
| name | 单选框的名称，用于表单提交 | string | - |
| value | 单选框的值 | any | - |
| checked | 是否选中 | boolean | false |
| onChange | 选择状态变化时的回调函数 | (e: RadioButtonChangeEvent) => void | - |
| disabled | 是否禁用 | boolean | false |
| invalid | 是否无效状态 | boolean | false |
| required | 是否必选 | boolean | false |
| wrapperCls | 外层容器的类名 | string | - |
| innerCls | 内层容器的类名 | string | - |
| radioCls | Radio按钮的类名 | string | - |
| labelCls | 标签的类名 | string | - |
| label | 单选框的标签文本 | string | - |
| prefixCls | 自定义组件类名前缀 | string | `'radio'` |
| size | 单选框大小 | 'sm' \| 'md' \| 'lg' | `'md'` |

## 示例

```tsx
import { Radio } from '@/components/Radio';
import { useState } from 'react';

const Example = () => {
  const [selectedValue, setSelectedValue] = useState<string>(null);

  return (
    <div>
      <Radio
        keyId="option1"
        name="group"
        value="option1"
        checked={selectedValue === 'option1'}
        onChange={(e) => setSelectedValue(e.value)}
        label="选项1"
      />

      <Radio
        keyId="option2"
        name="group"
        value="option2"
        checked={selectedValue === 'option2'}
        onChange={(e) => setSelectedValue(e.value)}
        label="选项2"
      />

      <Radio
        keyId="option3"
        name="group"
        value="option3"
        checked={selectedValue === 'option3'}
        onChange={(e) => setSelectedValue(e.value)}
        label="选项3"
        disabled
      />

      <Radio
        keyId="option4"
        name="group"
        value="option4"
        checked={selectedValue === 'option4'}
        onChange={(e) => setSelectedValue(e.value)}
        label="选项4"
        invalid
      />
    </div>
  );
};
```
