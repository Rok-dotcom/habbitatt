import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Brain, Video, Truck, FileHeart, Stethoscope, AlarmClockCheck, HeartPulse, FlaskConical, ArrowRight } from "lucide-react";
import SectionHeading from "../components/ui/SectionHeading";
import Button from "../components/ui/Button";

const services = [
  { icon: Brain, title: "AI Symptom Analyzer", desc: "Describe your symptoms in plain language and get instant, explainable insights on likely causes and urgency.", to: "/ai-symptom-checker", cta: "Try it now" },
  { icon: Video, title: "Online Consultation", desc: "Video visits with verified specialists across 30+ fields, with digital prescriptions issued on the spot.", to: "/doctors", cta: "Find a doctor" },
  { icon: Truck, title: "Medicine Delivery", desc: "Order prescription and OTC medicines with pharmacist verification and doorstep delivery worldwide.", to: "/medicine", cta: "Order medicine" },
  { icon: FileHeart, title: "Health Reports", desc: "All your lab results, prescriptions, and consultation notes organized in one secure timeline.", to: "/dashboard/prescriptions", cta: "View reports" },
  { icon: Stethoscope, title: "Health Packages", desc: "Preventive check-up bundles curated by age, gender, and lifestyle risk factors.", to: "/services", cta: "Explore packages" },
  { icon: AlarmClockCheck, title: "Emergency Assistance", desc: "Instant routing to nearby emergency rooms and ambulance services when minutes matter.", to: "/contact", cta: "Get help" },
  { icon: HeartPulse, title: "Mental Health", desc: "Confidential sessions with licensed therapists and psychiatrists, on a schedule that fits you.", to: "/doctors", cta: "Book a session" },
  { icon: FlaskConical, title: "Lab Test Booking", desc: "Home sample collection for 200+ diagnostic tests with digital reports within hours.", to: "/services", cta: "Book a test" },
];

export default function Services() {
  return (
    <div className="pt-32 pb-24">
      <div className="container-page">
        <SectionHeading eyebrow="What we offer" title="Every service your health needs" description="From a quick AI check-in to worldwide medicine delivery — designed to work together." />
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 3) * 0.08, duration: 0.5 }}
              className="rounded-3xl border border-navy-900/8 dark:border-white/10 p-7 flex flex-col hover:border-brand-300 dark:hover:border-brand-500/40 hover:shadow-lg transition-all"
            >
              <div className="h-12 w-12 rounded-2xl bg-navy-950 dark:bg-brand-500 flex items-center justify-center">
                <s.icon size={22} className="text-white" />
              </div>
              <h3 className="font-display mt-5 text-lg font-bold text-navy-950 dark:text-white">{s.title}</h3>
              <p className="mt-2 text-sm text-navy-600 dark:text-white/55 leading-relaxed flex-1">{s.desc}</p>
              <Link to={s.to} className="mt-5">
                <Button variant="outline" size="sm" icon={<ArrowRight size={14} />}>{s.cta}</Button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
