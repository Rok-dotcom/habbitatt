import { PackageCheck, Truck } from "lucide-react";
import Card from "../../components/ui/Card";

const orders = [
  { id: "HB-40291", items: "Paracetamol 500mg, Vitamin D3", total: 120, status: "In transit" },
  { id: "HB-40188", items: "Amoxicillin 500mg", total: 120, status: "Delivered" },
];

export default function Orders() {
  return (
    <div>
      <h1 className="font-display text-2xl font-bold text-navy-950 dark:text-white">Orders</h1>
      <p className="mt-1 text-sm text-navy-500 dark:text-white/50">Track your medicine deliveries.</p>
      <div className="mt-8 space-y-4">
        {orders.map((o) => (
          <Card key={o.id} className="p-5 flex items-center justify-between gap-4 flex-wrap">
            <div className="flex items-center gap-4">
              <div className="h-11 w-11 rounded-xl bg-brand-50 dark:bg-brand-500/10 flex items-center justify-center">
                {o.status === "Delivered" ? (
                  <PackageCheck size={18} className="text-brand-600 dark:text-brand-400" />
                ) : (
                  <Truck size={18} className="text-brand-600 dark:text-brand-400" />
                )}
              </div>
              <div>
                <p className="text-sm font-semibold text-navy-950 dark:text-white">#{o.id}</p>
                <p className="text-xs text-navy-500 dark:text-white/50">{o.items}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm font-bold text-navy-950 dark:text-white">₹{o.total}</p>
              <span className="text-xs font-medium text-brand-600 dark:text-brand-400">{o.status}</span>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
