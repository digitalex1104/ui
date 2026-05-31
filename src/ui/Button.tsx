import './button.scss';
import type { ButtonHTMLAttributes, ReactNode } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Layout variant of the element */
  variant?: 'primary' | 'secondary' | 'tertiary';
  /** Size of the element */
  size?: 'small' | 'medium' | 'large' ;
  /** Label contents */
  children?: ReactNode | string | undefined;
}

/** Primary UI component for user interaction */
export const Button = ({
  variant = 'primary',
  size = 'large',
  children = 'Button',
  className,
  ...props
}: ButtonProps) => {
  //const mode = secondary ? 'dx-ui-button--secondary' : 'dx-ui-button--primary';
  return (
    <button
      type="button"
      className={['dx-ui-button', `dx-ui-button--${size}`, `dx-ui-button--${variant}`, className]
        .filter(Boolean)
        .join(' ')}
      {...props}
    >
      {children}
    </button>
  );
};
