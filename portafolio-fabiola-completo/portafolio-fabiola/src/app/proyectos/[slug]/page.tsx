import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Code2, CheckCircle2, Github } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default function ProjectDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) return notFound();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-14 px-6">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/#proyectos"
            className="inline-flex items-center gap-2 text-sm text-accent hover:underline mb-8"
          >
            <ArrowLeft className="w-4 h-4" /> Volver al portafolio
          </Link>

          <span className="text-xs font-mono uppercase tracking-widest text-accent-secondary">
            {project.week}
          </span>
          <h1 className="text-3xl md:text-4xl font-bold mt-2">{project.title}</h1>
          <p className="text-slate-600 dark:text-slate-400 text-lg mt-3">{project.summary}</p>

          <div className="flex flex-wrap gap-2 mt-5">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs font-mono rounded-full bg-slate-200 dark:bg-surface-card border border-slate-300 dark:border-slate-700 text-accent"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-10">
            <div className="bg-slate-100 dark:bg-surface-card border border-slate-200 dark:border-slate-800 rounded-2xl p-6">
              <h2 className="font-semibold text-lg">Problema que resuelve</h2>
              <p className="text-slate-600 dark:text-slate-400 text-sm mt-2 leading-relaxed">
                {project.problem}
              </p>
            </div>
            <div className="bg-slate-100 dark:bg-surface-card border border-slate-200 dark:border-slate-800 rounded-2xl p-6">
              <h2 className="font-semibold text-lg">Objetivo de la actividad</h2>
              <p className="text-slate-600 dark:text-slate-400 text-sm mt-2 leading-relaxed">
                {project.objective}
              </p>
            </div>
          </div>

          <section className="mt-8 bg-slate-100 dark:bg-surface-card border border-slate-200 dark:border-slate-800 rounded-2xl p-6">
            <h2 className="font-semibold text-lg">Explicación de la solución</h2>
            <p className="text-slate-700 dark:text-slate-300 text-sm mt-2 leading-relaxed">
              {project.solution}
            </p>
          </section>

          <section className="mt-8">
            <h2 className="font-semibold text-lg flex items-center gap-2 mb-3">
              <Code2 className="w-5 h-5 text-accent" /> Código fuente destacado
            </h2>
            <pre className="bg-slate-950 border border-slate-800 rounded-2xl p-5 overflow-x-auto text-xs md:text-sm font-mono text-accent-secondary">
              <code>{project.codeSnippet}</code>
            </pre>
          </section>

          <section className="mt-8 bg-slate-100 dark:bg-surface-card border border-slate-200 dark:border-slate-800 rounded-2xl p-6">
            <h2 className="font-semibold text-lg mb-3">Resultados obtenidos</h2>
            <ul className="space-y-2">
              {project.results.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-accent-secondary shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="font-semibold text-lg mb-3">Evidencia visual</h2>
            <div className="bg-slate-100 dark:bg-surface-card border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden">
              <img src={project.image} alt={project.imageCaption} className="w-full object-cover" />
              <p className="p-4 text-xs text-slate-500">{project.imageCaption}</p>
            </div>
          </section>

          <div className="mt-8">
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-accent text-slate-950 font-semibold text-sm"
            >
              <Github className="w-4 h-4" /> Ver repositorio en GitHub
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
