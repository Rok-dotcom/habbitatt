import { Link } from "react-router-dom";
import { Clock } from "lucide-react";
import type { Doctor } from "../../types";
import Card from "../ui/Card";
import Button from "../ui/Button";
import StarRating from "../ui/StarRating";

export default function DoctorCard({ doctor }: { doctor: Doctor }) {
  return (
    <Card className="p-6 flex flex-col hover:shadow-lg hover:shadow-navy-900/5 hover:-translate-y-1 transition-all duration-300">
      <div className="flex items-start gap-4">
        <img src={doctor.avatar} alt={doctor.name} className="h-16 w-16 rounded-2xl object-cover" />
        <div className="min-w-0">
          <h3 className="font-display font-semibold text-navy-950 dark:text-white truncate">{doctor.name}</h3>
          <p className="text-sm text-brand-600 dark:text-brand-400">{doctor.specialty}</p>
          <div className="mt-1.5"><StarRating rating={doctor.rating} /></div>
        </div>
      </div>

      <p className="mt-4 text-sm text-navy-600 dark:text-white/55 leading-relaxed line-clamp-2">{doctor.bio}</p>

      <div className="mt-4 flex items-center justify-between text-xs text-navy-500 dark:text-white/50">
        <span>{doctor.experienceYears}+ yrs experience</span>
        <span>{doctor.reviews} reviews</span>
      </div>

      <div className="mt-5 flex items-center justify-between pt-5 border-t border-navy-900/8 dark:border-white/10">
        <div>
          {doctor.availableToday ? (
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-600 dark:text-brand-400">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-500" /> Available today
            </span>
          ) : (
            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-navy-400 dark:text-white/40">
              <Clock size={12} /> Next: Tomorrow
            </span>
          )}
          <p className="text-sm font-bold text-navy-950 dark:text-white mt-1">₹{doctor.fee}</p>
        </div>
        <Link to={`/doctors/${doctor.id}`}>
          <Button size="sm">Book Now</Button>
        </Link>
      </div>
    </Card>
  );
}
