import { useCallback, useMemo, memo } from 'react';
import {
  Logo,
  LogoWord,
  LogoNetwork,
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
  ArrowUpIcon,
  ArrowLinkIcon,
  UnionIcon,
  ErrorIcon,
} from './SVGs';
/* import types */
import type { FC } from 'react';
import type { IconsProps, IconWrapperProps } from './interface';

const IconList = {
  logo: Logo,
  logoWord: LogoWord,
  logoNetwork: LogoNetwork,
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
  arrowUp: ArrowUpIcon,
  arrowLink: ArrowLinkIcon,
  union: UnionIcon,
  error: ErrorIcon,
} as const;

export type IconName = keyof typeof IconList;
export interface LogoWithWordsProps extends IconsProps {
  name: 'logoWithWords';
  logoCls?: string;
  wordCls?: string;
  networkCls?: string;
  logoColor?: string;
  wordColor?: string;
  networkColor?: string;
  networkLogo?: boolean;
}
export const Icons: FC<(IconsProps & { name: IconName }) | LogoWithWordsProps> = ({ name, ...rest }) => {
  const IconComponent = useCallback((props: IconWrapperProps) => {
    const Icon = useMemo(() => IconList[name], [name]);
    return Icon ? <Icon {...props} /> : null;
  }, [name]);

  return <IconComponent {...rest} />;
};

export default memo(Icons);
