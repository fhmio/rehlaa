// @ts-check
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}", "../../packages/ui-web/src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "hsl(var(--color-primary))",
          foreground: "hsl(var(--color-primary-foreground))"
        },
        muted: "hsl(var(--color-muted))"
      },
      borderRadius: {
        xl: "var(--radius-xl)",
        lg: "var(--radius-lg)",
        md: "var(--radius-md)",
        sm: "var(--radius-sm)"
      }
    }
  }
};


