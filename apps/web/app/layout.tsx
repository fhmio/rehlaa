import type { ReactNode } from "react";
import "./globals.css";
import { defaultTheme, getCSSVariables } from "@visa/theme";

export const metadata = {
  title: "Rehlaa — Visa Services",
  description: "Apply for Umrah/Visit/Tourism visas.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const css = getCSSVariables(defaultTheme);
  return (
    <html lang="en" dir="rtl">
      <head>
        <style id="visa-theme" dangerouslySetInnerHTML={{ __html: css }} />
      </head>
      <body>
        <div className="container">{children}</div>
      </body>
    </html>
  );
}


