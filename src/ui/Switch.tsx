import './switch.scss';
import React from 'react';
import type { ReactNode } from 'react';

export interface SwitchProps {
  /** Size of the element */
  size?: 'small' | 'medium' | 'large';
  /** Label content */
  children?: ReactNode | string | undefined;
  /** Funtion triggered when checked state changes. Has new checked state as argument */
  onChekcedChange?: (checked: boolean) => void;
  /** sets checked state */
  checked?: boolean | undefined;
  /** Disables interaction with element and grays it out */
  disabled?: boolean;
  /** Additional classes for the element */
  className?: string;
}

/** Primary UI component for user interaction */
export const Switch = ({
  size = 'medium',
  children = 'Label',
  disabled = false,
  onChekcedChange = () => {},
  checked,
  className,
  //...props
}: SwitchProps) => {
  const [internalChecked, setInternalChecked] = React.useState<boolean | undefined>(checked);
  const isControlled = checked !== undefined;
  const isChecked = isControlled ? checked : internalChecked;
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const nextChecked = e.target.checked;
    if (!isControlled) {
      setInternalChecked(nextChecked);
    }
    onChekcedChange(nextChecked);
  };

  return (
    <div className={['dx-ui-switch', `dx-ui-switch--${size}`, className].filter(Boolean).join(' ')}>
        <input type="checkbox" checked={isChecked} disabled={disabled} onChange={handleChange}/>
        <div className="dx-ui-switch__slider"></div>
        <div className="dx-ui-switch__label">{children}</div>
    </div>
  );
};
