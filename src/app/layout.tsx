import type { Metadata } from "next";
import { lora, manrope } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bright Smiles Dental Care",
  description:
    "Izuzetna stomatološka nega za celu porodicu — nežan pristup, moderna tehnologija i pouzdani stručnjaci.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="sr-Latn" className={`${lora.variable} h-full antialiased`}>
      <body
        className={`${manrope.className} min-h-full flex flex-col bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
