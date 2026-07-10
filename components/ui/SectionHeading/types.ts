import { HTMLAttributes } from "react";

export interface SectionHeadingProps
  extends HTMLAttributes<HTMLDivElement> {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}