import { useCallback, useMemo, memo } from 'react';
import {
  Logo,
  LogoWord,
  LogoNetwork,
  LogoWithWords,
} from './Logo';
import {
  IllusLocked,
  IllusChecked,
  IllusError
} from './Illustrations';
import { 
  BurgerIcon,
  ReturnIcon,
  CloseIcon,
  ArrowIcon,
  DropDownIcon,
  CircleIcon,
  CheckIcon,
  TimesIcon,
  DoubleCheckIcon,
  CheckCircleIcon,
  TimesCircleIcon,
  ContentIcon,
  LockedIcon,
  ExclamationIcon,
  ArrowUpIcon,
  ArrowLinkIcon,
  UnionIcon,
} from './Old';
import {
  EyeCloseIcon,
  EyeOnIcon,
  ErrorIcon,
  SuccessIcon,
  AddIcon,
  MinusIcon,
} from './SVGs';
/* import types */
import type { FC } from 'react';
import type { IconsProps, IconWrapperProps } from './interface';
import type { LogoWithWordsCustomProps } from './Logo';
import type { IllustrationsCustomProps } from './Illustrations';

const IconList = {
  illusLocked: IllusLocked,
  illusChecked: IllusChecked,
  illusError: IllusError,
  logo: Logo,
  logoWord: LogoWord,
  logoNetwork: LogoNetwork,
  logoWithWords: LogoWithWords,
  eyeClose: EyeCloseIcon,
  eyeOn: EyeOnIcon,
  minus: MinusIcon,
  add: AddIcon,
  success: SuccessIcon,
  error: ErrorIcon,
  burger: BurgerIcon,
  return: ReturnIcon,
  close: CloseIcon,
  arrow: ArrowIcon,
  dropDown: DropDownIcon,
  circle: CircleIcon,
  check: CheckIcon,
  times: TimesIcon,
  doubleCheck: DoubleCheckIcon,
  checkCircle: CheckCircleIcon,
  timesCircle: TimesCircleIcon,
  content: ContentIcon,
  locked: LockedIcon,
  exclamation: ExclamationIcon,
  arrowUp: ArrowUpIcon,
  arrowLink: ArrowLinkIcon,
  union: UnionIcon,
} as const;

export type IconName = keyof typeof IconList;

export interface LogoWithWordsProps extends IconsProps, LogoWithWordsCustomProps {
  name: 'logoWithWords';
}

export interface IllustrationsProps extends IconsProps, IllustrationsCustomProps {
  name: 'illusLocked' | 'illusChecked' | 'illusError';
}

export const Icons: FC<(IconsProps & { name: IconName }) | LogoWithWordsProps | IllustrationsProps> = ({ name, ...rest }) => {
  const IconComponent = useCallback((props: IconWrapperProps) => {
    const Icon = useMemo(() => IconList[name], [name]);
    return Icon ? <Icon {...props} /> : null;
  }, [name]);

  return <IconComponent {...rest} />;
};

export default memo(Icons);
