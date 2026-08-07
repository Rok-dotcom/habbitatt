import { type ReactNode } from "react";

function LegalLayout({ title, updated, children }: { title: string; updated: string; children: ReactNode }) {
  return (
    <div className="pt-32 pb-24">
      <div className="container-page max-w-2xl">
        <h1 className="font-display text-4xl font-bold text-navy-950 dark:text-white">{title}</h1>
        <p className="mt-2 text-sm text-navy-400 dark:text-white/40">Last updated: {updated}</p>
        <div className="mt-8 space-y-6 text-sm text-navy-600 dark:text-white/60 leading-relaxed">{children}</div>
      </div>
    </div>
  );
}

export function Privacy() {
  return (
    <LegalLayout title="Privacy Policy" updated="August 1, 2026">
      <p>
        Habitatt collects only the information needed to provide care — your profile details, symptom
        inputs, appointment history, and order records. We never sell your health data.
      </p>
      <p>
        Data is encrypted in transit and at rest. Access is limited to the clinicians you consult with
        and the minimum internal staff needed for support and billing.
      </p>
      <p>
        You can request a full export or deletion of your data at any time from Dashboard → Profile &
        Settings, or by emailing privacy@habitatt.health.
      </p>
      <p>
        This is placeholder policy text — replace with counsel-reviewed language before going live with
        real user data.
      </p>
    </LegalLayout>
  );
}

export function Terms() {
  return (
    <LegalLayout title="Terms & Conditions" updated="August 1, 2026">
      <p>
        By using Habitatt, you agree that AI-generated symptom insights are informational only and do
        not constitute medical advice, diagnosis, or treatment.
      </p>
      <p>
        Consultations are provided by independently licensed practitioners. Habitatt facilitates the
        connection and platform but is not itself a healthcare provider.
      </p>
      <p>
        Medicine orders are subject to pharmacist verification and applicable import regulations in the
        destination country. Delivery timelines are estimates, not guarantees.
      </p>
      <p>
        This is placeholder terms text — replace with counsel-reviewed language before going live.
      </p>
    </LegalLayout>
  );
}
