import { type HTMLAttributes } from "react";
import clsx from "clsx";

export default function Card({ className, children, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={clsx(
        "rounded-3xl border border-navy-900/8 bg-white shadow-sm shadow-navy-900/5 dark:bg-white/[0.04] dark:border-white/10",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
