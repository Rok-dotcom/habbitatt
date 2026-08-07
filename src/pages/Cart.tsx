import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Minus, Plus, Trash2, PackageCheck, ShoppingBag } from "lucide-react";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import Button from "../components/ui/Button";

export default function Cart() {
  const { items, updateQty, removeItem, total, clear } = useCart();
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [placed, setPlaced] = useState(false);

  const handleCheckout = () => {
    if (!isAuthenticated) {
      navigate("/login", { state: { from: "/medicine/cart" } });
      return;
    }
    setPlaced(true);
    clear();
  };

  if (placed) {
    return (
      <div className="pt-40 pb-24 container-page max-w-lg text-center">
        <PackageCheck size={48} className="text-brand-500 mx-auto" />
        <h1 className="font-display mt-5 text-2xl font-bold text-navy-950 dark:text-white">Order placed!</h1>
        <p className="mt-2 text-navy-600 dark:text-white/60">Your medicines are being prepared for dispatch. Track progress from your dashboard.</p>
        <Link to="/dashboard/orders" className="inline-block mt-6">
          <Button>Track my order</Button>
        </Link>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="pt-40 pb-24 container-page max-w-lg text-center">
        <ShoppingBag size={44} className="text-navy-300 dark:text-white/20 mx-auto" />
        <h1 className="font-display mt-5 text-2xl font-bold text-navy-950 dark:text-white">Your cart is empty</h1>
        <p className="mt-2 text-navy-600 dark:text-white/60">Browse medicines and add what you need.</p>
        <Link to="/medicine" className="inline-block mt-6">
          <Button>Browse medicines</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24">
      <div className="container-page max-w-3xl">
        <h1 className="font-display text-3xl font-bold text-navy-950 dark:text-white">Your cart</h1>

        <div className="mt-8 space-y-4">
          {items.map(({ medicine, qty }) => (
            <div key={medicine.id} className="flex items-center gap-4 rounded-2xl border border-navy-900/8 dark:border-white/10 p-4">
              <div className="h-14 w-14 rounded-xl bg-mist dark:bg-white/5 flex items-center justify-center text-2xl shrink-0">{medicine.image}</div>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-navy-950 dark:text-white truncate">{medicine.name}</p>
                <p className="text-xs text-navy-500 dark:text-white/50">₹{medicine.price} · {medicine.packSize}</p>
              </div>
              <div className="flex items-center gap-2">
                <button onClick={() => updateQty(medicine.id, qty - 1)} className="h-8 w-8 rounded-full border border-navy-900/10 dark:border-white/15 flex items-center justify-center">
                  <Minus size={14} />
                </button>
                <span className="w-6 text-center text-sm font-medium">{qty}</span>
                <button onClick={() => updateQty(medicine.id, qty + 1)} className="h-8 w-8 rounded-full border border-navy-900/10 dark:border-white/15 flex items-center justify-center">
                  <Plus size={14} />
                </button>
              </div>
              <p className="w-16 text-right font-semibold text-navy-950 dark:text-white">₹{medicine.price * qty}</p>
              <button onClick={() => removeItem(medicine.id)} className="text-navy-400 hover:text-red-500">
                <Trash2 size={16} />
              </button>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-2xl bg-mist dark:bg-white/[0.03] p-6 flex items-center justify-between">
          <div>
            <p className="text-sm text-navy-500 dark:text-white/50">Total</p>
            <p className="text-2xl font-bold text-navy-950 dark:text-white">₹{total}</p>
          </div>
          <Button size="lg" onClick={handleCheckout}>Checkout</Button>
        </div>
      </div>
    </div>
  );
}
