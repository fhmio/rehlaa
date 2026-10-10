import type { VisaTheme } from "./tokens";

export function getCSSVariables(theme: VisaTheme): string {
  const {
    colors: c,
    radius: r,
    font: f
  } = theme;

  return `:root{--color-primary:${c.primary};--color-primary-foreground:${c.primaryForeground};--color-bg:${c.background};--color-fg:${c.foreground};--color-muted:${c.muted};--color-card:${c.card};--color-card-foreground:${c.cardForeground};--color-border:${c.border};--radius-xl:${r.xl};--radius-lg:${r.lg};--radius-md:${r.md};--radius-sm:${r.sm};--font-body:${f.body};--font-heading:${f.heading}}`;
}


