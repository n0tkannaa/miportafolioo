"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import { Github, Linkedin, Mail, ExternalLink, Send, Sparkles } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { SITE_CONFIG } from "@/lib/constants";
import { projects } from "@/data/projects";
import { skillGroups } from "@/data/skills";
import { experiences } from "@/data/experience";
import { educations } from "@/data/education";

export default function HomePage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">("idle");
  const [feedback, setFeedback] = useState("");

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setFeedback("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      const data = await res.json();

      if (!res.ok || !data.ok) {
        setStatus("error");
        setFeedback(data.error || "Error al enviar el mensaje.");
        return;
      }

      setStatus("ok");
      setFeedback(data.message);
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      setStatus("error");
      setFeedback("Error de red al conectar con el servidor.");
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* 1. INICIO (HERO) */}
        <section id="inicio" className="max-w-6xl mx-auto px-6 py-20 md:py-28 grid md:grid-cols-3 gap-10 items-center">
          <div className="md:col-span-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-accent text-xs font-mono mb-4">
              <Sparkles className="w-3.5 h-3.5" /> Portafolio Digital • 10 Semanas de IA & Web
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              {SITE_CONFIG.fullName}
            </h1>
            <p className="text-lg text-accent-secondary font-semibold mt-2">
              {SITE_CONFIG.role}
            </p>
            <p className="text-slate-600 dark:text-slate-400 mt-4 max-w-2xl leading-relaxed">
              {SITE_CONFIG.tagline}
            </p>
            <div className="flex flex-wrap gap-3 mt-7">
              <a
                href="#proyectos"
                className="px-5 py-2.5 rounded-xl bg-accent hover:opacity-90 text-slate-950 font-semibold text-sm transition"
              >
                Ver Proyectos
              </a>
              <a
                href="#contacto"
                className="px-5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 hover:border-accent text-sm font-medium transition"
              >
                Contacto
              </a>
              <a
                href={SITE_CONFIG.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-200 dark:bg-slate-800 text-sm font-medium hover:border-accent transition"
              >
                <Github className="w-4 h-4" /> GitHub
              </a>
              <a
                href={SITE_CONFIG.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-200 dark:bg-slate-800 text-sm font-medium hover:border-accent transition"
              >
                <Linkedin className="w-4 h-4" /> LinkedIn
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            <img
              src={SITE_CONFIG.avatar}
              alt={SITE_CONFIG.fullName}
              className="w-56 h-56 md:w-64 md:h-64 rounded-3xl object-cover border-2 border-accent/40 bg-surface-card shadow-xl"
            />
          </div>
        </section>

        {/* 2. SOBRE MÍ */}
        <section id="sobre-mi" className="py-16 border-t border-slate-200 dark:border-slate-800">
          <div className="max-w-5xl mx-auto px-6">
            <span className="font-mono text-xs text-accent uppercase tracking-widest">02 // Sobre mí</span>
            <h2 className="text-3xl font-bold mt-1">¿Quién soy?</h2>
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="p-6 rounded-2xl bg-slate-100 dark:bg-surface-card border border-slate-200 dark:border-slate-800 space-y-3 text-sm leading-relaxed">
                <p>{SITE_CONFIG.about.whoAmI}</p>
                <p className="text-slate-600 dark:text-slate-400">
                  <strong className="text-slate-900 dark:text-white">Intereses:</strong> {SITE_CONFIG.about.interests}
                </p>
                <p className="text-slate-600 dark:text-slate-400">
                  <strong className="text-slate-900 dark:text-white">Objetivos:</strong> {SITE_CONFIG.about.goals}
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-slate-100 dark:bg-surface-card border border-slate-200 dark:border-slate-800">
                <h3 className="font-semibold mb-3">Fortalezas clave</h3>
                <ul className="space-y-2.5 text-sm">
                  {SITE_CONFIG.about.strengths.map((s, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-accent font-bold">✦</span>
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 3. EXPERIENCIA */}
        <section id="experiencia" className="py-16 border-t border-slate-200 dark:border-slate-800">
          <div className="max-w-5xl mx-auto px-6">
            <span className="font-mono text-xs text-accent uppercase tracking-widest">03 // Experiencia</span>
            <h2 className="text-3xl font-bold mt-1">Experiencia Académica y Proyectos</h2>
            <div className="mt-6 space-y-4">
              {experiences.map((exp, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-slate-100 dark:bg-surface-card border border-slate-200 dark:border-slate-800"
                >
                  <div className="flex justify-between flex-wrap gap-2">
                    <h3 className="font-bold text-lg">{exp.role}</h3>
                    <span className="text-xs font-mono px-3 py-1 rounded-full bg-amber-500/10 text-accent">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-sm text-accent-secondary font-medium mt-1">{exp.organization}</p>
                  <p className="text-sm mt-2 text-slate-600 dark:text-slate-400">{exp.description}</p>
                  <ul className="list-disc list-inside text-sm mt-3 space-y-1">
                    {exp.achievements.map((a, i) => (
                      <li key={i}>{a}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. PROYECTOS */}
        <section id="proyectos" className="py-16 border-t border-slate-200 dark:border-slate-800">
          <div className="max-w-6xl mx-auto px-6">
            <span className="font-mono text-xs text-accent uppercase tracking-widest">04 // Proyectos</span>
            <h2 className="text-3xl font-bold mt-1">Actividades de las 10 Semanas</h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
              Haz clic en cada proyecto para ver el problema, código fuente, resultados y evidencias visuales.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              {projects.map((proj) => (
                <article
                  key={proj.id}
                  className="p-6 rounded-2xl bg-slate-100 dark:bg-surface-card border border-slate-200 dark:border-slate-800 hover:border-accent/60 flex flex-col justify-between transition"
                >
                  <div>
                    <span className="text-xs font-mono text-accent-secondary">{proj.week}</span>
                    <h3 className="font-bold text-lg mt-1">{proj.title}</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                      {proj.summary}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mt-4">
                      {proj.technologies.map((t) => (
                        <span
                          key={t}
                          className="text-xs font-mono px-2.5 py-0.5 rounded bg-slate-200 dark:bg-slate-800"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Link
                    href={`/proyectos/${proj.slug}`}
                    className="mt-6 inline-flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-accent hover:opacity-90 text-slate-950 font-semibold text-sm transition"
                  >
                    Ver código y evidencias <ExternalLink className="w-4 h-4" />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 5. HABILIDADES */}
        <section id="habilidades" className="py-16 border-t border-slate-200 dark:border-slate-800">
          <div className="max-w-5xl mx-auto px-6">
            <span className="font-mono text-xs text-accent uppercase tracking-widest">05 // Habilidades</span>
            <h2 className="text-3xl font-bold mt-1">Stack Técnico y Personal</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
              {skillGroups.map((group) => (
                <div
                  key={group.category}
                  className="p-5 rounded-2xl bg-slate-100 dark:bg-surface-card border border-slate-200 dark:border-slate-800"
                >
                  <h3 className="font-semibold text-sm text-accent mb-3">{group.category}</h3>
                  <div className="flex flex-wrap gap-1.5">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="text-xs px-2.5 py-1 rounded-full bg-slate-200 dark:bg-slate-800"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. FORMACIÓN ACADÉMICA */}
        <section id="formacion" className="py-16 border-t border-slate-200 dark:border-slate-800">
          <div className="max-w-5xl mx-auto px-6">
            <span className="font-mono text-xs text-accent uppercase tracking-widest">06 // Formación</span>
            <h2 className="text-3xl font-bold mt-1">Formación Académica</h2>
            <div className="mt-6 space-y-4">
              {educations.map((ed, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-slate-100 dark:bg-surface-card border border-slate-200 dark:border-slate-800"
                >
                  <div className="flex justify-between flex-wrap gap-2">
                    <h3 className="font-bold">{ed.degree}</h3>
                    <span className="text-xs font-mono text-slate-500">{ed.period}</span>
                  </div>
                  <p className="text-sm text-accent-secondary font-medium">{ed.institution}</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">{ed.details}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. CONTACTO */}
        <section id="contacto" className="py-16 border-t border-slate-200 dark:border-slate-800">
          <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-8">
            <div>
              <span className="font-mono text-xs text-accent uppercase tracking-widest">07 // Contacto</span>
              <h2 className="text-3xl font-bold mt-1">Conectemos</h2>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-3 leading-relaxed">
                Formulario conectado al endpoint <code className="text-accent-secondary font-mono">POST /api/contact</code> con validación en cliente y servidor.
              </p>
              <div className="mt-5 space-y-2.5 text-sm">
                <a href={`mailto:${SITE_CONFIG.email}`} className="flex items-center gap-2 hover:text-accent">
                  <Mail className="w-4 h-4 text-accent" /> {SITE_CONFIG.email}
                </a>
                <a href={SITE_CONFIG.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-accent">
                  <Github className="w-4 h-4 text-accent" /> GitHub
                </a>
                <a href={SITE_CONFIG.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-accent">
                  <Linkedin className="w-4 h-4 text-accent" /> LinkedIn
                </a>
              </div>
            </div>

            <form
              onSubmit={onSubmit}
              className="p-6 rounded-2xl bg-slate-100 dark:bg-surface-card border border-slate-200 dark:border-slate-800 space-y-4"
            >
              <div>
                <label className="block text-xs font-medium mb-1">Nombre completo</label>
                <input
                  type="text"
                  required
                  minLength={2}
                  placeholder="Tu nombre"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-700 text-sm focus:border-accent focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-medium mb-1">Correo electrónico</label>
                <input
                  type="email"
                  required
                  placeholder="tu@correo.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-700 text-sm focus:border-accent focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-medium mb-1">Mensaje</label>
                <textarea
                  rows={4}
                  required
                  minLength={10}
                  placeholder="Escribe tu mensaje aquí..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-700 text-sm focus:border-accent focus:outline-none"
                />
              </div>
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-xl bg-accent hover:opacity-90 text-slate-950 font-semibold text-sm transition disabled:opacity-50"
              >
                <Send className="w-4 h-4" />
                {status === "loading" ? "Enviando..." : "Enviar mensaje"}
              </button>
              {status === "ok" && (
                <p className="text-xs text-emerald-500 bg-emerald-950/30 border border-emerald-700/40 rounded-lg p-2.5">
                  {feedback}
                </p>
              )}
              {status === "error" && (
                <p className="text-xs text-rose-500 bg-rose-950/30 border border-rose-700/40 rounded-lg p-2.5">
                  {feedback}
                </p>
              )}
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
