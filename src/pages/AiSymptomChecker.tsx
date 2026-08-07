import { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Loader2, AlertTriangle, Stethoscope, ArrowRight, MapPin } from "lucide-react";
import { analyzeSymptoms, type SymptomResult } from "../services/aiService";
import Button from "../components/ui/Button";

const urgencyStyles: Record<SymptomResult["urgency"], string> = {
  low: "bg-brand-50 text-brand-700 dark:bg-brand-500/10 dark:text-brand-400",
  moderate: "bg-amber-50 text-amber-700 dark:bg-amber-500/10 dark:text-amber-400",
  high: "bg-red-50 text-red-700 dark:bg-red-500/10 dark:text-red-400",
};

export default function AiSymptomChecker() {
  const location = useLocation();
  const [symptoms, setSymptoms] = useState((location.state as { prefill?: string })?.prefill || "");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<SymptomResult[] | null>(null);

  const handleAnalyze = async () => {
    if (!symptoms.trim()) return;
    setLoading(true);
    setResults(null);
    const data = await analyzeSymptoms(symptoms);
    setResults(data);
    setLoading(false);
  };

  const highUrgency = results?.some((r) => r.urgency === "high");

  return (
    <div className="pt-32 pb-24">
      <div className="container-page max-w-3xl">
        <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.14em] uppercase text-brand-600 dark:text-brand-400">
          <Sparkles size={14} /> AI Symptom Analyser
        </span>
        <h1 className="font-display mt-3 text-4xl font-bold text-navy-950 dark:text-white">What's bothering you today?</h1>
        <p className="mt-3 text-navy-600 dark:text-white/60">
          Describe your symptoms as naturally as you would to a doctor. The more detail, the better the insight.
        </p>

        <div className="mt-8 rounded-3xl border border-navy-900/8 dark:border-white/10 p-6 sm:p-7">
          <textarea
            value={symptoms}
            onChange={(e) => setSymptoms(e.target.value)}
            rows={4}
            placeholder="e.g. I've had a dull headache for two days, worse in the mornings, along with some nausea..."
            className="w-full resize-none rounded-2xl border border-navy-900/10 dark:border-white/10 bg-mist dark:bg-white/5 px-4 py-3.5 text-sm text-navy-900 dark:text-white placeholder:text-navy-400 focus:border-brand-500 focus:outline-none"
          />
          <div className="mt-4 flex items-center justify-between flex-wrap gap-3">
            <p className="text-[11px] text-navy-400 dark:text-white/40 max-w-xs">
              This tool doesn't diagnose. It's a starting point — always confirm with a licensed professional.
            </p>
            <Button
              onClick={handleAnalyze}
              disabled={loading || !symptoms.trim()}
              icon={loading ? <Loader2 size={16} className="animate-spin" /> : <ArrowRight size={16} />}
            >
              {loading ? "Analysing..." : "Analyse symptoms"}
            </Button>
          </div>
        </div>

        <AnimatePresence>
          {results && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-8 space-y-5"
            >
              {highUrgency && (
                <div className="rounded-2xl bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/20 p-4 flex items-start gap-3">
                  <AlertTriangle size={20} className="text-red-600 shrink-0 mt-0.5" />
                  <p className="text-sm text-red-700 dark:text-red-300">
                    Some of your symptoms may need urgent attention. If this feels severe, please contact
                    local emergency services or visit the nearest ER immediately.
                  </p>
                </div>
              )}

              <div>
                <h2 className="font-display text-lg font-bold text-navy-950 dark:text-white mb-4">Possible insights</h2>
                <div className="space-y-3">
                  {results.map((r) => (
                    <div key={r.condition} className="rounded-2xl border border-navy-900/8 dark:border-white/10 p-5">
                      <div className="flex items-center justify-between gap-3">
                        <p className="font-semibold text-navy-950 dark:text-white">{r.condition}</p>
                        <span className={`text-xs font-semibold px-2.5 py-1 rounded-full capitalize ${urgencyStyles[r.urgency]}`}>
                          {r.urgency} urgency
                        </span>
                      </div>
                      <div className="mt-3 h-1.5 rounded-full bg-navy-900/8 dark:bg-white/10 overflow-hidden">
                        <div className="h-full bg-brand-500 rounded-full" style={{ width: `${r.probability}%` }} />
                      </div>
                      <p className="text-xs text-navy-500 dark:text-white/50 mt-1.5">{r.probability}% pattern match</p>
                      <p className="mt-3 text-sm text-navy-600 dark:text-white/60 leading-relaxed">{r.advice}</p>
                      <div className="mt-4 flex items-center gap-2 text-sm text-brand-600 dark:text-brand-400 font-medium">
                        <Stethoscope size={15} /> Recommended: {r.specialist}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl bg-mist dark:bg-white/[0.03] border border-navy-900/8 dark:border-white/10 p-5 flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-3">
                  <MapPin size={18} className="text-brand-500" />
                  <p className="text-sm text-navy-700 dark:text-white/70">See a specialist based on these results?</p>
                </div>
                <Link to="/doctors">
                  <Button size="sm">Find a doctor</Button>
                </Link>
              </div>

              <p className="text-[11px] text-navy-400 dark:text-white/40 text-center">
                Disclaimer: Habitatt's AI Symptom Analyser provides general information only and is not a
                substitute for professional medical advice, diagnosis, or treatment.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
