import { medicines } from "../../../data/mockData";
import Card from "../../../components/ui/Card";

export default function MedicinesAdmin() {
  return (
    <div>
      <h1 className="font-display text-2xl font-bold text-navy-950 dark:text-white">Medicines</h1>
      <p className="mt-1 text-sm text-navy-500 dark:text-white/50">Manage pharmacy inventory.</p>
      <Card className="mt-8 overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-mist dark:bg-white/5 text-navy-500 dark:text-white/50 text-xs uppercase">
            <tr>
              <th className="text-left px-5 py-3 font-semibold">Medicine</th>
              <th className="text-left px-5 py-3 font-semibold">Category</th>
              <th className="text-left px-5 py-3 font-semibold">Price</th>
              <th className="text-left px-5 py-3 font-semibold">Stock</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-navy-900/8 dark:divide-white/10">
            {medicines.map((m) => (
              <tr key={m.id}>
                <td className="px-5 py-3 font-medium text-navy-900 dark:text-white">{m.image} {m.name}</td>
                <td className="px-5 py-3 text-navy-500 dark:text-white/50">{m.category}</td>
                <td className="px-5 py-3">₹{m.price}</td>
                <td className="px-5 py-3">
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${m.inStock ? "bg-brand-50 text-brand-700 dark:bg-brand-500/10 dark:text-brand-400" : "bg-red-50 text-red-700 dark:bg-red-500/10 dark:text-red-400"}`}>
                    {m.inStock ? "In stock" : "Out of stock"}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
}
