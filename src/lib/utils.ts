import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function asset(path: string) {
  const base = (import.meta.env.BASE_URL || "/").replace(/\/+$/, "");
  const cleaned = path.replace(/^\/+/, "");
  return `${base}/${cleaned}`;
}
