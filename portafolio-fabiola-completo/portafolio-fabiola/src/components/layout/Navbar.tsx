import ThemeToggle from "./ThemeToggle";
import { SITE_CONFIG } from "@/lib/constants";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-surface-light/85 dark:bg-surface/85 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/#inicio" className="font-mono font-bold text-lg text-accent">
          {SITE_CONFIG.shortName}
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <a href="/#sobre-mi" className="hover:text-accent transition">Sobre mí</a>
          <a href="/#experiencia" className="hover:text-accent transition">Experiencia</a>
          <a href="/#proyectos" className="hover:text-accent transition">Proyectos</a>
          <a href="/#habilidades" className="hover:text-accent transition">Habilidades</a>
          <a href="/#formacion" className="hover:text-accent transition">Formación</a>
          <a href="/#contacto" className="hover:text-accent transition">Contacto</a>
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}
