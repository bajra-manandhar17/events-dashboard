import type { ComponentProps, FC, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

type TopBarProps = ComponentProps<'header'> & {
  className?: string;
  children?: ReactNode;
};

const TopBar: FC<TopBarProps> = ({ className, children, ...props }) => {
  return (
    <header
      className={twMerge(
        'absolute inset-0 h-8 flex justify-around items-center py-6 bg-gray-800 border-b border-black',
        className
      )}
      {...props}
    >
      {children}
    </header>
  );
};

TopBar.displayName = 'TopBar';

export default TopBar;
