import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { Menu, X } from "lucide-react";
import { EASE } from "@/lib/motion";
import { profile } from "@/lib/content";

const links = [
  { id: "work", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "background", label: "Background" },
  { id: "contact", label: "Contact" },
];

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("work");
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const els = links.map((l) => document.getElementById(l.id)).filter((e): e is HTMLElement => Boolean(e));
    const ob = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    els.forEach((e) => ob.observe(e));
    return () => ob.disconnect();
  }, []);

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <motion.div style={{ scaleX: progress }} className="h-[2px] origin-left bg-gradient-to-r from-primary to-accent" />
      <nav className={`transition-all duration-300 ${scrolled ? "border-b border-border bg-background/70 backdrop-blur-xl" : "border-b border-transparent"}`}>
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="flex items-baseline gap-2" aria-label="Back to top">
            <span className="font-display text-lg font-semibold">Binayak</span>
            <span className="mono hidden text-[10px] uppercase tracking-[0.18em] text-muted-foreground sm:inline">{profile.role}</span>
          </button>
          <div className="hidden items-center gap-6 md:flex">
            {links.map((l) => (
              <button key={l.id} onClick={() => go(l.id)} className="relative py-1 text-sm text-muted-foreground transition-colors hover:text-foreground">
                <span className={active === l.id ? "text-foreground" : undefined}>{l.label}</span>
                {active === l.id && (
                  <motion.span layoutId="nav-glow" className="absolute -bottom-0.5 left-0 h-px w-full bg-accent shadow-[0_0_8px_hsl(271_91%_65%)]" transition={{ duration: 0.4, ease: EASE }} />
                )}
              </button>
            ))}
            <a href={profile.resume} target="_blank" rel="noopener noreferrer" className="glow-btn mono rounded-lg bg-primary px-3.5 py-2 text-[11px] uppercase tracking-[0.14em] text-primary-foreground">
              Résumé
            </a>
          </div>
          <button onClick={() => setOpen((v) => !v)} className="md:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.35, ease: EASE }} className="overflow-hidden border-b border-border bg-background/90 backdrop-blur-xl md:hidden">
            <div className="flex flex-col px-6 py-3">
              {links.map((l) => (
                <button key={l.id} onClick={() => go(l.id)} className="border-b border-border/60 py-3 text-left text-sm">{l.label}</button>
              ))}
              <a href={profile.resume} target="_blank" rel="noopener noreferrer" className="mono py-3 text-[11px] uppercase tracking-[0.14em] text-accent">Résumé</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navigation;
