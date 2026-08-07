import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useTheme } from "../../context/ThemeContext";
import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";

export default function Profile() {
  const { user, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const [name, setName] = useState(user?.name || "");
  const [saved, setSaved] = useState(false);

  const handleSave = () => setSaved(true);

  return (
    <div>
      <h1 className="font-display text-2xl font-bold text-navy-950 dark:text-white">Profile & settings</h1>
      <p className="mt-1 text-sm text-navy-500 dark:text-white/50">Manage your account details.</p>

      <Card className="mt-8 p-6 max-w-lg">
        <div className="flex items-center gap-4">
          <img src={user?.avatar} alt={user?.name} className="h-16 w-16 rounded-2xl object-cover" />
          <div>
            <p className="font-semibold text-navy-950 dark:text-white">{user?.name}</p>
            <p className="text-xs text-navy-500 dark:text-white/50 capitalize">{user?.role} account</p>
          </div>
        </div>

        <div className="mt-6 space-y-4">
          <div>
            <label className="text-xs font-semibold text-navy-500 dark:text-white/50">Full name</label>
            <input
              value={name}
              onChange={(e) => { setName(e.target.value); setSaved(false); }}
              className="mt-1.5 w-full rounded-xl border border-navy-900/10 dark:border-white/10 bg-mist dark:bg-white/5 px-4 py-3 text-sm text-navy-900 dark:text-white focus:border-brand-500 focus:outline-none"
            />
          </div>
          <div>
            <label className="text-xs font-semibold text-navy-500 dark:text-white/50">Email</label>
            <input disabled value={user?.email} className="mt-1.5 w-full rounded-xl border border-navy-900/10 dark:border-white/10 bg-navy-900/5 dark:bg-white/[0.03] px-4 py-3 text-sm text-navy-500 dark:text-white/40" />
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between rounded-xl bg-mist dark:bg-white/5 px-4 py-3">
          <span className="text-sm text-navy-700 dark:text-white/70">Dark mode</span>
          <button onClick={toggleTheme} className={`w-11 h-6 rounded-full transition-colors relative ${theme === "dark" ? "bg-brand-500" : "bg-navy-200"}`}>
            <span className={`absolute top-0.5 h-5 w-5 rounded-full bg-white transition-transform ${theme === "dark" ? "translate-x-5" : "translate-x-0.5"}`} />
          </button>
        </div>

        <div className="mt-6 flex items-center gap-3">
          <Button onClick={handleSave}>{saved ? "Saved ✓" : "Save changes"}</Button>
          <Button variant="outline" onClick={logout}>Log out</Button>
        </div>
      </Card>
    </div>
  );
}
