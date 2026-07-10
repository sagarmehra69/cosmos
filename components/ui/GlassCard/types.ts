import { HTMLAttributes } from "react";

export interface GlassCardProps
  extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
  glow?: boolean;
}