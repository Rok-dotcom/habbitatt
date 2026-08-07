import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { User, Mail, Phone, Lock, Loader2, ShieldCheck } from "lucide-react";
import AuthLayout from "../../components/layout/AuthLayout";
import Button from "../../components/ui/Button";
import { useAuth } from "../../context/AuthContext";
import type { UserRole } from "../../types";

const schema = z
  .object({
    name: z.string().min(2, "Enter your full name"),
    email: z.string().email("Enter a valid email address"),
    phone: z.string().min(8, "Enter a valid phone number"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string(),
    role: z.enum(["patient", "doctor", "admin"]),
    terms: z.literal(true, { message: "You must accept the terms" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });
type FormValues = z.infer<typeof schema>;

export default function Register() {
  const { register: registerUser, error } = useAuth();
  const navigate = useNavigate();
  const [step, setStep] = useState<"form" | "otp">("form");
  const [otp, setOtp] = useState("");
  const [pending, setPending] = useState<FormValues | null>(null);
  const [verifying, setVerifying] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema), defaultValues: { role: "patient" } });

  const role = watch("role");

  const onSubmit = async (data: FormValues) => {
    setPending(data);
    setStep("otp");
  };

  const handleVerify = async () => {
    if (!pending || otp.length < 4) return;
    setVerifying(true);
    try {
      await registerUser(pending.name, pending.email, pending.password, pending.role as UserRole);
      navigate("/dashboard");
    } catch {
      setStep("form");
    } finally {
      setVerifying(false);
    }
  };

  if (step === "otp") {
    return (
      <AuthLayout title="Verify your email" subtitle={`Enter the 4-digit code we sent to ${pending?.email}`}>
        <div className="space-y-5">
          <div className="rounded-xl bg-brand-50 dark:bg-brand-500/10 border border-brand-100 dark:border-brand-500/20 px-4 py-3 flex items-center gap-2.5">
            <ShieldCheck size={16} className="text-brand-600 dark:text-brand-400 shrink-0" />
            <p className="text-xs text-brand-700 dark:text-brand-400">Demo mode: enter any 4+ digit code to continue.</p>
          </div>
          <input
            value={otp}
            onChange={(e) => setOtp(e.target.value.replace(/\D/g, ""))}
            maxLength={6}
            placeholder="••••"
            className="w-full text-center tracking-[0.5em] text-lg rounded-xl border border-navy-900/10 dark:border-white/10 bg-mist dark:bg-white/5 py-3.5 text-navy-900 dark:text-white focus:border-brand-500 focus:outline-none"
          />
          <Button
            className="w-full"
            disabled={otp.length < 4 || verifying}
            onClick={handleVerify}
            icon={verifying ? <Loader2 size={16} className="animate-spin" /> : undefined}
          >
            {verifying ? "Verifying..." : "Verify & Create Account"}
          </Button>
          {error && <p className="text-sm text-red-500 bg-red-50 dark:bg-red-500/10 rounded-xl px-4 py-2.5">{error}</p>}
          <button onClick={() => setStep("form")} className="w-full text-center text-sm text-navy-500 dark:text-white/50">
            ← Back
          </button>
        </div>
      </AuthLayout>
    );
  }

  return (
    <AuthLayout title="Create your account" subtitle="Join Habitatt for care that follows you anywhere.">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid grid-cols-3 gap-2">
          {(["patient", "doctor", "admin"] as UserRole[]).map((r) => (
            <button
              key={r}
              type="button"
              onClick={() => setValue("role", r)}
              className={`rounded-xl py-2.5 text-xs font-semibold capitalize transition-colors ${
                role === r ? "bg-brand-500 text-white" : "bg-navy-900/5 dark:bg-white/5 text-navy-700 dark:text-white/70"
              }`}
            >
              {r}
            </button>
          ))}
        </div>

        <div>
          <label className="text-xs font-semibold text-navy-500 dark:text-white/50">Full name</label>
          <div className="relative mt-1.5">
            <User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-navy-400" />
            <input {...register("name")} placeholder="Jordan Rivera" className="w-full rounded-xl border border-navy-900/10 dark:border-white/10 bg-mist dark:bg-white/5 pl-11 pr-4 py-3 text-sm text-navy-900 dark:text-white focus:border-brand-500 focus:outline-none" />
          </div>
          {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>}
        </div>

        <div>
          <label className="text-xs font-semibold text-navy-500 dark:text-white/50">Email</label>
          <div className="relative mt-1.5">
            <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-navy-400" />
            <input {...register("email")} type="email" placeholder="you@email.com" className="w-full rounded-xl border border-navy-900/10 dark:border-white/10 bg-mist dark:bg-white/5 pl-11 pr-4 py-3 text-sm text-navy-900 dark:text-white focus:border-brand-500 focus:outline-none" />
          </div>
          {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>}
        </div>

        <div>
          <label className="text-xs font-semibold text-navy-500 dark:text-white/50">Phone</label>
          <div className="relative mt-1.5">
            <Phone size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-navy-400" />
            <input {...register("phone")} placeholder="+91 90000 00000" className="w-full rounded-xl border border-navy-900/10 dark:border-white/10 bg-mist dark:bg-white/5 pl-11 pr-4 py-3 text-sm text-navy-900 dark:text-white focus:border-brand-500 focus:outline-none" />
          </div>
          {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone.message}</p>}
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="text-xs font-semibold text-navy-500 dark:text-white/50">Password</label>
            <div className="relative mt-1.5">
              <Lock size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-navy-400" />
              <input {...register("password")} type="password" placeholder="••••••••" className="w-full rounded-xl border border-navy-900/10 dark:border-white/10 bg-mist dark:bg-white/5 pl-11 pr-3 py-3 text-sm text-navy-900 dark:text-white focus:border-brand-500 focus:outline-none" />
            </div>
            {errors.password && <p className="mt-1 text-xs text-red-500">{errors.password.message}</p>}
          </div>
          <div>
            <label className="text-xs font-semibold text-navy-500 dark:text-white/50">Confirm</label>
            <div className="relative mt-1.5">
              <Lock size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-navy-400" />
              <input {...register("confirmPassword")} type="password" placeholder="••••••••" className="w-full rounded-xl border border-navy-900/10 dark:border-white/10 bg-mist dark:bg-white/5 pl-11 pr-3 py-3 text-sm text-navy-900 dark:text-white focus:border-brand-500 focus:outline-none" />
            </div>
            {errors.confirmPassword && <p className="mt-1 text-xs text-red-500">{errors.confirmPassword.message}</p>}
          </div>
        </div>

        <label className="flex items-start gap-2.5 text-xs text-navy-600 dark:text-white/60">
          <input type="checkbox" {...register("terms")} className="mt-0.5 accent-brand-500" />
          I agree to the <Link to="/terms" className="text-brand-600 dark:text-brand-400 font-medium">Terms</Link> and{" "}
          <Link to="/privacy" className="text-brand-600 dark:text-brand-400 font-medium">Privacy Policy</Link>
        </label>
        {errors.terms && <p className="text-xs text-red-500">{errors.terms.message}</p>}

        <Button type="submit" className="w-full" disabled={isSubmitting}>
          Create account
        </Button>

        <p className="text-center text-sm text-navy-500 dark:text-white/50 pt-1">
          Already have an account?{" "}
          <Link to="/login" className="text-brand-600 dark:text-brand-400 font-semibold">Log in</Link>
        </p>
      </form>
    </AuthLayout>
  );
}
