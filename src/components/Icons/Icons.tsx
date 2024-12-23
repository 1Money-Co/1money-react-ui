import { useCallback, useMemo, memo } from 'react';
import {
  Logo,
  LogoWord,
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
} from './SVGs';
/* import types */
import type { FC } from 'react';
import type { IconsProps, IconWrapperProps } from './interface';

const IconList = {
  logo: Logo,
  logoWord: LogoWord,
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
} as const;

export type IconName = keyof typeof IconList;
export interface LogoWithWordsProps extends IconsProps {
  name: 'logoWithWords';
  logoColor?: string;
  wordColor?: string;
}
export const Icons: FC<(IconsProps & { name: IconName }) | LogoWithWordsProps> = ({ name, ...props }) => {
  const IconComponent = useCallback((props: IconWrapperProps) => {
    const Icon = useMemo(() => IconList[name], [name]);
    return Icon ? <Icon {...props} /> : null;
  }, [name]);

  return <IconComponent {...props} />;
};

export default memo(Icons);
