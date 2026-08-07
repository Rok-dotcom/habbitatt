import Card from "../../../components/ui/Card";

const rows = [
  { label: "New signups", value: "1,204", change: "+12.4%" },
  { label: "Consultations completed", value: "3,880", change: "+8.1%" },
  { label: "Medicine orders", value: "2,140", change: "+15.9%" },
  { label: "Avg. doctor rating", value: "4.86", change: "+0.03" },
];

export default function Analytics() {
  return (
    <div>
      <h1 className="font-display text-2xl font-bold text-navy-950 dark:text-white">Analytics</h1>
      <p className="mt-1 text-sm text-navy-500 dark:text-white/50">Last 30 days across the platform.</p>
      <div className="mt-8 grid sm:grid-cols-2 gap-5">
        {rows.map((r) => (
          <Card key={r.label} className="p-5">
            <p className="text-xs text-navy-500 dark:text-white/50">{r.label}</p>
            <div className="mt-2 flex items-baseline gap-2">
              <p className="text-2xl font-bold text-navy-950 dark:text-white">{r.value}</p>
              <span className="text-xs font-semibold text-brand-600 dark:text-brand-400">{r.change}</span>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
