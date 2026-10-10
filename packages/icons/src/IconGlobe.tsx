import * as React from "react";

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const IconGlobe = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18M12 3c2.5 3 2.5 15 0 18M9 3c-1 2-1 16 0 18M15 3c1 2 1 16 0 18" />
  </svg>
);


