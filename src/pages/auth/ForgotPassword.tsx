import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import { Mail, CheckCircle2 } from "lucide-react";
import AuthLayout from "../../components/layout/AuthLayout";
import Button from "../../components/ui/Button";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <AuthLayout title="Reset your password" subtitle="We'll email you a link to get back in.">
      {sent ? (
        <div className="text-center py-6">
          <CheckCircle2 size={40} className="text-brand-500 mx-auto" />
          <p className="mt-4 text-sm text-navy-600 dark:text-white/60">
            If an account exists for <strong>{email}</strong>, a reset link is on its way.
          </p>
          <Link to="/login" className="inline-block mt-6">
            <Button size="sm">Back to log in</Button>
          </Link>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-xs font-semibold text-navy-500 dark:text-white/50">Email</label>
            <div className="relative mt-1.5">
              <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-navy-400" />
              <input
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@email.com"
                className="w-full rounded-xl border border-navy-900/10 dark:border-white/10 bg-mist dark:bg-white/5 pl-11 pr-4 py-3 text-sm text-navy-900 dark:text-white focus:border-brand-500 focus:outline-none"
              />
            </div>
          </div>
          <Button type="submit" className="w-full">Send reset link</Button>
          <p className="text-center text-sm text-navy-500 dark:text-white/50">
            <Link to="/login" className="text-brand-600 dark:text-brand-400 font-semibold">Back to log in</Link>
          </p>
        </form>
      )}
    </AuthLayout>
  );
}
