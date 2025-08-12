export type ThemeMode = "light" | "dark";

export type VisaTheme = {
  mode: ThemeMode;
  colors: {
    primary: string; // HSL string e.g. 220 90% 56%
    primaryForeground: string;
    background: string;
    foreground: string;
    muted: string;
    card: string;
    cardForeground: string;
    border: string;
  };
  radius: {
    xl: string;
    lg: string;
    md: string;
    sm: string;
  };
  font: {
    body: string;
    heading: string;
  };
};

export const defaultTheme: VisaTheme = {
  mode: "light",
  colors: {
    primary: "222 89% 56%",
    primaryForeground: "210 40% 98%",
    background: "0 0% 100%",
    foreground: "222 47% 11%",
    muted: "215 16% 47%",
    card: "0 0% 100%",
    cardForeground: "222 47% 11%",
    border: "214 32% 91%"
  },
  radius: { xl: "16px", lg: "12px", md: "10px", sm: "8px" },
  font: {
    body: "Inter, Cairo, ui-sans-serif, system-ui",
    heading: "Inter, Cairo, ui-sans-serif, system-ui"
  }
};


