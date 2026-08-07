import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, Lock, Eye, EyeOff, Loader2 } from "lucide-react";
import AuthLayout from "../../components/layout/AuthLayout";
import Button from "../../components/ui/Button";
import { useAuth } from "../../context/AuthContext";

const schema = z.object({
  email: z.string().email("Enter a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  remember: z.boolean().optional(),
});
type FormValues = z.infer<typeof schema>;

export default function Login() {
  const { login, error } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const from = (location.state as { from?: string })?.from || "/dashboard";

  const onSubmit = async (data: FormValues) => {
    try {
      await login(data.email, data.password);
      navigate(from, { replace: true });
    } catch {
      // error surfaced via context
    }
  };

  return (
    <AuthLayout title="Welcome back" subtitle="Log in to continue your care journey.">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="text-xs font-semibold text-navy-500 dark:text-white/50">Email</label>
          <div className="relative mt-1.5">
            <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-navy-400" />
            <input
              {...register("email")}
              type="email"
              placeholder="you@email.com"
              className="w-full rounded-xl border border-navy-900/10 dark:border-white/10 bg-mist dark:bg-white/5 pl-11 pr-4 py-3 text-sm text-navy-900 dark:text-white focus:border-brand-500 focus:outline-none"
            />
          </div>
          {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>}
        </div>

        <div>
          <label className="text-xs font-semibold text-navy-500 dark:text-white/50">Password</label>
          <div className="relative mt-1.5">
            <Lock size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-navy-400" />
            <input
              {...register("password")}
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              className="w-full rounded-xl border border-navy-900/10 dark:border-white/10 bg-mist dark:bg-white/5 pl-11 pr-11 py-3 text-sm text-navy-900 dark:text-white focus:border-brand-500 focus:outline-none"
            />
            <button type="button" onClick={() => setShowPassword((v) => !v)} className="absolute right-4 top-1/2 -translate-y-1/2 text-navy-400">
              {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>
          {errors.password && <p className="mt-1 text-xs text-red-500">{errors.password.message}</p>}
        </div>

        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center gap-2 text-navy-600 dark:text-white/60">
            <input type="checkbox" {...register("remember")} className="accent-brand-500" /> Remember me
          </label>
          <Link to="/forgot-password" className="text-brand-600 dark:text-brand-400 font-medium">Forgot password?</Link>
        </div>

        {error && <p className="text-sm text-red-500 bg-red-50 dark:bg-red-500/10 rounded-xl px-4 py-2.5">{error}</p>}

        <Button type="submit" className="w-full" disabled={isSubmitting} icon={isSubmitting ? <Loader2 size={16} className="animate-spin" /> : undefined}>
          {isSubmitting ? "Logging in..." : "Log in"}
        </Button>

        <div className="flex items-center gap-3 py-1">
          <div className="h-px flex-1 bg-navy-900/10 dark:bg-white/10" />
          <span className="text-xs text-navy-400 dark:text-white/40">or continue with</span>
          <div className="h-px flex-1 bg-navy-900/10 dark:bg-white/10" />
        </div>

        <div className="grid grid-cols-3 gap-3">
          {["Google", "GitHub", "Apple"].map((provider) => (
            <button
              key={provider}
              type="button"
              className="rounded-xl border border-navy-900/10 dark:border-white/10 py-2.5 text-xs font-medium text-navy-700 dark:text-white/70 hover:border-brand-500 transition-colors"
            >
              {provider}
            </button>
          ))}
        </div>

        <p className="text-center text-sm text-navy-500 dark:text-white/50 pt-2">
          New to Habitatt?{" "}
          <Link to="/register" className="text-brand-600 dark:text-brand-400 font-semibold">Create an account</Link>
        </p>

        <p className="text-center text-[11px] text-navy-400 dark:text-white/40">
          Demo tip: register a new account first — this is a frontend-only build, so accounts live in your browser only.
        </p>
      </form>
    </AuthLayout>
  );
}
