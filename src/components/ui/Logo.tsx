import { Link } from "react-router-dom";
import clsx from "clsx";

export default function Logo({ light = false, className }: { light?: boolean; className?: string }) {
  return (
    <Link to="/" className={clsx("flex items-center gap-2 shrink-0", className)}>
      <svg width="30" height="30" viewBox="0 0 32 32" fill="none">
        <path
          d="M16 27c-1.4-5.2-5.6-6.6-5.6-11.6a5.6 5.6 0 0 1 11.2 0c0 5-4.2 6.4-5.6 11.6Z"
          stroke="#16A34A"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M9.5 12.5c2-2.8 3.6-4.2 6.5-4.2s4.5 1.4 6.5 4.2"
          stroke="#16A34A"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
      <span className={clsx("font-display text-xl font-bold", light ? "text-white" : "text-navy-950 dark:text-white")}>
        Habitatt
      </span>
    </Link>
  );
}
