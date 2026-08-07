import { doctors } from "../../../data/mockData";
import Card from "../../../components/ui/Card";
import StarRating from "../../../components/ui/StarRating";

export default function DoctorsAdmin() {
  return (
    <div>
      <h1 className="font-display text-2xl font-bold text-navy-950 dark:text-white">Doctors</h1>
      <p className="mt-1 text-sm text-navy-500 dark:text-white/50">Verify and manage doctor profiles.</p>
      <div className="mt-8 grid sm:grid-cols-2 gap-4">
        {doctors.map((d) => (
          <Card key={d.id} className="p-4 flex items-center gap-4">
            <img src={d.avatar} className="h-12 w-12 rounded-xl object-cover" alt={d.name} />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-navy-950 dark:text-white truncate">{d.name}</p>
              <p className="text-xs text-navy-500 dark:text-white/50">{d.specialty}</p>
            </div>
            <StarRating rating={d.rating} />
          </Card>
        ))}
      </div>
    </div>
  );
}
