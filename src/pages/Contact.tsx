import { useState, type FormEvent } from "react";
import { Mail, Phone, MapPin, MessageCircle, Send, CheckCircle2 } from "lucide-react";
import Button from "../components/ui/Button";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="pt-32 pb-24">
      <div className="container-page grid lg:grid-cols-[0.9fr_1.1fr] gap-14">
        <div>
          <span className="text-xs font-semibold tracking-[0.14em] uppercase text-brand-600 dark:text-brand-400">Get in touch</span>
          <h1 className="font-display mt-3 text-4xl font-bold text-navy-950 dark:text-white">We're here to help</h1>
          <p className="mt-3 text-navy-600 dark:text-white/60">Questions about a service, a booking, or a partnership — reach out any way that's easiest.</p>

          <div className="mt-8 space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-brand-50 dark:bg-brand-500/10 flex items-center justify-center"><Mail size={18} className="text-brand-600 dark:text-brand-400" /></div>
              <span className="text-sm text-navy-700 dark:text-white/70">support@habitatt.health</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-brand-50 dark:bg-brand-500/10 flex items-center justify-center"><Phone size={18} className="text-brand-600 dark:text-brand-400" /></div>
              <span className="text-sm text-navy-700 dark:text-white/70">+91 80 4567 8901</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-brand-50 dark:bg-brand-500/10 flex items-center justify-center"><MapPin size={18} className="text-brand-600 dark:text-brand-400" /></div>
              <span className="text-sm text-navy-700 dark:text-white/70">221B Wellness Ave, Bengaluru, India</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-brand-50 dark:bg-brand-500/10 flex items-center justify-center"><MessageCircle size={18} className="text-brand-600 dark:text-brand-400" /></div>
              <span className="text-sm text-navy-700 dark:text-white/70">Live chat available 24/7</span>
            </div>
          </div>

          <div className="mt-8 rounded-2xl overflow-hidden border border-navy-900/8 dark:border-white/10 h-48 bg-mist dark:bg-white/5 flex items-center justify-center text-navy-400 dark:text-white/30 text-sm">
            Map placeholder — embed Google Maps here
          </div>
        </div>

        <div className="rounded-3xl border border-navy-900/8 dark:border-white/10 p-7 sm:p-9">
          {sent ? (
            <div className="text-center py-12">
              <CheckCircle2 size={44} className="text-brand-500 mx-auto" />
              <h3 className="font-display mt-4 text-xl font-bold text-navy-950 dark:text-white">Message sent</h3>
              <p className="mt-2 text-sm text-navy-600 dark:text-white/55">We'll get back to you within one business day.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-xs font-semibold text-navy-500 dark:text-white/50">Full name</label>
                  <input required className="mt-1.5 w-full rounded-xl border border-navy-900/10 dark:border-white/10 bg-mist dark:bg-white/5 px-4 py-3 text-sm text-navy-900 dark:text-white focus:border-brand-500 focus:outline-none" />
                </div>
                <div>
                  <label className="text-xs font-semibold text-navy-500 dark:text-white/50">Email</label>
                  <input type="email" required className="mt-1.5 w-full rounded-xl border border-navy-900/10 dark:border-white/10 bg-mist dark:bg-white/5 px-4 py-3 text-sm text-navy-900 dark:text-white focus:border-brand-500 focus:outline-none" />
                </div>
              </div>
              <div>
                <label className="text-xs font-semibold text-navy-500 dark:text-white/50">Subject</label>
                <input required className="mt-1.5 w-full rounded-xl border border-navy-900/10 dark:border-white/10 bg-mist dark:bg-white/5 px-4 py-3 text-sm text-navy-900 dark:text-white focus:border-brand-500 focus:outline-none" />
              </div>
              <div>
                <label className="text-xs font-semibold text-navy-500 dark:text-white/50">Message</label>
                <textarea required rows={5} className="mt-1.5 w-full resize-none rounded-xl border border-navy-900/10 dark:border-white/10 bg-mist dark:bg-white/5 px-4 py-3 text-sm text-navy-900 dark:text-white focus:border-brand-500 focus:outline-none" />
              </div>
              <Button type="submit" className="w-full" icon={<Send size={16} />}>Send message</Button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
