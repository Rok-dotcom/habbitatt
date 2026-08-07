import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Globe2, PackageCheck, ShieldCheck, ArrowRight } from "lucide-react";
import Button from "../ui/Button";

export default function MedicineDeliveryPreview() {
  return (
    <section className="bg-mist dark:bg-white/[0.02] py-24">
      <div className="container-page grid lg:grid-cols-2 gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-xs font-semibold tracking-[0.14em] uppercase text-brand-600 dark:text-brand-400 mb-3">
            Medicine delivery
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy-950 dark:text-white text-balance">
            Genuine medicines, delivered to any part of the world
          </h2>
          <p className="mt-4 text-navy-600 dark:text-white/60 max-w-md">
            Sourced through our verified pharmacy partner and shipped by a dedicated courier network —
            from your doctor's prescription to your doorstep.
          </p>

          <div className="mt-8 space-y-4">
            {[
              { icon: ShieldCheck, title: "Verified & genuine", desc: "Every order checked against pharmacy licensing." },
              { icon: Globe2, title: "40+ countries", desc: "Cross-border delivery with customs handled for you." },
              { icon: PackageCheck, title: "Live tracking", desc: "Know exactly where your order is, end to end." },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-3">
                <div className="h-9 w-9 rounded-xl bg-brand-50 dark:bg-brand-500/10 flex items-center justify-center shrink-0">
                  <item.icon size={16} className="text-brand-600 dark:text-brand-400" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-navy-950 dark:text-white">{item.title}</p>
                  <p className="text-xs text-navy-500 dark:text-white/50">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <Link to="/medicine" className="inline-block mt-8">
            <Button icon={<ArrowRight size={16} />}>Browse medicines</Button>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="rounded-3xl bg-white dark:bg-navy-900 border border-navy-900/8 dark:border-white/10 shadow-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm font-semibold text-navy-950 dark:text-white">Order #HB-40291</p>
              <span className="text-xs font-semibold text-brand-600 bg-brand-50 dark:bg-brand-500/10 dark:text-brand-400 px-2.5 py-1 rounded-full">
                In transit
              </span>
            </div>
            <div className="space-y-5">
              {["Order confirmed", "Dispatched from Bengaluru", "Customs cleared — Singapore", "Out for delivery"].map(
                (step, i) => (
                  <div key={step} className="flex items-center gap-3">
                    <div
                      className={`h-3 w-3 rounded-full shrink-0 ${
                        i < 3 ? "bg-brand-500" : "bg-navy-200 dark:bg-white/20"
                      }`}
                    />
                    <p className={`text-sm ${i < 3 ? "text-navy-900 dark:text-white font-medium" : "text-navy-400 dark:text-white/40"}`}>
                      {step}
                    </p>
                  </div>
                )
              )}
            </div>
          </div>
          <div className="absolute -bottom-6 -right-6 rounded-2xl bg-brand-500 text-white px-5 py-4 shadow-xl hidden sm:block">
            <p className="text-2xl font-bold font-display">2.1 days</p>
            <p className="text-xs text-white/80">avg. delivery time</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
