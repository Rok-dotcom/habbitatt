import Card from "../../../components/ui/Card";

const orders = [
  { id: "HB-40291", customer: "Sanjana Verma", total: 120, status: "In transit" },
  { id: "HB-40188", customer: "David Okafor", total: 245, status: "Delivered" },
  { id: "HB-40077", customer: "Farah Al-Sayed", total: 90, status: "Processing" },
];

export default function OrdersAdmin() {
  return (
    <div>
      <h1 className="font-display text-2xl font-bold text-navy-950 dark:text-white">Orders</h1>
      <p className="mt-1 text-sm text-navy-500 dark:text-white/50">All medicine orders across the platform.</p>
      <Card className="mt-8 overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-mist dark:bg-white/5 text-navy-500 dark:text-white/50 text-xs uppercase">
            <tr>
              <th className="text-left px-5 py-3 font-semibold">Order</th>
              <th className="text-left px-5 py-3 font-semibold">Customer</th>
              <th className="text-left px-5 py-3 font-semibold">Total</th>
              <th className="text-left px-5 py-3 font-semibold">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-navy-900/8 dark:divide-white/10">
            {orders.map((o) => (
              <tr key={o.id}>
                <td className="px-5 py-3 font-medium text-navy-900 dark:text-white">#{o.id}</td>
                <td className="px-5 py-3 text-navy-500 dark:text-white/50">{o.customer}</td>
                <td className="px-5 py-3">₹{o.total}</td>
                <td className="px-5 py-3">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-brand-50 text-brand-700 dark:bg-brand-500/10 dark:text-brand-400">{o.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
}
