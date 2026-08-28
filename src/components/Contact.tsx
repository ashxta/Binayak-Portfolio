import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { drawRule, inViewSection, rise } from "@/lib/motion";
import { profile } from "@/lib/content";

const channels = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
  { label: "LinkedIn", value: "binayakmohanta", href: profile.linkedin },
  { label: "GitHub", value: "BinayakMohanta", href: profile.github },
];

const Contact = () => (
  <motion.section {...inViewSection} id="contact" className="scroll-mt-24 py-24 sm:py-28">
    <div className="mx-auto max-w-6xl px-6">
      <motion.p variants={rise} className="eyebrow">Contact</motion.p>
      <motion.div variants={drawRule} className="mt-3 h-px origin-left bg-gradient-to-r from-primary/70 via-border to-transparent" />
      <motion.h2 variants={rise} className="grad-text mt-8 font-display text-[clamp(2.1rem,6.5vw,4.2rem)] font-semibold leading-[0.98]">
        Have something worth building?
      </motion.h2>
      <motion.p variants={rise} className="mt-7 max-w-xl text-[16px] leading-relaxed text-muted-foreground">
        I'm looking for data analyst, applied machine-learning, and related internship opportunities. Email is the fastest way to reach me.
      </motion.p>
      <motion.div variants={rise} className="mt-10 flex flex-wrap gap-3">
        <a href={`mailto:${profile.email}`} className="glow-btn inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground">
          Write to me <ArrowUpRight className="h-4 w-4" />
        </a>
        <a href={profile.resume} target="_blank" rel="noopener noreferrer" className="glass inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-sm font-medium">
          Download the résumé
        </a>
      </motion.div>
      <dl className="mt-16 grid grid-cols-2 gap-x-6 gap-y-8 lg:grid-cols-4">
        {channels.map((c) => (
          <motion.div key={c.label} variants={rise} className="border-t border-border pt-4">
            <dt className="eyebrow">{c.label}</dt>
            <dd className="mt-2">
              <a href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="link-underline mono text-[13px] transition-colors hover:text-accent">
                {c.value}
              </a>
            </dd>
          </motion.div>
        ))}
      </dl>
    </div>
  </motion.section>
);

export default Contact;
