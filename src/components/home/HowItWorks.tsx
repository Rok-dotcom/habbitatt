import { motion } from "framer-motion";
import { Brain, Video, Package } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";

const steps = [
  { icon: Brain, title: "Analyse", desc: "Tell our AI what's wrong. Get probable causes, urgency level, and the right specialist — in seconds." },
  { icon: Video, title: "Consult", desc: "Book a video call with a verified doctor who already has your AI insights in front of them." },
  { icon: Package, title: "Delivered", desc: "Prescriptions route straight to pharmacy. Your medicines arrive at your door, tracked end-to-end." },
];

export default function HowItWorks() {
  return (
    <section className="bg-mist dark:bg-white/[0.02] py-24">
      <div className="container-page">
        <SectionHeading eyebrow="Your Care Journey" title="From symptom to solution in three steps" />
        <div className="mt-16 relative grid sm:grid-cols-3 gap-10">
          <div className="hidden sm:block absolute top-8 left-[16.5%] right-[16.5%] h-0.5 bg-gradient-to-r from-brand-200 via-brand-400 to-brand-200 dark:from-brand-500/20 dark:via-brand-500/50 dark:to-brand-500/20" />
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.55 }}
              className="relative text-center"
            >
              <div className="relative z-10 mx-auto h-16 w-16 rounded-2xl bg-white dark:bg-navy-900 border-2 border-brand-500 flex items-center justify-center shadow-lg shadow-brand-500/10">
                <step.icon size={26} className="text-brand-600 dark:text-brand-400" />
              </div>
              <h3 className="font-display mt-6 text-lg font-bold text-navy-950 dark:text-white">{step.title}</h3>
              <p className="mt-2 text-sm text-navy-600 dark:text-white/55 max-w-xs mx-auto leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
