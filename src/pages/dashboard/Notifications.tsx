import { Calendar, Package, Sparkles } from "lucide-react";
import Card from "../../components/ui/Card";

const notifications = [
  { icon: Calendar, title: "Appointment reminder", desc: "Dr. Ananya Rao — tomorrow at 10:30 AM", time: "2h ago" },
  { icon: Package, title: "Order shipped", desc: "Order #HB-40291 is on its way", time: "1d ago" },
  { icon: Sparkles, title: "New AI feature", desc: "Symptom Analyser now supports follow-up questions", time: "3d ago" },
];

export default function Notifications() {
  return (
    <div>
      <h1 className="font-display text-2xl font-bold text-navy-950 dark:text-white">Notifications</h1>
      <p className="mt-1 text-sm text-navy-500 dark:text-white/50">Stay up to date with your care.</p>
      <div className="mt-8 space-y-3">
        {notifications.map((n, i) => (
          <Card key={i} className="p-4 flex items-start gap-3">
            <div className="h-10 w-10 rounded-xl bg-brand-50 dark:bg-brand-500/10 flex items-center justify-center shrink-0">
              <n.icon size={17} className="text-brand-600 dark:text-brand-400" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold text-navy-950 dark:text-white">{n.title}</p>
              <p className="text-xs text-navy-500 dark:text-white/50">{n.desc}</p>
            </div>
            <span className="text-[11px] text-navy-400 dark:text-white/40 shrink-0">{n.time}</span>
          </Card>
        ))}
      </div>
    </div>
  );
}
