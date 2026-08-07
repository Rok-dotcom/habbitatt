import { type ReactNode } from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Sparkles, Globe2 } from "lucide-react";
import Logo from "../ui/Logo";

export default function AuthLayout({ children, title, subtitle }: { children: ReactNode; title: string; subtitle: string }) {
  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      <div className="flex flex-col justify-center px-6 sm:px-12 lg:px-20 py-16">
        <Logo className="mb-10" />
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="max-w-sm mx-auto w-full">
          <h1 className="font-display text-3xl font-bold text-navy-950 dark:text-white">{title}</h1>
          <p className="mt-2 text-sm text-navy-500 dark:text-white/50">{subtitle}</p>
          <div className="mt-8">{children}</div>
        </motion.div>
      </div>

      <div className="hidden lg:flex relative bg-navy-950 items-center justify-center overflow-hidden p-16">
        <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-brand-500/20 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-cyan-accent/10 blur-3xl" />
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative max-w-sm text-center"
        >
          <div className="mx-auto h-16 w-16 rounded-2xl bg-brand-500 flex items-center justify-center animate-float">
            <ShieldCheck size={28} className="text-white" />
          </div>
          <h2 className="font-display mt-8 text-2xl font-bold text-white text-balance">Your health, protected end to end</h2>
          <p className="mt-3 text-sm text-white/60">Encrypted records, verified doctors, and medicines you can trust — all in one account.</p>
          <div className="mt-10 grid grid-cols-2 gap-4 text-left">
            <div className="rounded-2xl bg-white/5 p-4">
              <Sparkles size={18} className="text-brand-400" />
              <p className="text-xs text-white/70 mt-2">AI-powered symptom insights</p>
            </div>
            <div className="rounded-2xl bg-white/5 p-4">
              <Globe2 size={18} className="text-brand-400" />
              <p className="text-xs text-white/70 mt-2">Care available in 40+ countries</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
