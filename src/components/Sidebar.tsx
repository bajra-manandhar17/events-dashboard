import type { ComponentProps, ReactNode } from 'react';
import { memo } from 'react';
import { twMerge } from 'tailwind-merge';

type SidebarProps = ComponentProps<'aside'> & {
  className?: string;
  children: ReactNode;
};

const Sidebar = memo<SidebarProps>(({ className, children, ...props }) => {
  return (
    <aside
      className={twMerge(
        'w-1/3 mt-13 h-[100vh + 10px] overflow-auto bg-slate-200',
        className
      )}
      {...props}
    >
      {children}
    </aside>
  );
});

Sidebar.displayName = 'Sidebar';

export default Sidebar;
