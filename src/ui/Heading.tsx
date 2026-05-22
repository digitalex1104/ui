import './heading.scss';
import type { HTMLAttributes, ReactNode } from 'react';

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  /** Heading contents */
  children: ReactNode;
  /** Heading level */
  level?: 1 | 2 | 3 | 4 | 5 | 6;
}

/** Primary UI component for displaying headlines */
export const Heading = ({
  children,
  level = 2,
  className,
  ...props
}: HeadingProps) => {
  const Tag = `h${level}` as const;
  return (
    <Tag
      className={['dx-ui-heading', `dx-ui-heading--${level}`, className]
        .filter(Boolean)
        .join(' ')}
      {...props}
    >
      {children}
    </Tag>
  );
};
