import { motion } from "framer-motion";
import { Brain, Video, Truck, FileHeart, Stethoscope, HeartPulse, FlaskConical, AlarmClockCheck } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";

const features = [
  { icon: Brain, title: "AI Symptom Analyser", desc: "Describe how you feel and get an instant, explainable read on likely causes and urgency." },
  { icon: Video, title: "Video Consultation", desc: "Face-to-face visits with verified doctors from your couch, in under a minute of waiting." },
  { icon: Truck, title: "Medicine Delivery", desc: "Genuine medicines, sourced and shipped safely — tracked from pharmacy to your door." },
  { icon: FileHeart, title: "Health Reports", desc: "Lab results and consultation notes organised in one timeline you actually understand." },
  { icon: Stethoscope, title: "Health Packages", desc: "Preventive check-up bundles tailored to age, lifestyle, and family history." },
  { icon: AlarmClockCheck, title: "Emergency Assistance", desc: "One tap connects you to nearby emergency services and your closest hospital." },
  { icon: HeartPulse, title: "Mental Health", desc: "Licensed psychologists and psychiatrists, available on your schedule, not theirs." },
  { icon: FlaskConical, title: "Lab Test Booking", desc: "Book diagnostic tests with home sample collection and digital reports in hours." },
];

export default function Features() {
  return (
    <section className="container-page py-24">
      <SectionHeading
        eyebrow="What you get"
        title="Every part of your care, in one place"
        description="No more juggling apps for symptoms, appointments, prescriptions, and pharmacy runs."
      />
      <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: (i % 4) * 0.08, duration: 0.5 }}
            className="group rounded-3xl border border-navy-900/8 dark:border-white/10 p-6 hover:border-brand-300 dark:hover:border-brand-500/40 hover:shadow-lg hover:shadow-brand-500/5 transition-all duration-300"
          >
            <div className="h-11 w-11 rounded-2xl bg-navy-950 dark:bg-brand-500 flex items-center justify-center group-hover:bg-brand-500 transition-colors duration-300">
              <f.icon size={20} className="text-white" />
            </div>
            <h3 className="font-display mt-5 font-semibold text-navy-950 dark:text-white">{f.title}</h3>
            <p className="mt-2 text-sm text-navy-600 dark:text-white/55 leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
