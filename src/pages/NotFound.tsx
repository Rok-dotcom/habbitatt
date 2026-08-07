import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Home } from "lucide-react";
import Button from "../components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-b from-brand-50/60 to-white dark:from-brand-500/[0.05] dark:to-mist-dark">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="font-display text-8xl sm:text-9xl font-bold text-brand-500/20 select-none"
        >
          404
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="-mt-8 sm:-mt-12"
        >
          <h1 className="font-display text-2xl sm:text-3xl font-bold text-navy-950 dark:text-white">Page not found</h1>
          <p className="mt-3 text-navy-600 dark:text-white/60 max-w-sm mx-auto">
            The page you're looking for wandered off. Let's get you back to somewhere healthy.
          </p>
          <Link to="/" className="inline-block mt-6">
            <Button icon={<Home size={16} />} iconPosition="left">Back to home</Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
