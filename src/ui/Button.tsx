import './button.scss';
import type { ButtonHTMLAttributes } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Is this the principal call to action on the page? */
  secondary?: boolean;
  /** How large should the button be? */
  size?: 'large' | 'small' ;
  /** Button contents */
  //children: ReactNode | string | undefined;
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
