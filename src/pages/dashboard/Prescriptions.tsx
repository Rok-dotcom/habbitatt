import { FileText } from "lucide-react";
import Card from "../../components/ui/Card";

const prescriptions = [
  { id: "p1", doctor: "Dr. Ananya Rao", date: "Jul 28, 2026", items: "Paracetamol 500mg, Cetirizine 10mg" },
  { id: "p2", doctor: "Dr. Rohan Mehta", date: "Jul 12, 2026", items: "Metformin 500mg" },
];

export default function Prescriptions() {
  return (
    <div>
      <h1 className="font-display text-2xl font-bold text-navy-950 dark:text-white">Prescriptions</h1>
      <p className="mt-1 text-sm text-navy-500 dark:text-white/50">Issued by your doctors after consultations.</p>
      <div className="mt-8 space-y-4">
        {prescriptions.map((p) => (
          <Card key={p.id} className="p-5 flex items-center gap-4">
            <div className="h-11 w-11 rounded-xl bg-brand-50 dark:bg-brand-500/10 flex items-center justify-center shrink-0">
              <FileText size={18} className="text-brand-600 dark:text-brand-400" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-navy-950 dark:text-white">{p.doctor}</p>
              <p className="text-xs text-navy-500 dark:text-white/50">{p.date} · {p.items}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
