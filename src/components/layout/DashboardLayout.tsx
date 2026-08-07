import { NavLink, Outlet, Navigate } from "react-router-dom";
import {
  LayoutDashboard,
  Calendar,
  FileText,
  Heart,
  Bell,
  Settings,
  Users,
  Stethoscope,
  Package,
  BarChart3,
  ShoppingCart,
  Pill,
} from "lucide-react";
import Logo from "../ui/Logo";
import { useAuth } from "../../context/AuthContext";

const patientLinks = [
  { label: "Overview", to: "/dashboard", icon: LayoutDashboard, end: true },
  { label: "Appointments", to: "/dashboard/appointments", icon: Calendar },
  { label: "Prescriptions", to: "/dashboard/prescriptions", icon: FileText },
  { label: "Orders", to: "/dashboard/orders", icon: ShoppingCart },
  { label: "Saved Doctors", to: "/dashboard/saved-doctors", icon: Heart },
  { label: "Notifications", to: "/dashboard/notifications", icon: Bell },
  { label: "Profile & Settings", to: "/dashboard/profile", icon: Settings },
];

const doctorLinks = [
  { label: "Overview", to: "/dashboard", icon: LayoutDashboard, end: true },
  { label: "Appointments", to: "/dashboard/appointments", icon: Calendar },
  { label: "Patients", to: "/dashboard/patients", icon: Users },
  { label: "Notifications", to: "/dashboard/notifications", icon: Bell },
  { label: "Profile & Settings", to: "/dashboard/profile", icon: Settings },
];

const adminLinks = [
  { label: "Overview", to: "/dashboard", icon: LayoutDashboard, end: true },
  { label: "Users", to: "/dashboard/users", icon: Users },
  { label: "Doctors", to: "/dashboard/doctors-admin", icon: Stethoscope },
  { label: "Orders", to: "/dashboard/orders-admin", icon: Package },
  { label: "Medicines", to: "/dashboard/medicines-admin", icon: Pill },
  { label: "Analytics", to: "/dashboard/analytics", icon: BarChart3 },
  { label: "Settings", to: "/dashboard/profile", icon: Settings },
];

export default function DashboardLayout() {
  const { user, isAuthenticated } = useAuth();

  if (!isAuthenticated || !user) {
    return <Navigate to="/login" replace />;
  }

  const links = user.role === "doctor" ? doctorLinks : user.role === "admin" ? adminLinks : patientLinks;

  return (
    <div className="min-h-screen flex bg-mist dark:bg-mist-dark">
      <aside className="hidden md:flex md:flex-col w-64 shrink-0 border-r border-navy-900/8 dark:border-white/10 bg-white dark:bg-navy-950 px-4 py-6">
        <Logo className="px-2 mb-8" />
        <nav className="flex-1 space-y-1">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-brand-50 text-brand-700 dark:bg-brand-500/10 dark:text-brand-400"
                    : "text-navy-700 hover:bg-navy-900/5 dark:text-white/70 dark:hover:bg-white/5"
                }`
              }
            >
              <link.icon size={18} />
              {link.label}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-3 px-3 py-3 rounded-xl bg-navy-900/[0.03] dark:bg-white/5">
          <img src={user.avatar} alt={user.name} className="h-9 w-9 rounded-full object-cover" />
          <div className="min-w-0">
            <p className="text-sm font-semibold text-navy-900 dark:text-white truncate">{user.name}</p>
            <p className="text-xs text-navy-500 dark:text-white/50 capitalize">{user.role}</p>
          </div>
        </div>
      </aside>

      <div className="flex-1 min-w-0">
        <div className="md:hidden sticky top-0 z-30 bg-white dark:bg-navy-950 border-b border-navy-900/8 dark:border-white/10 px-4 py-3 flex items-center justify-between">
          <Logo />
          <img src={user.avatar} alt={user.name} className="h-8 w-8 rounded-full object-cover" />
        </div>
        <div className="p-5 sm:p-8 max-w-6xl mx-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
