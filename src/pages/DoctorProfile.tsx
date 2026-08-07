import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { CalendarDays, Video, MapPin, Languages, CheckCircle2 } from "lucide-react";
import type { Doctor } from "../types";
import { doctorService } from "../services/doctorService";
import { appointmentService } from "../services/appointmentService";
import { useAuth } from "../context/AuthContext";
import StarRating from "../components/ui/StarRating";
import Button from "../components/ui/Button";
import Skeleton from "../components/ui/Skeleton";

function nextDays(n: number) {
  return Array.from({ length: n }).map((_, i) => {
    const d = new Date();
    d.setDate(d.getDate() + i);
    return d;
  });
}

const slots = ["09:00 AM", "10:30 AM", "12:00 PM", "02:30 PM", "04:00 PM", "06:00 PM"];

export default function DoctorProfile() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const [doctor, setDoctor] = useState<Doctor | null>(null);
  const [loading, setLoading] = useState(true);
  const [dayIndex, setDayIndex] = useState(0);
  const [slot, setSlot] = useState<string | null>(null);
  const [booked, setBooked] = useState(false);
  const [booking, setBooking] = useState(false);

  const days = nextDays(6);

  useEffect(() => {
    if (!id) return;
    doctorService.getById(id).then((d) => {
      setDoctor(d ?? null);
      setLoading(false);
    });
  }, [id]);

  const handleBook = async () => {
    if (!isAuthenticated) {
      navigate("/login", { state: { from: `/doctors/${id}` } });
      return;
    }
    if (!doctor || !slot) return;
    setBooking(true);
    await appointmentService.book({
      doctorId: doctor.id,
      doctorName: doctor.name,
      date: days[dayIndex].toDateString(),
      time: slot,
      mode: "video",
    });
    setBooking(false);
    setBooked(true);
  };

  if (loading) {
    return (
      <div className="pt-32 pb-24 container-page">
        <Skeleton className="h-40" />
      </div>
    );
  }

  if (!doctor) {
    return (
      <div className="pt-40 pb-24 container-page text-center">
        <p className="text-navy-600 dark:text-white/60">Doctor not found.</p>
        <Link to="/doctors" className="text-brand-600 font-medium">Back to all doctors</Link>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24">
      <div className="container-page grid lg:grid-cols-[1fr_1.1fr] gap-12">
        <div>
          <div className="flex items-start gap-5">
            <img src={doctor.avatar} alt={doctor.name} className="h-24 w-24 rounded-3xl object-cover" />
            <div>
              <h1 className="font-display text-2xl font-bold text-navy-950 dark:text-white">{doctor.name}</h1>
              <p className="text-brand-600 dark:text-brand-400 font-medium">{doctor.specialty}</p>
              <div className="mt-2"><StarRating rating={doctor.rating} /></div>
            </div>
          </div>

          <p className="mt-6 text-navy-600 dark:text-white/60 leading-relaxed">{doctor.bio}</p>

          <div className="mt-6 grid grid-cols-2 gap-4">
            <div className="rounded-2xl border border-navy-900/8 dark:border-white/10 p-4">
              <p className="text-xs text-navy-500 dark:text-white/50">Experience</p>
              <p className="font-semibold text-navy-950 dark:text-white mt-1">{doctor.experienceYears}+ years</p>
            </div>
            <div className="rounded-2xl border border-navy-900/8 dark:border-white/10 p-4">
              <p className="text-xs text-navy-500 dark:text-white/50">Reviews</p>
              <p className="font-semibold text-navy-950 dark:text-white mt-1">{doctor.reviews} patients</p>
            </div>
            <div className="rounded-2xl border border-navy-900/8 dark:border-white/10 p-4 flex items-center gap-2">
              <Languages size={16} className="text-brand-500" />
              <p className="text-sm text-navy-700 dark:text-white/70">{doctor.languages.join(", ")}</p>
            </div>
            <div className="rounded-2xl border border-navy-900/8 dark:border-white/10 p-4 flex items-center gap-2">
              <MapPin size={16} className="text-brand-500" />
              <p className="text-sm text-navy-700 dark:text-white/70">Video consultation</p>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="rounded-3xl border border-navy-900/8 dark:border-white/10 p-6 sm:p-8 h-fit sticky top-28"
        >
          {booked ? (
            <div className="text-center py-6">
              <CheckCircle2 size={44} className="text-brand-500 mx-auto" />
              <h3 className="font-display mt-4 text-xl font-bold text-navy-950 dark:text-white">Appointment confirmed</h3>
              <p className="mt-2 text-sm text-navy-600 dark:text-white/55">
                {days[dayIndex].toLocaleDateString(undefined, { weekday: "long", month: "long", day: "numeric" })} at {slot} with {doctor.name}
              </p>
              <Link to="/dashboard/appointments" className="inline-block mt-6">
                <Button size="sm">View my appointments</Button>
              </Link>
            </div>
          ) : (
            <>
              <div className="flex items-center gap-2 text-sm font-semibold text-navy-950 dark:text-white">
                <CalendarDays size={17} className="text-brand-500" /> Select a date
              </div>
              <div className="mt-4 flex gap-2 overflow-x-auto pb-1">
                {days.map((d, i) => (
                  <button
                    key={i}
                    onClick={() => setDayIndex(i)}
                    className={`shrink-0 w-16 rounded-2xl py-3 text-center transition-colors ${
                      dayIndex === i ? "bg-brand-500 text-white" : "bg-navy-900/5 dark:bg-white/5 text-navy-700 dark:text-white/70"
                    }`}
                  >
                    <p className="text-[10px] uppercase">{d.toLocaleDateString(undefined, { weekday: "short" })}</p>
                    <p className="text-lg font-bold">{d.getDate()}</p>
                  </button>
                ))}
              </div>

              <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-navy-950 dark:text-white">
                <Video size={17} className="text-brand-500" /> Available slots
              </div>
              <div className="mt-4 grid grid-cols-3 gap-2">
                {slots.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSlot(s)}
                    className={`rounded-xl py-2.5 text-xs font-medium transition-colors ${
                      slot === s ? "bg-brand-500 text-white" : "bg-navy-900/5 dark:bg-white/5 text-navy-700 dark:text-white/70 hover:bg-navy-900/10"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>

              <div className="mt-6 flex items-center justify-between pt-6 border-t border-navy-900/8 dark:border-white/10">
                <div>
                  <p className="text-xs text-navy-500 dark:text-white/50">Consultation fee</p>
                  <p className="text-xl font-bold text-navy-950 dark:text-white">₹{doctor.fee}</p>
                </div>
                <Button disabled={!slot || booking} onClick={handleBook}>
                  {booking ? "Confirming..." : "Confirm booking"}
                </Button>
              </div>
            </>
          )}
        </motion.div>
      </div>
    </div>
  );
}
