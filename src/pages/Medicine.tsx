import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Search, ShoppingCart, Upload, FileWarning } from "lucide-react";
import type { Medicine } from "../types";
import { medicineService } from "../services/medicineService";
import { useCart } from "../context/CartContext";
import Button from "../components/ui/Button";
import Skeleton from "../components/ui/Skeleton";

export default function MedicinePage() {
  const [medicines, setMedicines] = useState<Medicine[]>([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const { addItem, count } = useCart();
  const [added, setAdded] = useState<string | null>(null);

  useEffect(() => {
    medicineService.list().then((data) => {
      setMedicines(data);
      setLoading(false);
    });
  }, []);

  const categories = useMemo(() => ["All", ...Array.from(new Set(medicines.map((m) => m.category)))], [medicines]);

  const filtered = medicines.filter(
    (m) => (category === "All" || m.category === category) && m.name.toLowerCase().includes(query.toLowerCase())
  );

  const handleAdd = (m: Medicine) => {
    addItem(m);
    setAdded(m.id);
    setTimeout(() => setAdded(null), 1200);
  };

  return (
    <div className="pt-32 pb-24">
      <div className="container-page">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div>
            <span className="text-xs font-semibold tracking-[0.14em] uppercase text-brand-600 dark:text-brand-400">Pharmacy</span>
            <h1 className="font-display mt-3 text-4xl font-bold text-navy-950 dark:text-white">Medicine delivery</h1>
            <p className="mt-3 text-navy-600 dark:text-white/60 max-w-md">Genuine medicines, verified by pharmacists, delivered worldwide.</p>
          </div>
          <Link to="/medicine/cart">
            <Button variant="secondary" icon={<ShoppingCart size={16} />} iconPosition="left">Cart ({count})</Button>
          </Link>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search size={17} className="absolute left-4 top-1/2 -translate-y-1/2 text-navy-400" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search medicines..."
              className="w-full rounded-full border border-navy-900/10 dark:border-white/15 bg-white dark:bg-navy-900 pl-11 pr-4 py-3 text-sm text-navy-900 dark:text-white placeholder:text-navy-400 focus:border-brand-500 focus:outline-none"
            />
          </div>
          <button className="flex items-center justify-center gap-2 px-5 py-3 rounded-full border border-navy-900/10 dark:border-white/15 text-sm font-medium text-navy-700 dark:text-white/70 hover:border-brand-500 transition-colors shrink-0">
            <Upload size={15} /> Upload prescription
          </button>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={`text-xs font-medium px-3.5 py-2 rounded-full transition-colors ${
                category === c
                  ? "bg-brand-500 text-white"
                  : "bg-navy-900/5 text-navy-700 hover:bg-navy-900/10 dark:bg-white/5 dark:text-white/70"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {loading
            ? Array.from({ length: 8 }).map((_, i) => <Skeleton key={i} className="h-56" />)
            : filtered.map((m) => (
                <div key={m.id} className="rounded-3xl border border-navy-900/8 dark:border-white/10 p-5 flex flex-col">
                  <div className="h-14 w-14 rounded-2xl bg-mist dark:bg-white/5 flex items-center justify-center text-2xl">{m.image}</div>
                  <h3 className="font-display mt-4 font-semibold text-navy-950 dark:text-white text-sm leading-snug">{m.name}</h3>
                  <p className="text-xs text-navy-500 dark:text-white/50 mt-1">{m.packSize}</p>
                  {m.requiresPrescription && (
                    <span className="inline-flex items-center gap-1 mt-2 text-[10px] font-semibold text-amber-700 bg-amber-50 dark:bg-amber-500/10 dark:text-amber-400 px-2 py-0.5 rounded-full w-fit">
                      <FileWarning size={10} /> Prescription required
                    </span>
                  )}
                  <div className="mt-4 flex items-center justify-between pt-4 border-t border-navy-900/8 dark:border-white/10">
                    <p className="font-bold text-navy-950 dark:text-white">₹{m.price}</p>
                    <Button
                      size="sm"
                      variant={added === m.id ? "secondary" : "primary"}
                      disabled={!m.inStock}
                      onClick={() => handleAdd(m)}
                    >
                      {!m.inStock ? "Out of stock" : added === m.id ? "Added ✓" : "Add"}
                    </Button>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
}
