import * as React from "react";
import { clsx } from "clsx";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, ...props }, ref) => {
  return <input ref={ref} className={clsx("ui-input", className)} {...props} />;
});

Input.displayName = "Input";


