import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Video, Calendar } from "lucide-react";
import type { Appointment } from "../../types";
import { appointmentService } from "../../services/appointmentService";
import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";

export default function Appointments() {
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  useEffect(() => {
    appointmentService.list().then(setAppointments);
  }, []);

  return (
    <div>
      <h1 className="font-display text-2xl font-bold text-navy-950 dark:text-white">Appointments</h1>
      <p className="mt-1 text-sm text-navy-500 dark:text-white/50">Your upcoming and past visits.</p>

      {appointments.length === 0 ? (
        <Card className="mt-8 p-10 text-center">
          <Calendar size={32} className="text-navy-300 dark:text-white/20 mx-auto" />
          <p className="mt-3 text-sm text-navy-500 dark:text-white/50">No appointments yet.</p>
          <Link to="/doctors" className="inline-block mt-4"><Button size="sm">Find a doctor</Button></Link>
        </Card>
      ) : (
        <div className="mt-8 space-y-4">
          {appointments.map((a) => (
            <Card key={a.id} className="p-5 flex items-center justify-between gap-4 flex-wrap">
              <div className="flex items-center gap-4">
                <div className="h-11 w-11 rounded-xl bg-brand-50 dark:bg-brand-500/10 flex items-center justify-center">
                  <Video size={18} className="text-brand-600 dark:text-brand-400" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-navy-950 dark:text-white">{a.doctorName}</p>
                  <p className="text-xs text-navy-500 dark:text-white/50">{a.date} · {a.time}</p>
                </div>
              </div>
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-brand-50 text-brand-700 dark:bg-brand-500/10 dark:text-brand-400 capitalize">
                {a.status}
              </span>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
