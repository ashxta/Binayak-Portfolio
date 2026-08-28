import { motion } from "framer-motion";
import { drawRule, rise } from "@/lib/motion";

const SectionHeading = ({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) => (
  <div className="mb-12 sm:mb-14">
    <motion.span variants={rise} className="eyebrow block">{eyebrow}</motion.span>
    <motion.div variants={drawRule} className="mt-3 h-px origin-left bg-gradient-to-r from-primary/70 via-border to-transparent" />
    <div className="mt-6 grid gap-6 md:grid-cols-12">
      <motion.h2 variants={rise} className="font-display text-[clamp(1.8rem,4.2vw,2.8rem)] font-semibold md:col-span-6">{title}</motion.h2>
      {intro && <motion.p variants={rise} className="text-[15px] leading-relaxed text-muted-foreground md:col-span-5 md:col-start-8">{intro}</motion.p>}
    </div>
  </div>
);

export default SectionHeading;
