import { LogoWithWords, LogoWithBeta } from '../Icons/Logo';
import { Logo } from '../Icons/Logo';
import {
  LOGO_COLOR,
  WORD_COLOR,
  LOGO_COLLAPSED_SIZE,
  LOGO_BETA_WIDTH,
  LOGO_BETA_HEIGHT,
  LOGO_DEFAULT_WIDTH,
  LOGO_DEFAULT_HEIGHT,
} from './constants';
/* import types */
import type { FC } from 'react';

interface SidebarLogoProps {
  collapsed?: boolean;
  betaLogo?: boolean;
}

const SidebarLogo: FC<SidebarLogoProps> = ({ collapsed, betaLogo }) => {
  if (collapsed) {
    return (
      <Logo
        color={LOGO_COLOR}
        width={LOGO_COLLAPSED_SIZE}
        height={LOGO_COLLAPSED_SIZE}
      />
    );
  }

  if (betaLogo) {
    return (
      <LogoWithBeta
        logoColor={LOGO_COLOR}
        wordColor={WORD_COLOR}
        betaColor={LOGO_COLOR}
        color={LOGO_COLOR}
        width={LOGO_BETA_WIDTH}
        height={LOGO_BETA_HEIGHT}
      />
    );
  }

  return (
    <LogoWithWords
      logoColor={LOGO_COLOR}
      wordColor={WORD_COLOR}
      color={LOGO_COLOR}
      width={LOGO_DEFAULT_WIDTH}
      height={LOGO_DEFAULT_HEIGHT}
    />
  );
};

export default SidebarLogo;
