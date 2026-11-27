import { SITE_CONFIG } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 py-8 text-center text-xs text-slate-500">
      © 2026 {SITE_CONFIG.fullName} — Desarrollado con React, Next.js 14, TypeScript y Tailwind CSS
    </footer>
  );
}
