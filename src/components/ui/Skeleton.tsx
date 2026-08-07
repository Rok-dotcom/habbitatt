import clsx from "clsx";

export default function Skeleton({ className }: { className?: string }) {
  return <div className={clsx("animate-pulse rounded-xl bg-navy-900/8 dark:bg-white/10", className)} />;
}
