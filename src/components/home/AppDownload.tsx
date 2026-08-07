import { motion } from "framer-motion";
import { Apple, PlayCircle } from "lucide-react";

export default function AppDownload() {
  return (
    <section className="container-page pb-24">
      <div className="rounded-[2.5rem] bg-gradient-to-br from-brand-600 to-brand-700 relative overflow-hidden px-6 py-14 sm:px-16">
        <div className="absolute inset-0 opacity-[0.07] bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:24px_24px]" />
        <div className="relative grid lg:grid-cols-[1.2fr_0.8fr] gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white text-balance">
              Download Habitatt
            </h2>
            <p className="mt-3 text-white/80 max-w-md">Your health partner. Anywhere. Anytime.</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#"
                className="flex items-center gap-2.5 bg-white/95 hover:bg-white text-navy-950 rounded-2xl px-5 py-3 transition-colors"
              >
                <Apple size={22} />
                <div className="text-left leading-none">
                  <p className="text-[10px] text-navy-500">Download on the</p>
                  <p className="text-sm font-semibold -mt-0.5">App Store</p>
                </div>
              </a>
              <a
                href="#"
                className="flex items-center gap-2.5 bg-white/95 hover:bg-white text-navy-950 rounded-2xl px-5 py-3 transition-colors"
              >
                <PlayCircle size={22} />
                <div className="text-left leading-none">
                  <p className="text-[10px] text-navy-500">GET IT ON</p>
                  <p className="text-sm font-semibold -mt-0.5">Google Play</p>
                </div>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="h-40 w-40 rounded-3xl bg-white p-4 shadow-2xl">
              <div className="h-full w-full rounded-xl bg-[repeating-linear-gradient(45deg,#0f2a3d_0,#0f2a3d_2px,transparent_2px,transparent_8px)] opacity-90" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
