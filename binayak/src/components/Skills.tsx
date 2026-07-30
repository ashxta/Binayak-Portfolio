import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { EASE, inViewSection, rise } from "@/lib/motion";
import { skillGroups } from "@/lib/content";

const Skills = () => (
  <motion.section {...inViewSection} id="skills" className="scroll-mt-24 py-24 sm:py-28">
    <div className="mx-auto max-w-6xl px-6">
      <SectionHeading eyebrow="Toolkit" title="The stack, grouped by the job it does." />
      <div className="grid gap-6 sm:grid-cols-2">
        {skillGroups.map((g) => (
          <motion.div key={g.label} variants={rise} className="glass p-6">
            <div className="flex items-baseline justify-between">
              <h3 className="font-display text-lg font-semibold">{g.label}</h3>
              <span className="mono text-[11px] text-muted-foreground">{String(g.items.length).padStart(2, "0")}</span>
            </div>
            <ul className="mt-4 flex flex-wrap gap-2">
              {g.items.map((s) => (
                <motion.li key={s} whileHover={{ y: -2 }} transition={{ duration: 0.25, ease: EASE }} className="rounded-md border border-border bg-secondary/60 px-3 py-1.5 text-[13px] transition-colors hover:border-accent/50 hover:text-accent">
                  {s}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  </motion.section>
);

export default Skills;
