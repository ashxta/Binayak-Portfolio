import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { inViewSection, rise } from "@/lib/motion";
import { achievements, certifications, education } from "@/lib/content";

const Background = () => (
  <motion.section {...inViewSection} id="background" className="scroll-mt-24 py-24 sm:py-28">
    <div className="mx-auto max-w-6xl px-6">
      <SectionHeading eyebrow="Background" title="Study, wins, and credentials." />
      <div className="grid gap-12 md:grid-cols-12">
        <div className="md:col-span-6">
          <motion.p variants={rise} className="eyebrow mb-5">Education</motion.p>
          <motion.div variants={rise} className="glass p-6">
            <p className="mono text-[11px] text-muted-foreground">{education.period}</p>
            <h3 className="mt-3 font-display text-xl font-semibold">{education.school}</h3>
            <p className="mt-1.5 text-[15px] text-muted-foreground">{education.degree}</p>
            <p className="mono mt-4 border-t border-border pt-4 text-[13px] text-accent">{education.detail}</p>
          </motion.div>
          <motion.p variants={rise} className="eyebrow mb-5 mt-12">Achievements</motion.p>
          <dl className="space-y-5">
            {achievements.map((a) => (
              <motion.div key={a.label} variants={rise} className="border-t border-border pt-4">
                <dt className="font-display text-base font-semibold">{a.label}</dt>
                <dd className="mt-1.5 text-[14px] leading-relaxed text-muted-foreground">{a.body}</dd>
              </motion.div>
            ))}
          </dl>
        </div>
        <div className="md:col-span-5 md:col-start-8">
          <motion.p variants={rise} className="eyebrow mb-5">Certifications</motion.p>
          <ol>
            {certifications.map((c, i) => (
              <motion.li key={c.name} variants={rise} className="flex gap-5 border-t border-border py-5 last:border-b">
                <span className="mono pt-0.5 text-[11px] text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
                <span>
                  <span className="block text-[15px] leading-snug">{c.name}</span>
                  <span className="mono mt-1.5 block text-[11px] uppercase tracking-[0.12em] text-muted-foreground">{c.issuer}</span>
                </span>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  </motion.section>
);

export default Background;
