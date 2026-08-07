import { ShieldCheck, Lock, Zap, Globe2 } from "lucide-react";
import { motion } from "framer-motion";

const items = [
  { icon: ShieldCheck, title: "Trusted Doctors", desc: "Experienced & verified doctors" },
  { icon: Lock, title: "Safe & Secure", desc: "Your data is 100% private & secure" },
  { icon: Zap, title: "Fast & Convenient", desc: "Care that fits your busy life" },
  { icon: Globe2, title: "Care Worldwide", desc: "Quality healthcare, wherever you are" },
];

export default function TrustStrip() {
  return (
    <section className="container-page -mt-4 sm:-mt-8 relative z-10">
      <div className="rounded-3xl border border-navy-900/8 dark:border-white/10 bg-white dark:bg-navy-900 shadow-xl shadow-navy-900/5 grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-navy-900/8 dark:divide-white/10">
        {items.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
            className="flex items-start gap-3 p-5 sm:p-6"
          >
            <div className="h-10 w-10 rounded-xl bg-brand-50 dark:bg-brand-500/10 flex items-center justify-center shrink-0">
              <item.icon size={18} className="text-brand-600 dark:text-brand-400" />
            </div>
            <div>
              <p className="text-sm font-semibold text-navy-950 dark:text-white">{item.title}</p>
              <p className="text-xs text-navy-500 dark:text-white/50 mt-0.5">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
