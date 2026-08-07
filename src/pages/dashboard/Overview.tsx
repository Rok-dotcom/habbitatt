import { Link } from "react-router-dom";
import { Calendar, FileText, ShoppingCart, ArrowRight, Users, Package, Stethoscope } from "lucide-react";
import { useAuth } from "../../context/AuthContext";
import { doctors } from "../../data/mockData";
import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";

function PatientOverview() {
  const { user } = useAuth();
  return (
    <div>
      <h1 className="font-display text-2xl font-bold text-navy-950 dark:text-white">Welcome back, {user?.name.split(" ")[0]} 👋</h1>
      <p className="mt-1 text-sm text-navy-500 dark:text-white/50">Here's what's happening with your care.</p>

      <div className="mt-8 grid sm:grid-cols-3 gap-5">
        {[
          { icon: Calendar, label: "Upcoming appointments", value: "0", to: "/dashboard/appointments" },
          { icon: FileText, label: "Prescriptions", value: "0", to: "/dashboard/prescriptions" },
          { icon: ShoppingCart, label: "Active orders", value: "0", to: "/dashboard/orders" },
        ].map((stat) => (
          <Link key={stat.label} to={stat.to}>
            <Card className="p-5 hover:border-brand-300 dark:hover:border-brand-500/30 transition-colors">
              <stat.icon size={20} className="text-brand-600 dark:text-brand-400" />
              <p className="mt-3 text-2xl font-bold text-navy-950 dark:text-white">{stat.value}</p>
              <p className="text-xs text-navy-500 dark:text-white/50 mt-0.5">{stat.label}</p>
            </Card>
          </Link>
        ))}
      </div>

      <div className="mt-10 flex items-center justify-between">
        <h2 className="font-display font-bold text-navy-950 dark:text-white">Recommended doctors</h2>
        <Link to="/doctors" className="text-sm text-brand-600 dark:text-brand-400 font-medium flex items-center gap-1">
          View all <ArrowRight size={14} />
        </Link>
      </div>
      <div className="mt-4 grid sm:grid-cols-2 gap-4">
        {doctors.slice(0, 2).map((d) => (
          <Card key={d.id} className="p-4 flex items-center gap-4">
            <img src={d.avatar} alt={d.name} className="h-12 w-12 rounded-xl object-cover" />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-navy-950 dark:text-white truncate">{d.name}</p>
              <p className="text-xs text-navy-500 dark:text-white/50">{d.specialty}</p>
            </div>
            <Link to={`/doctors/${d.id}`}><Button size="sm" variant="outline">Book</Button></Link>
          </Card>
        ))}
      </div>
    </div>
  );
}

function DoctorOverview() {
  const { user } = useAuth();
  return (
    <div>
      <h1 className="font-display text-2xl font-bold text-navy-950 dark:text-white">Good to see you, {user?.name.split(" ")[0]}</h1>
      <p className="mt-1 text-sm text-navy-500 dark:text-white/50">Your practice at a glance.</p>
      <div className="mt-8 grid sm:grid-cols-3 gap-5">
        {[
          { icon: Calendar, label: "Today's appointments", value: "3" },
          { icon: Users, label: "Total patients", value: "482" },
          { icon: Stethoscope, label: "Avg. rating", value: "4.9" },
        ].map((stat) => (
          <Card key={stat.label} className="p-5">
            <stat.icon size={20} className="text-brand-600 dark:text-brand-400" />
            <p className="mt-3 text-2xl font-bold text-navy-950 dark:text-white">{stat.value}</p>
            <p className="text-xs text-navy-500 dark:text-white/50 mt-0.5">{stat.label}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}

function AdminOverview() {
  return (
    <div>
      <h1 className="font-display text-2xl font-bold text-navy-950 dark:text-white">Admin overview</h1>
      <p className="mt-1 text-sm text-navy-500 dark:text-white/50">Platform health at a glance.</p>
      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {[
          { icon: Users, label: "Total users", value: "24,180" },
          { icon: Stethoscope, label: "Active doctors", value: "8,512" },
          { icon: Package, label: "Orders today", value: "1,204" },
          { icon: ShoppingCart, label: "Revenue (MTD)", value: "₹18.4L" },
        ].map((stat) => (
          <Card key={stat.label} className="p-5">
            <stat.icon size={20} className="text-brand-600 dark:text-brand-400" />
            <p className="mt-3 text-2xl font-bold text-navy-950 dark:text-white">{stat.value}</p>
            <p className="text-xs text-navy-500 dark:text-white/50 mt-0.5">{stat.label}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default function Overview() {
  const { user } = useAuth();
  if (user?.role === "doctor") return <DoctorOverview />;
  if (user?.role === "admin") return <AdminOverview />;
  return <PatientOverview />;
}
