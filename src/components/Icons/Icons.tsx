import { useCallback, useMemo, memo } from 'react';
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
  ExclamationIcon,
} from './SVGs';
/* import types */
import type { FC } from 'react';
import type { IconsProps, IconWrapperProps } from './interface';

const IconList = {
  logo: Logo,
  logoWithWords: LogoWithWords,
  minus: MinusIcon,
  add: AddIcon,
  burger: BurgerIcon,
  return: ReturnIcon,
  close: CloseIcon,
  arrow: ArrowIcon,
  dropDown: DropDownIcon,
  eyeClose: EyeCloseIcon,
  eyeOn: EyeOnIcon,
  circle: CircleIcon,
  check: CheckIcon,
  times: TimesIcon,
  doubleCheck: DoubleCheckIcon,
  checkCircle: CheckCircleIcon,
  timesCircle: TimesCircleIcon,
  content: ContentIcon,
  locked: LockedIcon,
  exclamation: ExclamationIcon,
} as const;

export const Icons: FC<IconsProps & { name: keyof typeof IconList }> = ({ name, ...props }) => {
  const IconComponent = useCallback((props: IconWrapperProps) => {
    const Icon = useMemo(() => IconList[name], [name]);
    return Icon ? <Icon {...props} /> : null;
  }, [name]);

  return <IconComponent {...props} />;
};

export default memo(Icons);
