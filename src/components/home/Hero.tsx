import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Video, ShieldCheck, Mic, PhoneOff, Camera } from "lucide-react";
import Button from "../ui/Button";

const floatUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 + i * 0.1, duration: 0.6, ease: "easeOut" as const },
  }),
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-brand-50/70 via-white to-white dark:from-brand-500/[0.06] dark:via-mist-dark dark:to-mist-dark" />
      <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-brand-200/30 dark:bg-brand-500/10 blur-3xl -z-10" />
      <div className="absolute top-40 -left-32 h-80 w-80 rounded-full bg-cyan-accent/10 blur-3xl -z-10" />

      <div className="container-page grid lg:grid-cols-[1.05fr_0.95fr] gap-14 items-center">
        <div>
          <motion.div
            initial="hidden"
            animate="show"
            custom={0}
            variants={floatUp}
            className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs font-semibold text-navy-800 dark:text-white/80 shadow-sm"
          >
            <span className="h-2 w-2 rounded-full bg-brand-500 animate-pulse-ring" />
            Trusted by 2M+ patients worldwide
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="show"
            custom={1}
            variants={floatUp}
            className="font-display mt-6 text-5xl sm:text-6xl lg:text-[4rem] font-bold leading-[1.05] text-navy-950 dark:text-white text-balance"
          >
            Smart care.
            <br />
            <span className="text-brand-600 dark:text-brand-400">Anywhere.</span>
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="show"
            custom={2}
            variants={floatUp}
            className="mt-6 text-lg text-navy-600 dark:text-white/60 max-w-lg text-balance"
          >
            AI insights, expert doctors, and medicines delivered worldwide — everything you need for your
            family's health, in one calm, uncluttered place.
          </motion.p>

          <motion.div initial="hidden" animate="show" custom={3} variants={floatUp} className="mt-8 flex flex-wrap items-center gap-4">
            <Link to="/ai-symptom-checker">
              <Button size="lg" icon={<ArrowRight size={18} />}>Check my symptoms</Button>
            </Link>
            <Link to="/doctors">
              <Button size="lg" variant="outline" icon={<Video size={18} />} iconPosition="left">
                Book a consultation
              </Button>
            </Link>
          </motion.div>

          <motion.div initial="hidden" animate="show" custom={4} variants={floatUp} className="mt-10 flex items-center gap-4">
            <div className="flex -space-x-3">
              {[47, 12, 32, 51].map((n) => (
                <img
                  key={n}
                  src={`https://i.pravatar.cc/80?img=${n}`}
                  alt=""
                  className="h-10 w-10 rounded-full ring-4 ring-white dark:ring-mist-dark object-cover"
                />
              ))}
            </div>
            <div>
              <p className="text-sm font-semibold text-navy-900 dark:text-white">4.9/5 average rating</p>
              <p className="text-xs text-navy-500 dark:text-white/50">from 48,000+ verified reviews</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="animate-float">
            <div className="relative rounded-[2.5rem] border-8 border-navy-950 dark:border-white/10 bg-navy-950 shadow-2xl shadow-navy-900/20 overflow-hidden">
              <div className="bg-white dark:bg-navy-900 rounded-[1.9rem] overflow-hidden">
                <div className="px-5 pt-6 pb-4 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <div className="h-2 w-2 rounded-full bg-brand-500" />
                    <span className="font-display text-sm font-bold text-navy-950 dark:text-white">Habitatt</span>
                  </div>
                  <ShieldCheck size={16} className="text-brand-500" />
                </div>
                <div className="px-5 pb-3">
                  <p className="text-xs text-navy-500 dark:text-white/50">Healthcare made simple,</p>
                  <p className="text-sm font-semibold text-brand-600 dark:text-brand-400">just for you.</p>
                </div>
                <div className="mx-4 mb-4 aspect-[4/5] rounded-2xl bg-gradient-to-br from-brand-100 to-cyan-accent/10 dark:from-brand-500/20 dark:to-cyan-accent/10 relative overflow-hidden">
                  <img
                    src="https://i.pravatar.cc/400?img=47"
                    alt="Doctor on video call"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <img
                    src="https://i.pravatar.cc/100?img=12"
                    alt="Patient"
                    className="absolute top-3 right-3 h-12 w-16 rounded-lg object-cover ring-2 ring-white/80"
                  />
                  <div className="absolute bottom-3 inset-x-3 flex items-center justify-center gap-4">
                    {[Mic, PhoneOff, Camera].map((Icon, i) => (
                      <div
                        key={i}
                        className={`h-9 w-9 rounded-full flex items-center justify-center ${
                          i === 1 ? "bg-red-500" : "bg-white/90"
                        }`}
                      >
                        <Icon size={15} className={i === 1 ? "text-white" : "text-navy-800"} />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="px-5 pb-6">
                  <p className="text-[11px] font-semibold text-navy-500 dark:text-white/50 mb-2.5">Your Care Journey</p>
                  <div className="flex items-center justify-between">
                    {["Analyse", "Consult", "Delivered"].map((step, i) => (
                      <div key={step} className="flex-1 flex flex-col items-center relative">
                        {i < 2 && <div className="absolute top-4 left-1/2 w-full h-0.5 bg-brand-200 dark:bg-brand-500/20" />}
                        <div className="relative z-10 h-8 w-8 rounded-full bg-brand-50 dark:bg-brand-500/15 border border-brand-200 dark:border-brand-500/30 flex items-center justify-center text-[11px] font-bold text-brand-700 dark:text-brand-400">
                          {i + 1}
                        </div>
                        <span className="mt-1.5 text-[10px] font-medium text-navy-600 dark:text-white/50">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="absolute -left-8 top-16 glass rounded-2xl px-4 py-3 shadow-lg hidden sm:block"
          >
            <p className="text-xs font-semibold text-navy-900 dark:text-white">Medicine delivered</p>
            <p className="text-[11px] text-navy-500 dark:text-white/50">to 40+ countries</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="absolute -right-6 bottom-24 glass rounded-2xl px-4 py-3 shadow-lg hidden sm:block"
          >
            <p className="text-xs font-semibold text-navy-900 dark:text-white">98% match accuracy</p>
            <p className="text-[11px] text-navy-500 dark:text-white/50">AI symptom insights</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
