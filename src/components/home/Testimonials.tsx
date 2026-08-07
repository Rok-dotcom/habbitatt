import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "../../data/mockData";
import SectionHeading from "../ui/SectionHeading";
import StarRating from "../ui/StarRating";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const t = testimonials[index];

  const go = (dir: 1 | -1) => {
    setIndex((i) => (i + dir + testimonials.length) % testimonials.length);
  };

  return (
    <section className="container-page py-24">
      <SectionHeading eyebrow="Real stories" title="Loved by patients worldwide" />

      <div className="mt-12 max-w-2xl mx-auto relative">
        <Quote size={48} className="text-brand-100 dark:text-brand-500/15 mx-auto" />
        <AnimatePresence mode="wait">
          <motion.div
            key={t.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35 }}
            className="text-center"
          >
            <p className="font-display text-xl sm:text-2xl font-medium text-navy-950 dark:text-white text-balance leading-snug">
              "{t.quote}"
            </p>
            <div className="mt-6 flex items-center justify-center gap-3">
              <img src={t.avatar} alt={t.name} className="h-11 w-11 rounded-full object-cover" />
              <div className="text-left">
                <p className="text-sm font-semibold text-navy-950 dark:text-white">{t.name}</p>
                <p className="text-xs text-navy-500 dark:text-white/50">{t.location}</p>
              </div>
              <div className="ml-2"><StarRating rating={t.rating} /></div>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="mt-8 flex items-center justify-center gap-3">
          <button
            onClick={() => go(-1)}
            aria-label="Previous testimonial"
            className="h-10 w-10 rounded-full border border-navy-900/10 dark:border-white/15 flex items-center justify-center hover:border-brand-500 hover:text-brand-600 transition-colors"
          >
            <ChevronLeft size={18} />
          </button>
          <div className="flex gap-1.5">
            {testimonials.map((item, i) => (
              <button
                key={item.id}
                onClick={() => setIndex(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`h-1.5 rounded-full transition-all ${i === index ? "w-6 bg-brand-500" : "w-1.5 bg-navy-200 dark:bg-white/20"}`}
              />
            ))}
          </div>
          <button
            onClick={() => go(1)}
            aria-label="Next testimonial"
            className="h-10 w-10 rounded-full border border-navy-900/10 dark:border-white/15 flex items-center justify-center hover:border-brand-500 hover:text-brand-600 transition-colors"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
