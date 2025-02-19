import IconWrapper from './Wrapper';
/* import types */
import type { FC } from 'react';
import type { IconWrapperProps } from './interface';

export interface IllustrationsCustomProps {
  borderColor?: string;
}

export const IllusLocked: FC<IconWrapperProps & IllustrationsCustomProps> = ({ borderColor = '#1D1D1F', ...rest }) => <IconWrapper viewBox="0 0 74 74" {...rest}>
  <rect x="67" y="66" width="56" height="36" rx="7" transform="rotate(-180 67 66)" fill="url(#paint0_linear_85_13893)" />
  <mask id="path-2-inside-1_85_13893" fill="white">
    <path fillRule="evenodd" clipRule="evenodd" d="M39 11C33.4772 11 29 15.4772 29 21V28H49V21C49 15.4772 44.5229 11 39 11ZM57 28V21C57 11.0589 48.9411 3 39 3C29.0589 3 21 11.0589 21 21V28H13C11.8954 28 11 28.8954 11 30V64C11 65.1046 11.8954 66 13 66H15H63H65C66.1046 66 67 65.1046 67 64V30C67 28.8954 66.1046 28 65 28H57Z" />
  </mask>
  <path d="M29 28H27.5V29.5H29V28ZM49 28V29.5H50.5V28H49ZM57 28H55.5V29.5H57V28ZM21 28V29.5H22.5V28H21ZM30.5 21C30.5 16.3056 34.3056 12.5 39 12.5V9.5C32.6487 9.5 27.5 14.6487 27.5 21H30.5ZM30.5 28V21H27.5V28H30.5ZM29 29.5H49V26.5H29V29.5ZM47.5 21V28H50.5V21H47.5ZM39 12.5C43.6944 12.5 47.5 16.3056 47.5 21H50.5C50.5 14.6487 45.3513 9.5 39 9.5V12.5ZM58.5 28V21H55.5V28H58.5ZM58.5 21C58.5 10.2304 49.7696 1.5 39 1.5V4.5C48.1127 4.5 55.5 11.8873 55.5 21H58.5ZM39 1.5C28.2304 1.5 19.5 10.2304 19.5 21H22.5C22.5 11.8873 29.8873 4.5 39 4.5V1.5ZM19.5 21V28H22.5V21H19.5ZM13 29.5H21V26.5H13V29.5ZM12.5 30C12.5 29.7239 12.7239 29.5 13 29.5V26.5C11.067 26.5 9.5 28.067 9.5 30H12.5ZM12.5 64V30H9.5V64H12.5ZM13 64.5C12.7239 64.5 12.5 64.2761 12.5 64H9.5C9.5 65.933 11.067 67.5 13 67.5V64.5ZM15 64.5H13V67.5H15V64.5ZM63 64.5H15V67.5H63V64.5ZM65 64.5H63V67.5H65V64.5ZM65.5 64C65.5 64.2761 65.2761 64.5 65 64.5V67.5C66.933 67.5 68.5 65.933 68.5 64H65.5ZM65.5 30V64H68.5V30H65.5ZM65 29.5C65.2761 29.5 65.5 29.7239 65.5 30H68.5C68.5 28.067 66.933 26.5 65 26.5V29.5ZM57 29.5H65V26.5H57V29.5Z" fill={borderColor} mask="url(#path-2-inside-1_85_13893)" />
  <circle cx="14" cy="58" r="13" />
  <circle cx="14" cy="58" r="12" stroke={borderColor} strokeWidth="2" />
  <path fillRule="evenodd" clipRule="evenodd" d="M12.5842 57.9986L8.34164 62.2411L9.75585 63.6553L13.9984 59.4128L18.2425 63.6569L19.6568 62.2427L15.4126 57.9986L19.6553 53.7558L18.2411 52.3416L13.9984 56.5844L9.75726 52.3432L8.34305 53.7574L12.5842 57.9986Z" fill="white" />
  <defs>
    <linearGradient id="paint0_linear_85_13893" x1="95" y1="66" x2="95" y2="102" gradientUnits="userSpaceOnUse">
      <stop stopColor="#B9CCE4" />
      <stop offset="1" stopColor="white" />
    </linearGradient>
  </defs>
</IconWrapper>;

export const IllusError: FC<IconWrapperProps & IllustrationsCustomProps> = ({ borderColor = '#1D1D1F', ...rest }) => <IconWrapper viewBox="0 0 74 74" {...rest}>
  <path d="M12 55C12 53.8954 12.8954 53 14 53H60C61.1046 53 62 53.8954 62 55V63C62 64.1046 61.1046 65 60 65H14C12.8954 65 12 64.1046 12 63V55Z" />
  <path d="M36 37V22H38V37H36Z" fill={borderColor} />
  <path d="M37 40C35.8954 40 35 40.8954 35 42C35 43.1046 35.8954 44 37 44C38.1046 44 39 43.1046 39 42C39 40.8954 38.1046 40 37 40Z" fill={borderColor} />
  <path fillRule="evenodd" clipRule="evenodd" d="M16.2308 53L7.84256 41.3164C6.76234 39.8118 6.85635 37.7624 8.06979 36.3631L33.9779 6.48512C35.5729 4.64582 38.4271 4.64582 40.0221 6.48512L65.9302 36.3631C67.1436 37.7624 67.2377 39.8118 66.1574 41.3164L57.7692 53H58C60.2091 53 62 54.7909 62 57V61C62 63.2091 60.2091 65 58 65H16C13.7909 65 12 63.2091 12 61V57C12 54.7909 13.7909 53 16 53H16.2308ZM37 6.05282L65.4541 38.8668L55.3072 53H18.6928L8.54593 38.8668L37 6.05282ZM60 55V63H14V55H60Z" fill={borderColor} />
</IconWrapper>;

export const IllusChecked: FC<IconWrapperProps & IllustrationsCustomProps> = ({ borderColor = '#1D1D1F', ...rest }) => <IconWrapper viewBox="0 0 54 62" {...rest}>
  <path fillRule="evenodd" clipRule="evenodd" d="M17 60H16.5V62H17H21H25H29H33H37H37.5V60H37H33H29H25H21H17Z" fill={borderColor} />
  <circle cx="27" cy="27" r="27" fill="white" />
  <circle cx="27" cy="27" r="26" stroke={borderColor} strokeWidth="2" fill="transparent" />
  <circle cx="26.997" cy="27.0009" r="20.1064" fill="url(#paint0_linear_85_13586)" />
  <circle cx="26.997" cy="27.0009" r="19.6064" stroke={borderColor} fill="transparent" />
  <path d="M16 26.3462L24 34.5L37.5 20" stroke={borderColor} strokeWidth="2" fill="transparent" />
  <defs>
    <linearGradient id="paint0_linear_85_13586" x1="26.997" y1="6.89453" x2="26.997" y2="47.1073" gradientUnits="userSpaceOnUse">
      <stop stopColor="#B9CCE4" />
      <stop offset="1" stopColor="white" />
    </linearGradient>
  </defs>
</IconWrapper>;