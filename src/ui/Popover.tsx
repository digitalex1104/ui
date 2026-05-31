import './popover.scss';
import { useEffect, useState } from 'react';
import type { HTMLAttributes, ReactNode } from 'react';

const FADE_DURATION_MS = 180;

export interface PopoverProps extends HTMLAttributes<HTMLDivElement> {
  /** Layout variant of the element */
  variant?: 'primary' | 'secondary' | 'tertiary';
  /** Size of the element */
  size?: 'small' | 'medium' | 'large' ;
  /** Controls whether the popover is rendered */
  open?: boolean;
  /** Callback fired when open state should change */
  onOpenChange?: (open: boolean) => void;
  /** Label contents */
  children?: ReactNode | string | undefined;
}

/** Primary UI component for user interaction */
export const Popover = ({
  variant = 'primary',
  size = 'medium',
  open = true,
  onOpenChange,
  children = 'Content',
  className,
  ...props
}: PopoverProps) => {
  //const mode = secondary ? 'dx-ui-button--secondary' : 'dx-ui-button--primary';
  void onOpenChange;
  const [isMounted, setIsMounted] = useState<boolean>(open);
  const [isVisible, setIsVisible] = useState<boolean>(open);

  useEffect(() => {
    let mountTimer: ReturnType<typeof setTimeout> | undefined;
    let visibleTimer: ReturnType<typeof setTimeout> | undefined;
    let hideTimer: ReturnType<typeof setTimeout> | undefined;
    let unmountTimer: ReturnType<typeof setTimeout> | undefined;

    if (open) {
      mountTimer = setTimeout(() => {
        setIsMounted(true);
      }, 0);
      visibleTimer = setTimeout(() => {
        setIsVisible(true);
      }, 16);
    } else {
      hideTimer = setTimeout(() => {
        setIsVisible(false);
      }, 0);
      unmountTimer = setTimeout(() => {
        setIsMounted(false);
      }, FADE_DURATION_MS);
    }

    return () => {
      clearTimeout(mountTimer);
      clearTimeout(visibleTimer);
      clearTimeout(hideTimer);
      clearTimeout(unmountTimer);
    };
  }, [open]);

  if (!isMounted) {
    return null;
  }

  return (
    <div
      className={[
        'dx-ui-popover',
        `dx-ui-popover--${size}`,
        `dx-ui-popover--${variant}`,
        isVisible ? 'dx-ui-popover--open' : 'dx-ui-popover--closing',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      {...props}
    >
        <div className="dx-ui-popover__panel">
            {children}
        </div>
     
    </div>
  );
};
