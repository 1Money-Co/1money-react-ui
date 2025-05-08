import { memo } from 'react';
import { RadioButton } from 'primereact/radiobutton';
import classnames from '@/utils/classnames';
/* import types */
import type { FC } from 'react';
import type { RadioProps } from './interface';

export const Radio: FC<RadioProps> = props => {
  const {
    id,
    value,
    checked,
    wrapperCls,
    innerCls,
    radioCls,
    labelCls,
    onChange,
    disabled,
    required,
    invalid,
    label,
    name,
    size = 'md',
    prefixCls = 'radio',
  } = props;

  const classes = classnames(prefixCls);
  const sizeClass = `rd-${size}`;

  return (
    <div className={[classes('wrapper'), wrapperCls].join(' ')}>
      <div className={[classes('inner'), innerCls, sizeClass].join(' ')}>
        <RadioButton
          inputId={id}
          name={name}
          value={value}
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          invalid={invalid}
          required={required}
          className={[classes('radio', radioCls)].join(' ')}
        />
        {label && <label htmlFor={id} className={[classes('label', labelCls)].join(' ')}>{label}</label>}
      </div>
    </div>
  );
};

export default memo(Radio);
