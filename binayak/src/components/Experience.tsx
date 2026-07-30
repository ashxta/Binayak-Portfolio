import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { inViewSection, rise } from "@/lib/motion";
import { experience } from "@/lib/content";

const Experience = () => (
  <motion.section {...inViewSection} id="experience" className="scroll-mt-24 py-24 sm:py-28">
    <div className="mx-auto max-w-6xl px-6">
      <SectionHeading eyebrow="Experience" title="Where the work happened." />
      <div className="relative ml-2 border-l border-border pl-8 sm:ml-4">
        {experience.map((e) => (
          <motion.div key={e.org} variants={rise} className="relative pb-12 last:pb-0">
            <span aria-hidden="true" className="absolute -left-[37px] top-1.5 h-2.5 w-2.5 rounded-full bg-accent shadow-[0_0_12px_hsl(271_91%_65%)]" />
            <p className="mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">{e.period} · {e.place}</p>
            <h3 className="mt-2 font-display text-xl font-semibold">{e.org}</h3>
            <p className="mt-0.5 text-[15px] text-accent">{e.role}</p>
            <ul className="mt-3 space-y-2">
              {e.points.map((p) => (
                <li key={p} className="flex gap-3 text-[14px] leading-relaxed text-muted-foreground">
                  <span aria-hidden="true" className="mt-[9px] h-px w-3 shrink-0 bg-primary" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  </motion.section>
);

export default Experience;
