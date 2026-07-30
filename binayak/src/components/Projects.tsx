import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { EASE, inViewSection, rise } from "@/lib/motion";
import { projects, type Project } from "@/lib/content";

const Card = ({ project }: { project: Project }) => (
  <motion.article variants={rise} whileHover={{ y: -6, rotateX: 1.2, rotateY: -1.2 }} transition={{ duration: 0.4, ease: EASE }} style={{ transformPerspective: 900 }} className="glass flex flex-col p-6 sm:p-8">
    <div className="flex items-start justify-between gap-4">
      <span className="mono text-[11px] text-muted-foreground">{project.index}</span>
      <span className={`mono rounded-full border px-2.5 py-1 text-[10px] uppercase tracking-[0.12em] ${project.status === "Live" ? "border-accent/40 text-accent shadow-[0_0_12px_-2px_hsl(271_91%_65%/0.5)]" : "border-border text-muted-foreground"}`}>
        {project.status} · {project.year}
      </span>
    </div>
    <h3 className="mt-5 font-display text-2xl font-semibold">{project.title}</h3>
    <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{project.premise}</p>
    <ul className="mt-6 space-y-3 border-t border-border pt-5">
      {project.outcomes.map((o) => (
        <li key={o} className="flex gap-3 text-[14px] leading-relaxed">
          <span aria-hidden="true" className="mt-[9px] h-px w-3 shrink-0 bg-accent" />
          <span>{o}</span>
        </li>
      ))}
    </ul>
    <div className="mt-7 flex flex-wrap gap-2">
      {project.stack.map((t) => (
        <span key={t} className="mono rounded-md border border-border bg-secondary/60 px-2.5 py-1 text-[11px] text-muted-foreground">{t}</span>
      ))}
    </div>
    <div className="mt-6 flex items-center gap-5 border-t border-border pt-5">
      {project.github && (
        <a href={project.github} target="_blank" rel="noopener noreferrer" className="link-underline inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground">
          <Github className="h-4 w-4" /> Source
        </a>
      )}
      {project.demo && (
        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="link-underline inline-flex items-center gap-1.5 text-sm font-medium text-accent">
          Play it live <ArrowUpRight className="h-4 w-4" />
        </a>
      )}
    </div>
  </motion.article>
);

const Projects = () => (
  <motion.section {...inViewSection} id="work" className="scroll-mt-24 py-24 sm:py-28">
    <div className="mx-auto max-w-6xl px-6">
      <SectionHeading eyebrow="Projects" title="Built, shipped, and running." intro="Two builds that cover the span: a real-time multiplayer web app, and a machine-learning pipeline reading the ground from orbit." />
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p) => <Card key={p.index} project={p} />)}
      </div>
    </div>
  </motion.section>
);

export default Projects;
