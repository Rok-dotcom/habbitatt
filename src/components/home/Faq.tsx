import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { faqs } from "../../data/mockData";
import SectionHeading from "../ui/SectionHeading";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="container-page py-24 scroll-mt-24">
      <SectionHeading eyebrow="Questions" title="Frequently asked questions" />
      <div className="mt-12 max-w-2xl mx-auto divide-y divide-navy-900/8 dark:divide-white/10">
        {faqs.map((faq, i) => (
          <div key={faq.question} className="py-2">
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full flex items-center justify-between gap-4 py-4 text-left"
            >
              <span className="font-medium text-navy-950 dark:text-white">{faq.question}</span>
              <Plus
                size={18}
                className={`shrink-0 text-brand-600 dark:text-brand-400 transition-transform duration-300 ${
                  open === i ? "rotate-45" : ""
                }`}
              />
            </button>
            <AnimatePresence initial={false}>
              {open === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="overflow-hidden"
                >
                  <p className="pb-4 text-sm text-navy-600 dark:text-white/55 leading-relaxed">{faq.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
