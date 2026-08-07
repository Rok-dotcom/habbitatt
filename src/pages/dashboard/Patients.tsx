import { testimonials } from "../../data/mockData";
import Card from "../../components/ui/Card";

export default function Patients() {
  return (
    <div>
      <h1 className="font-display text-2xl font-bold text-navy-950 dark:text-white">Patients</h1>
      <p className="mt-1 text-sm text-navy-500 dark:text-white/50">People you've consulted with recently.</p>
      <div className="mt-8 grid sm:grid-cols-2 gap-4">
        {testimonials.map((t) => (
          <Card key={t.id} className="p-4 flex items-center gap-4">
            <img src={t.avatar} alt={t.name} className="h-12 w-12 rounded-xl object-cover" />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-navy-950 dark:text-white truncate">{t.name}</p>
              <p className="text-xs text-navy-500 dark:text-white/50">{t.location}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
