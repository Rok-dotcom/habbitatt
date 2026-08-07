import { useEffect, useMemo, useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import type { Doctor } from "../types";
import { doctorService } from "../services/doctorService";
import DoctorCard from "../components/home/DoctorCard";
import Skeleton from "../components/ui/Skeleton";

const specialties = ["All", "General Physician", "Cardiologist", "Pediatrician", "Dermatologist", "Mental Health", "Orthopedic"];

export default function Doctors() {
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [specialty, setSpecialty] = useState("All");
  const [availableOnly, setAvailableOnly] = useState(false);

  useEffect(() => {
    doctorService.list().then((data) => {
      setDoctors(data);
      setLoading(false);
    });
  }, []);

  const filtered = useMemo(() => {
    return doctors.filter((d) => {
      const matchesQuery = d.name.toLowerCase().includes(query.toLowerCase()) || d.specialty.toLowerCase().includes(query.toLowerCase());
      const matchesSpecialty = specialty === "All" || d.specialty === specialty;
      const matchesAvailability = !availableOnly || d.availableToday;
      return matchesQuery && matchesSpecialty && matchesAvailability;
    });
  }, [doctors, query, specialty, availableOnly]);

  return (
    <div className="pt-32 pb-24">
      <div className="container-page">
        <div className="max-w-xl">
          <span className="text-xs font-semibold tracking-[0.14em] uppercase text-brand-600 dark:text-brand-400">Doctors</span>
          <h1 className="font-display mt-3 text-4xl font-bold text-navy-950 dark:text-white">Find the right specialist</h1>
          <p className="mt-3 text-navy-600 dark:text-white/60">Search by name or specialty, filter by availability, and book in minutes.</p>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search size={17} className="absolute left-4 top-1/2 -translate-y-1/2 text-navy-400" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search doctors or specialties..."
              className="w-full rounded-full border border-navy-900/10 dark:border-white/15 bg-white dark:bg-navy-900 pl-11 pr-4 py-3 text-sm text-navy-900 dark:text-white placeholder:text-navy-400 focus:border-brand-500 focus:outline-none"
            />
          </div>
          <label className="flex items-center gap-2 px-4 py-3 rounded-full border border-navy-900/10 dark:border-white/15 text-sm text-navy-700 dark:text-white/70 cursor-pointer shrink-0">
            <SlidersHorizontal size={15} />
            <input type="checkbox" checked={availableOnly} onChange={(e) => setAvailableOnly(e.target.checked)} className="accent-brand-500" />
            Available today
          </label>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {specialties.map((s) => (
            <button
              key={s}
              onClick={() => setSpecialty(s)}
              className={`text-xs font-medium px-3.5 py-2 rounded-full transition-colors ${
                specialty === s
                  ? "bg-brand-500 text-white"
                  : "bg-navy-900/5 text-navy-700 hover:bg-navy-900/10 dark:bg-white/5 dark:text-white/70 dark:hover:bg-white/10"
              }`}
            >
              {s}
            </button>
          ))}
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading
            ? Array.from({ length: 6 }).map((_, i) => <Skeleton key={i} className="h-64" />)
            : filtered.map((doctor) => <DoctorCard key={doctor.id} doctor={doctor} />)}
        </div>

        {!loading && filtered.length === 0 && (
          <p className="mt-16 text-center text-navy-500 dark:text-white/50">No doctors match your filters. Try broadening your search.</p>
        )}
      </div>
    </div>
  );
}
