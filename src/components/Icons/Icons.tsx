import { useCallback, memo } from 'react';
import { IconWrapper } from './Wrapper';
import {
  MinusIcon, 
  AddIcon,
  BurgerIcon,
  ReturnIcon,
  CloseIcon,
  ArrowIcon,
  DropDownIcon,
  EyeCloseIcon,
  EyeOnIcon,
  CircleIcon,
  CheckIcon,
  Logo,
  LogoWithWords,
} from './SVGs';
/* import types */
import type { FC } from 'react';
import type { IconsProps, IconWrapperProps } from './interface';



export const Icons: FC<IconsProps> = ({ name, ...props }) => {
  const IconComponent = useCallback((props: IconWrapperProps) => {
    let Icon = null;
    switch (name) {
      case 'minus':
        Icon = MinusIcon;
        break;
      case 'add':
        Icon = AddIcon;
        break;
      case 'burger':
        Icon = BurgerIcon;
        break;
      case 'return':
        Icon = ReturnIcon;
        break;
      case 'close':
        Icon = CloseIcon;
        break;
      case 'arrow':
        Icon = ArrowIcon;
        break;
      case 'dropDown':
        Icon = DropDownIcon;
        break;
      case 'eyeClose':
        Icon = EyeCloseIcon;
        break;
      case 'eyeOn':
        Icon = EyeOnIcon;
        break;
      case 'circle':
        Icon = CircleIcon;
        break;
      case 'check':
        Icon = CheckIcon;
        break;
      case 'logo':
        Icon = Logo;
        break;
      case 'logoWithWords':
        Icon = LogoWithWords;
        break;
    }
    return Icon ? <Icon {...props} /> : null;
  }, [name]);

  return <IconComponent {...props} />;
};

export default memo(Icons);
