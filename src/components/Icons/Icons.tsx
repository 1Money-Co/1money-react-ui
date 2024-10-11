import { useCallback, memo } from 'react';
import { IconWrapper } from './Wrapper';
import {
  Logo,
  LogoWithWords,
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
  TimesIcon,
  DoubleCheckIcon,
  CheckCircleIcon,
  TimesCircleIcon,
  ContentIcon,
  LockedIcon,
} from './SVGs';
/* import types */
import type { FC } from 'react';
import type { IconsProps, IconWrapperProps } from './interface';



export const Icons: FC<IconsProps> = ({ name, ...props }) => {
  const IconComponent = useCallback((props: IconWrapperProps) => {
    let Icon = null;
    switch (name) {
      case 'logo':
        Icon = Logo;
        break;
      case 'logoWithWords':
        Icon = LogoWithWords;
        break;
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
      case 'times':
        Icon = TimesIcon;
        break;
      case 'doubleCheck':
        Icon = DoubleCheckIcon;
        break;
      case 'checkCircle':
        Icon = CheckCircleIcon;
        break;
      case 'timesCircle':
        Icon = TimesCircleIcon;
        break;
      case 'content':
        Icon = ContentIcon;
        break;
      case 'locked':
        Icon = LockedIcon;
        break;
    }
    return Icon ? <Icon {...props} /> : null;
  }, [name]);

  return <IconComponent {...props} />;
};

export default memo(Icons);
