import { doctors } from "../../data/mockData";
import DoctorCard from "../../components/home/DoctorCard";

export default function SavedDoctors() {
  const saved = doctors.slice(0, 2);
  return (
    <div>
      <h1 className="font-display text-2xl font-bold text-navy-950 dark:text-white">Saved doctors</h1>
      <p className="mt-1 text-sm text-navy-500 dark:text-white/50">Your wishlist of trusted specialists.</p>
      <div className="mt-8 grid sm:grid-cols-2 gap-6">
        {saved.map((d) => <DoctorCard key={d.id} doctor={d} />)}
      </div>
    </div>
  );
}
