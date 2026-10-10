import * as React from "react";

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const IconCheck = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
    <path d="M5 13l4 4L19 7" />
  </svg>
);


