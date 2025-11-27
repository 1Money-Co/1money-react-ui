import { memo } from 'react';
import { RadioButton } from 'primereact/radiobutton';
import { default as classnames, joinCls } from '@/utils/classnames';
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
    <div className={joinCls(classes('wrapper'), wrapperCls)}>
      <div className={joinCls(classes('inner'), innerCls, sizeClass)}>
        <RadioButton
          inputId={id}
          name={name}
          value={value}
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          invalid={invalid}
          required={required}
          className={classes('radio', radioCls)}
        />
        {label && <label htmlFor={id} className={classes('label', labelCls)}>{label}</label>}
      </div>
    </div>
  );
};

export default memo(Radio);
