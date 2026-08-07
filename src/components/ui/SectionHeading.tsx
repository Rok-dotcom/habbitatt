interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export default function SectionHeading({ eyebrow, title, description, align = "center" }: SectionHeadingProps) {
  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <span className="inline-block text-xs font-semibold tracking-[0.14em] uppercase text-brand-600 dark:text-brand-400 mb-3">
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy-950 dark:text-white text-balance">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base text-navy-600 dark:text-white/60 text-balance">{description}</p>
      )}
    </div>
  );
}
