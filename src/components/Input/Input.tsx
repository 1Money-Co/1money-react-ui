/* eslint-disable no-case-declarations */
import { memo, useMemo, useCallback } from 'react';
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import { InputMask } from 'primereact/inputmask';
import { InputTextarea } from 'primereact/inputtextarea';
import { InputOtp } from 'primereact/inputotp';
import { Password } from 'primereact/password';
import { AutoComplete } from 'primereact/autocomplete';
import propTypes from 'prop-types';
import classnames from '@/utils/classnames';
import { Icons } from '../Icons';

/* import types */
import type { FC, PropsWithChildren, FormEvent } from 'react';
import type { InputProps, InputOtpProps, InputPwdProps } from './interface';

export const Input: FC<PropsWithChildren<InputProps>> = props => {
  const { addons, label, required, invalid, rounded = false, errMsg, type = 'text', className = '', prefixCls = 'input', wrapperCls, ...rest } = props;
  const classes = classnames(prefixCls);

  const InputComponent = useMemo(() => {
    switch (type) {
      case 'text':
        return InputText;
      case 'number':
        return InputNumber as new () => InputNumber;
      case 'mask':
        return InputMask as new () => InputMask;
      case 'textarea':
        return InputTextarea;
      case 'otp':
        return (_props: InputOtpProps) => {
          const { className: _className, ..._rest } = _props;
          return <div className={_className}>
            <InputOtp{..._rest as any}/>
          </div>;
        };
      case 'password':
        return (_props: InputPwdProps) => <Password
          feedback={false}
          showIcon={({ iconProps }) => <Icons name='eyeOn' onClick={iconProps.onClick} size={20} color='#808080' />}
          hideIcon={({ iconProps }) => <Icons name='eyeClose' onClick={iconProps.onClick} size={20} color='#808080' />}
          {..._props}
        />;
      case 'autocomplete':
        return AutoComplete as new () => AutoComplete;
      default:
        return InputText;
    }
  }, [type]);

  return (
    <div className={classes('wrapper', wrapperCls)}>
      {label && <span className={classes('label', required ? classes('label-required') : '')}>{label}</span>}
      <div className={classes('inner')}>
        {addons && <div className={classes('addons')}>{addons}</div>}
        <InputComponent
          {...rest as any}
          invalid={invalid}
          required={required}
          className={classes(void 0, [classes(type), rounded ? classes('rounded') : '', className].join(' '))}
        />
      </div>
      {invalid && errMsg && <span className={classes('error')}>{errMsg}</span>}
    </div>
  );
};

/**
 * prop-types can make sure the type-check whatever the environment whether or not use typescript
 */
Input.propTypes = {
  label: propTypes.string,
  required: propTypes.bool,
  prefixCls: propTypes.string,
  wrapperCls: propTypes.string
};

export default memo(Input);
