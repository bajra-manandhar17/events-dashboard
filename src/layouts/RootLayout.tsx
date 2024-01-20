import type { ComponentProps, ReactNode } from 'react';
import { memo } from 'react';
import { twMerge } from 'tailwind-merge';

type RootLayoutProps = ComponentProps<'main'> & {
  className?: string;
  children: ReactNode;
};

const RootLayout = memo<RootLayoutProps>(
  ({ className, children, ...props }) => {
    return (
      <main className={twMerge('flex flex-row h-screen', className)} {...props}>
        {children}
      </main>
    );
  }
);

RootLayout.displayName = 'RootLayout';

export default RootLayout;
