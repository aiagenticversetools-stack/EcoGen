import Link from 'next/link';
import { cn } from '@/lib/utils';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  type?: 'button' | 'submit';
  variant?: 'primary' | 'secondary';
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
}

const baseClasses =
  'inline-flex min-h-12 items-center justify-center rounded-full px-6 py-3.5 text-center font-accent text-xs font-bold uppercase tracking-[0.16em] transition duration-300 ease-out focus-visible:outline-copper active:translate-y-0 tablet:px-7 tablet:text-sm';

const variants = {
  primary:
    'bg-forest text-white shadow-luxury hover:-translate-y-1 hover:bg-copper hover:shadow-luxury-lg',
  secondary:
    'border border-forest/25 bg-white/70 text-forest backdrop-blur hover:-translate-y-1 hover:border-copper hover:bg-sand/80 hover:text-evergreen'
};

export function Button({
  children,
  href,
  type = 'button',
  variant = 'primary',
  className,
  disabled,
  onClick
}: ButtonProps) {
  const classes = cn(baseClasses, variants[variant], disabled && 'pointer-events-none opacity-60', className);

  if (href) {
    return (
      <Link className={classes} href={href}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} disabled={disabled} onClick={onClick} type={type}>
      {children}
    </button>
  );
}
