import { motion } from "framer-motion";
import { Target, Eye, Users, Award } from "lucide-react";
import SectionHeading from "../components/ui/SectionHeading";

const values = [
  { icon: Target, title: "Our Mission", desc: "Make quality healthcare accessible within minutes, not weeks — regardless of where you live." },
  { icon: Eye, title: "Our Vision", desc: "A world where a first opinion, a specialist, and your medicine cabinet are all one tap away." },
];

const leadership = [
  { name: "Dr. Kavita Bose", role: "Co-founder & Chief Medical Officer", avatar: "https://i.pravatar.cc/200?img=44" },
  { name: "Arun Desai", role: "Co-founder & CEO", avatar: "https://i.pravatar.cc/200?img=13" },
  { name: "Lena Ho", role: "Chief Technology Officer", avatar: "https://i.pravatar.cc/200?img=48" },
  { name: "Dr. Samuel Osei", role: "Head of Clinical Operations", avatar: "https://i.pravatar.cc/200?img=15" },
];

const whyUs = [
  { icon: Award, title: "Verified expertise", desc: "Every doctor is licensed, background-checked, and reviewed by real patients." },
  { icon: Users, title: "Built around you", desc: "One record, one app, across symptom checks, consultations, and pharmacy." },
];

export default function About() {
  return (
    <div className="pt-32 pb-24">
      <div className="container-page">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-2xl">
          <span className="text-xs font-semibold tracking-[0.14em] uppercase text-brand-600 dark:text-brand-400">Our story</span>
          <h1 className="font-display mt-3 text-4xl sm:text-5xl font-bold text-navy-950 dark:text-white text-balance">
            Healthcare shouldn't feel like a waiting room
          </h1>
          <p className="mt-5 text-navy-600 dark:text-white/60 leading-relaxed">
            Habitatt started in 2021 after our founders spent three days trying to get a simple second
            opinion for a family member abroad. We built the platform we wished existed: AI-assisted
            triage, real doctors on video, and medicines that actually arrive — anywhere in the world.
          </p>
        </motion.div>

        <div className="mt-16 grid sm:grid-cols-2 gap-6">
          {values.map((v) => (
            <div key={v.title} className="rounded-3xl border border-navy-900/8 dark:border-white/10 p-8">
              <v.icon size={24} className="text-brand-600 dark:text-brand-400" />
              <h3 className="font-display mt-4 text-xl font-bold text-navy-950 dark:text-white">{v.title}</h3>
              <p className="mt-2 text-sm text-navy-600 dark:text-white/55 leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-mist dark:bg-white/[0.02] py-24 mt-24">
        <div className="container-page">
          <SectionHeading eyebrow="Why choose us" title="Care that's built to be trusted" />
          <div className="mt-12 grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {whyUs.map((w) => (
              <div key={w.title} className="flex gap-4">
                <div className="h-11 w-11 rounded-2xl bg-brand-50 dark:bg-brand-500/10 flex items-center justify-center shrink-0">
                  <w.icon size={20} className="text-brand-600 dark:text-brand-400" />
                </div>
                <div>
                  <p className="font-semibold text-navy-950 dark:text-white">{w.title}</p>
                  <p className="text-sm text-navy-600 dark:text-white/55 mt-1">{w.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container-page mt-24">
        <SectionHeading eyebrow="Leadership" title="The people steering the ship" />
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {leadership.map((person) => (
            <div key={person.name} className="text-center">
              <img src={person.avatar} alt={person.name} className="h-24 w-24 rounded-2xl object-cover mx-auto" />
              <p className="font-display mt-4 font-semibold text-navy-950 dark:text-white">{person.name}</p>
              <p className="text-sm text-navy-500 dark:text-white/50">{person.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
