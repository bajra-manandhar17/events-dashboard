import type { ComponentProps, ReactNode } from 'react';
import { forwardRef, memo } from 'react';
import { twMerge } from 'tailwind-merge';

type ContentProps = ComponentProps<'div'> & {
  className?: string;
  children?: ReactNode;
};

const Content = memo(
  forwardRef<HTMLDivElement, ContentProps>(
    ({ className, children, ...props }, ref) => {
      return (
        <div
          ref={ref}
          className={twMerge(
            'flex flex-col flex-1 h-full overflow-auto',
            className
          )}
          {...props}
        >
          {children}
        </div>
      );
    }
  )
);

Content.displayName = 'Content';

export default Content;
