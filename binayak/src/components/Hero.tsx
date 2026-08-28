import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowDownRight, Github, Linkedin, Mail } from "lucide-react";
import { EASE, rise, stagger, useCountUp } from "@/lib/motion";
import { metrics, profile } from "@/lib/content";

const ROLES = ["Data Analyst", "Applied ML Engineer", "Data-Driven Problem Solver"];

const Metric = ({ value, prefix, suffix, decimals, label }: (typeof metrics)[number]) => {
  const { ref, formatted } = useCountUp(value, decimals ?? 0);
  return (
    <motion.div variants={rise} className="border-t border-border pt-4">
      <p className="mono text-2xl font-medium tracking-tight sm:text-3xl">
        <span className="text-muted-foreground">{prefix}</span>
        <span ref={ref} className="text-foreground">{formatted}</span>
        <span className="text-glow text-accent">{suffix}</span>
      </p>
      <p className="mt-2 max-w-[24ch] text-[13px] leading-snug text-muted-foreground">{label}</p>
    </motion.div>
  );
};

const Hero = () => {
  const [i, setI] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    const timer = setInterval(() => setI((value) => (value + 1) % ROLES.length), 2800);
    return () => clearInterval(timer);
  }, [reduce]);

  return (
    <section className="relative pt-32 sm:pt-40">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div initial="hidden" animate="show" variants={stagger}>
          <motion.p variants={rise} className="eyebrow">
            {profile.location} · open to data analytics and machine-learning opportunities
          </motion.p>
          <motion.h1 variants={rise} className="grad-text mt-6 font-display text-[clamp(2.9rem,8.5vw,6.5rem)] font-semibold leading-[0.95]">
            {profile.name}
          </motion.h1>
          <motion.div variants={rise} className="mt-4 h-9 overflow-hidden sm:h-11">
            <AnimatePresence mode="wait">
              <motion.p key={ROLES[i]} initial={{ y: "100%", opacity: 0 }} animate={{ y: "0%", opacity: 1 }} exit={{ y: "-100%", opacity: 0 }} transition={{ duration: 0.5, ease: EASE }} className="font-display text-2xl font-medium text-accent sm:text-3xl">
                {ROLES[i]}
              </motion.p>
            </AnimatePresence>
          </motion.div>
          <div className="mt-8 grid gap-10 border-t border-border pt-8 md:grid-cols-12">
            <motion.p variants={rise} className="text-[16px] leading-relaxed text-muted-foreground md:col-span-7">{profile.positioning}</motion.p>
            <motion.div variants={rise} className="flex flex-wrap items-start gap-3 md:col-span-5 md:justify-end">
              <a href={`mailto:${profile.email}`} className="glow-btn inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-medium text-primary-foreground"><Mail className="h-4 w-4" /> Contact me</a>
              <a href={profile.resume} target="_blank" rel="noopener noreferrer" className="glass inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-medium">Resume <ArrowDownRight className="h-4 w-4" /></a>
            </motion.div>
          </div>
          <motion.div variants={rise} className="mt-6 flex items-center gap-5">
            <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-muted-foreground transition-colors hover:text-accent"><Github className="h-[18px] w-[18px]" /></a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted-foreground transition-colors hover:text-accent"><Linkedin className="h-[18px] w-[18px]" /></a>
            <span className="mono text-[11px] text-muted-foreground">{profile.email}</span>
          </motion.div>
        </motion.div>
        <motion.div initial="hidden" animate="show" variants={stagger} transition={{ delayChildren: 0.6 }} className="mt-16 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-border pt-8 lg:grid-cols-4">
          {metrics.map((metric) => <Metric key={metric.label} {...metric} />)}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
