import './heading.scss';
import type { JSX } from 'react';

export interface HeadingProps { 
  /** Heading contents */
  label: string; 
  /** Heading level */
  level?: 1 | 2 | 3 | 4 | 5 | 6;
}

/** Primary UI component for displaying headlines */
export const Heading = ({
  label,
  level = 1,
  ...props
}: HeadingProps) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  return (
    <Tag
      className={['dx-ui-heading', `dx-ui-heading--${level}`].join(' ')}
      {...props}
    >
      {label}
    </Tag>
  );
};
