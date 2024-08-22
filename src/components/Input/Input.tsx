import { memo, useMemo } from 'react';
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import { InputMask } from 'primereact/inputmask';
import { InputTextarea } from 'primereact/inputtextarea';
import { InputOtp } from 'primereact/inputotp';
import { Password } from 'primereact/password';
import { AutoComplete } from 'primereact/autocomplete';
import propTypes from 'prop-types';
import classnames from '@/utils/classnames';
/* import types */
import type { FC, PropsWithChildren } from 'react';
import type { InputProps } from './interface';

export const Input: FC<PropsWithChildren<InputProps>> = props => {
  const { type, className, prefixCls = 'input', ...rest } = props;
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
        return InputOtp;
      case 'password':
        return Password as new () => Password;
      case 'autocomplete':
        return AutoComplete as new () => AutoComplete;
      default:
        return InputText;
    }
  }, [type]);

  return (
    <InputComponent
      {...rest as any}
      className={classes(void 0, className)}
    />
  );
};

/**
 * prop-types can make sure the type-check whatever the environment whether or not use typescript
 */
Input.propTypes = {
  prefixCls: propTypes.string
};

export default memo(Input);
