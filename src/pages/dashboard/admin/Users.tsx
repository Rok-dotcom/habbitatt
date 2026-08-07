import { testimonials } from "../../../data/mockData";
import Card from "../../../components/ui/Card";

export default function AdminUsers() {
  return (
    <div>
      <h1 className="font-display text-2xl font-bold text-navy-950 dark:text-white">Users</h1>
      <p className="mt-1 text-sm text-navy-500 dark:text-white/50">Manage patient and staff accounts.</p>
      <Card className="mt-8 overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-mist dark:bg-white/5 text-navy-500 dark:text-white/50 text-xs uppercase">
            <tr>
              <th className="text-left px-5 py-3 font-semibold">Name</th>
              <th className="text-left px-5 py-3 font-semibold">Location</th>
              <th className="text-left px-5 py-3 font-semibold">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-navy-900/8 dark:divide-white/10">
            {testimonials.map((t) => (
              <tr key={t.id}>
                <td className="px-5 py-3 flex items-center gap-3">
                  <img src={t.avatar} className="h-8 w-8 rounded-full object-cover" alt={t.name} />
                  {t.name}
                </td>
                <td className="px-5 py-3 text-navy-500 dark:text-white/50">{t.location}</td>
                <td className="px-5 py-3">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-brand-50 text-brand-700 dark:bg-brand-500/10 dark:text-brand-400">Active</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
}
