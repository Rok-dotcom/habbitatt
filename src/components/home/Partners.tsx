export default function Partners() {
  return (
    <section className="container-page pb-24">
      <p className="text-center text-xs font-semibold tracking-[0.14em] uppercase text-navy-400 dark:text-white/40 mb-8">
        Our trusted partners
      </p>
      <div className="rounded-3xl border border-navy-900/8 dark:border-white/10 grid sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-navy-900/8 dark:divide-white/10">
        <div className="flex items-center gap-4 p-8">
          <div className="h-12 w-12 rounded-xl bg-blue-50 dark:bg-blue-500/10 flex items-center justify-center text-blue-600 dark:text-blue-400 font-display font-bold">
            Ap
          </div>
          <div>
            <span className="inline-block text-[10px] font-bold tracking-wide uppercase text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-brand-500/10 px-2 py-0.5 rounded-full mb-1">
              Medicine partner
            </span>
            <p className="font-display font-bold text-navy-950 dark:text-white">Apollo</p>
            <p className="text-xs text-navy-500 dark:text-white/50">Trusted. Reliable. Apollo.</p>
          </div>
        </div>
        <div className="flex items-center gap-4 p-8">
          <div className="h-12 w-12 rounded-xl bg-purple-50 dark:bg-purple-500/10 flex items-center justify-center text-purple-600 dark:text-purple-400 font-display font-bold">
            Fg
          </div>
          <div>
            <span className="inline-block text-[10px] font-bold tracking-wide uppercase text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-500/10 px-2 py-0.5 rounded-full mb-1">
              Courier partner
            </span>
            <p className="font-display font-bold text-navy-950 dark:text-white">FleetGo</p>
            <p className="text-xs text-navy-500 dark:text-white/50">Delivering care, across the world.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
