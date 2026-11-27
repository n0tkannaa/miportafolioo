import type { Metadata } from "next";
import { ReactNode } from "react";
import "./globals.css";
import Providers from "@/components/layout/Providers";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: `${SITE_CONFIG.fullName} | Portafolio Digital`,
  description: SITE_CONFIG.tagline,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className="bg-surface-light text-slate-900 dark:bg-surface dark:text-slate-100 antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
