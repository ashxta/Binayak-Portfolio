import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { inViewSection, rise } from "@/lib/motion";
import { profile } from "@/lib/content";

const focus = [
  { label: "Full-stack development", body: "React frontends and Node.js/Express backends, with real-time communication over WebSockets when the product calls for it." },
  { label: "Applied machine learning", body: "End-to-end pipelines: data ingestion, feature engineering, model training, and explainability with SHAP." },
  { label: "Shipping", body: "Every project here is deployed and reachable, not sitting in a folder. Build, deploy, iterate." },
];

const About = () => (
  <motion.section {...inViewSection} id="about" className="scroll-mt-24 py-24 sm:py-28">
    <div className="mx-auto max-w-6xl px-6">
      <SectionHeading eyebrow="About" title="From first commit to live deployment." />
      <div className="grid gap-12 md:grid-cols-12">
        <div className="space-y-5 md:col-span-6">
          {profile.summary.map((p) => (
            <motion.p key={p} variants={rise} className="text-[17px] leading-relaxed">{p}</motion.p>
          ))}
        </div>
        <div className="md:col-span-5 md:col-start-8">
          <motion.p variants={rise} className="eyebrow mb-5">What I focus on</motion.p>
          <dl className="space-y-5">
            {focus.map((f) => (
              <motion.div key={f.label} variants={rise} className="border-t border-border pt-4">
                <dt className="font-display text-base font-semibold">{f.label}</dt>
                <dd className="mt-1.5 text-[14px] leading-relaxed text-muted-foreground">{f.body}</dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  </motion.section>
);

export default About;
