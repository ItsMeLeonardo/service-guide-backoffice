import type { ReactNode } from "react";

import "./globals.css";
import { Poppins, Philosopher } from "next/font/google";

const sanSerif = Poppins({
  weight: ["200", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin-ext"],
  variable: "--font-sans",
});

const serif = Philosopher({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-serif",
});

export const metadata = {
  title: "JCU Intranet",
  description: "Intranet de la empresa JCU",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const fontsClasses = `${sanSerif.variable} ${serif.variable}`;

  return (
    <html lang="es">
      <body className={fontsClasses}>{children}</body>
    </html>
  );
}
