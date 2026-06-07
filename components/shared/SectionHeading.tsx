import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  className
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'max-w-3xl',
        align === 'center' && 'mx-auto text-center',
        className
      )}
    >
      {eyebrow ? <p className="eyebrow mb-4">{eyebrow}</p> : null}
      <h2 className="font-heading text-4xl leading-[1.02] tracking-[-0.02em] text-evergreen tablet:text-6xl laptop:text-7xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-base leading-8 text-charcoal/72 tablet:mt-6 tablet:text-xl">{description}</p>
      ) : null}
    </div>
  );
}
