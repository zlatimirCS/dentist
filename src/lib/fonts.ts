import { Lora, Manrope } from "next/font/google";

export const manrope = Manrope({
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const lora = Lora({
  subsets: ["latin", "latin-ext"],
  weight: ["500", "600", "700"],
  display: "swap",
  variable: "--font-lora",
});
