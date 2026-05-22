import './switch.scss';
import type { InputHTMLAttributes } from 'react';

export interface SwitchProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'> {
  /** Is this the principal call to action on the page? */
  secondary?: boolean;
  /** How large should the button be? */
  size?: 'large' | 'small';
  /** Button contents */
  children?: string;
}

/** Primary UI component for user interaction */
export const Switch = ({
  secondary = false,
  size = 'large',
  children = 'Button',
  className,
  ...props
}: SwitchProps) => {
  const mode = secondary ? 'dx-ui-switch--secondary' : 'dx-ui-switch--primary';
  return (
    <label className={['dx-ui-switch', `dx-ui-switch--${size}`, mode, className].filter(Boolean).join(' ')}>
        <input type="checkbox" {...props} />
        <span className="dx-ui-switch-slider"></span>
        <span className="dx-ui-switch-label">{children}</span>
    </label>
  );
};
