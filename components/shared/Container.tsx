import { cn } from '@/lib/utils';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function Container({ children, className }: ContainerProps) {
  return <div className={cn('site-container', className)}>{children}</div>;
}

export function ContentContainer({ children, className }: ContainerProps) {
  return <div className={cn('content-container', className)}>{children}</div>;
}
