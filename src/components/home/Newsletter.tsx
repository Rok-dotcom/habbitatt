import { useState, type FormEvent } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import Button from "../ui/Button";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <section className="container-page pb-24">
      <div className="rounded-3xl bg-mist dark:bg-white/[0.03] border border-navy-900/8 dark:border-white/10 px-6 py-12 sm:px-14 flex flex-col sm:flex-row items-center justify-between gap-8">
        <div>
          <h3 className="font-display text-2xl font-bold text-navy-950 dark:text-white">Stay ahead of your health</h3>
          <p className="mt-2 text-sm text-navy-600 dark:text-white/55">
            One useful email a week — new features, health tips, no spam.
          </p>
        </div>
        {submitted ? (
          <div className="flex items-center gap-2 text-brand-600 dark:text-brand-400 font-medium">
            <CheckCircle2 size={20} /> You're subscribed!
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex w-full sm:w-auto gap-2">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@email.com"
              className="flex-1 sm:w-64 rounded-full border border-navy-900/10 dark:border-white/15 bg-white dark:bg-navy-900 px-5 py-3 text-sm text-navy-900 dark:text-white placeholder:text-navy-400 focus:border-brand-500 focus:outline-none"
            />
            <Button type="submit" icon={<Send size={15} />}>Subscribe</Button>
          </form>
        )}
      </div>
    </section>
  );
}
