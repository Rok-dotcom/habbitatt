import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Sparkles, ArrowRight, Loader2 } from "lucide-react";
import Button from "../ui/Button";

const examples = ["Persistent headache", "Sore throat & fever", "Lower back pain", "Skin rash & itching"];

export default function SymptomCheckerTeaser() {
  const [text, setText] = useState("");
  const [thinking, setThinking] = useState(false);

  const handleTry = (value: string) => {
    setText(value);
    setThinking(true);
    setTimeout(() => setThinking(false), 1200);
  };

  return (
    <section className="container-page py-24">
      <div className="rounded-[2.5rem] bg-navy-950 relative overflow-hidden px-6 py-16 sm:px-16">
        <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-brand-500/20 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-cyan-accent/10 blur-3xl" />

        <div className="relative grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold text-brand-300">
              <Sparkles size={14} /> AI Symptom Analyser
            </span>
            <h2 className="font-display mt-5 text-3xl sm:text-4xl font-bold text-white text-balance">
              Not sure what's wrong? Just describe it.
            </h2>
            <p className="mt-4 text-white/60 max-w-md">
              Our AI cross-references your symptoms against clinical patterns to suggest likely causes,
              urgency, and the right specialist to see — in under 15 seconds.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {examples.map((ex) => (
                <button
                  key={ex}
                  onClick={() => handleTry(ex)}
                  className="text-xs font-medium px-3.5 py-2 rounded-full bg-white/5 text-white/70 hover:bg-white/10 hover:text-white transition-colors"
                >
                  {ex}
                </button>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl bg-white dark:bg-navy-900 p-6 shadow-2xl"
          >
            <label className="text-xs font-semibold text-navy-500 dark:text-white/50">Describe your symptoms</label>
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              rows={3}
              placeholder="e.g. I've had a mild fever and sore throat since yesterday..."
              className="mt-2 w-full resize-none rounded-2xl border border-navy-900/10 dark:border-white/10 bg-mist dark:bg-white/5 px-4 py-3 text-sm text-navy-900 dark:text-white placeholder:text-navy-400 focus:border-brand-500 focus:outline-none"
            />
            <div className="mt-4 flex items-center justify-between gap-4">
              <p className="text-[11px] text-navy-400 dark:text-white/40">Not a diagnosis. Always confirm with a doctor.</p>
              <Link to="/ai-symptom-checker" state={{ prefill: text }}>
                <Button icon={thinking ? <Loader2 size={16} className="animate-spin" /> : <ArrowRight size={16} />}>
                  {thinking ? "Analysing..." : "Analyse"}
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
