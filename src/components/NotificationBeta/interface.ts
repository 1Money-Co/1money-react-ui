import type { HTMLAttributes, MouseEventHandler, ReactNode, RefObject } from 'react';

/**
 * Status variants for NotificationBeta.
 * Each status maps to a distinct icon and icon-background color.
 */
export const NOTIFICATION_STATUSES = ['info', 'success', 'warning', 'error'] as const;
export type NotificationBetaStatus = (typeof NOTIFICATION_STATUSES)[number];

export interface NotificationBetaLinkConfig {
  /** Display text for the link */
  label: string;
  /** Click handler for the link */
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}

export interface NotificationBetaProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  ref?: RefObject<HTMLDivElement | null>;

  /** CSS class prefix for BEM namespace customization */
  prefixCls?: string;

  /** Status variant controlling icon and icon-background color */
  status?: NotificationBetaStatus;

  /** Title text displayed in bold above the body */
  title?: ReactNode;

  /** Body text displayed below the title */
  body?: ReactNode;

  /** Optional link rendered below the body */
  link?: NotificationBetaLinkConfig;

  /** Custom icon element. When provided, overrides the default status icon. */
  icon?: ReactNode;

  /** Whether to show the status icon. Defaults to true. */
  showIcon?: boolean;

  /** Whether to show the close button. Defaults to true. */
  closable?: boolean;

  /** Callback fired when the close button is clicked */
  onClose?: MouseEventHandler<HTMLButtonElement>;
}
