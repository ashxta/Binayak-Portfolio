import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { EASE } from "@/lib/motion";

const NotFound = () => (
  <div className="flex min-h-screen items-center justify-center px-6">
    <div className="aurora" aria-hidden="true" />
    <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: EASE }} className="max-w-md">
      <p className="eyebrow">Error 404</p>
      <h1 className="mt-6 font-display text-4xl font-semibold">Lost in orbit.</h1>
      <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">This page doesn't exist. Head back to the homepage to see the work.</p>
      <Link to="/" className="glow-btn mt-8 inline-flex rounded-xl bg-primary px-5 py-3 text-sm font-medium text-primary-foreground">Back to the portfolio</Link>
    </motion.div>
  </div>
);

export default NotFound;
