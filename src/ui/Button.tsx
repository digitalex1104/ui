import './button.scss';
import type { ButtonHTMLAttributes, ReactNode } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Layout of the element */
  secondary?: boolean;
  /** Size of the element */
  size?: 'large' | 'small' ;
  /** Label contents */
  children?: ReactNode | string | undefined;
}

/** Primary UI component for user interaction */
export const Button = ({
  secondary = false,
  size = 'large',
  children = 'Button',
  className,
  ...props
}: ButtonProps) => {
  const mode = secondary ? 'dx-ui-button--secondary' : 'dx-ui-button--primary';
  return (
    <button
      type="button"
      className={['dx-ui-button', `dx-ui-button--${size}`, mode, className]
        .filter(Boolean)
        .join(' ')}
      {...props}
    >
      {children}
    </button>
  );
};
