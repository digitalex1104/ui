import './button.scss';
import type { ButtonHTMLAttributes, ReactNode } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Is this the principal call to action on the page? */
  primary?: boolean;
  /** What background color to use */
  backgroundColor?: string;
  /** How large should the button be? */
  size?: 'small' | 'medium' | 'large';
  /** Button contents */
  children: ReactNode;
}

/** Primary UI component for user interaction */
export const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  children,
  className,
  ...props
}: ButtonProps) => {
  const mode = primary ? 'dx-ui-button--primary' : 'dx-ui-button--secondary';
  return (
    <button
      type="button"
      className={['dx-ui-button', `dx-ui-button--${size}`, mode, className]
        .filter(Boolean)
        .join(' ')}
      style={{ backgroundColor }}
      {...props}
    >
      {children}
    </button>
  );
};
