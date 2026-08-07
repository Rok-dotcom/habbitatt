import { motion } from "framer-motion";

const stats = [
  { value: "2M+", label: "Patients served" },
  { value: "8,500+", label: "Verified doctors" },
  { value: "40+", label: "Countries reached" },
  { value: "4.9/5", label: "Average rating" },
];

export default function Stats() {
  return (
    <section className="bg-navy-950 py-16">
      <div className="container-page grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="text-center lg:text-left lg:border-l lg:border-white/10 lg:pl-6 first:lg:border-l-0 first:lg:pl-0"
          >
            <p className="font-display text-3xl sm:text-4xl font-bold text-white">{stat.value}</p>
            <p className="mt-1 text-sm text-white/50">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
