import './switch.scss';
import type { InputHTMLAttributes, ReactNode } from 'react';

export interface SwitchProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'> {
  /** Layout of the element */
  secondary?: boolean;
  /** Size of the element */
  size?: 'small' | 'medium' | 'large';
  /** Label content */
  children?: ReactNode | string | undefined;
}

/** Primary UI component for user interaction */
export const Switch = ({
  secondary = false,
  size = 'medium',
  children = 'Label',
  //disabled = false,
  className,
  ...props
}: SwitchProps) => {
  const mode = secondary ? 'dx-ui-switch--secondary' : 'dx-ui-switch--primary';
  return (
    <label className={['dx-ui-switch', `dx-ui-switch--${size}`, mode, className].filter(Boolean).join(' ')}>
        <input type="checkbox" {...props} />
        <span className="dx-ui-switch--slider"></span>
        <span className="dx-ui-switch--label">{children}</span>
    </label>
  );
};
