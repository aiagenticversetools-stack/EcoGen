export function LoadingStates({ label = 'Loading' }: { label?: string }) {
  return (
    <span className="inline-flex items-center gap-2" aria-live="polite">
      <span className="h-2 w-2 animate-pulse rounded-full bg-current" />
      {label}
    </span>
  );
}
