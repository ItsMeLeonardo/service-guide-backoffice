import type { ReactNode } from "react";

import "./globals.css";
import { Montserrat_Alternates } from "next/font/google";

const montserrat = Montserrat_Alternates({
  weight: ["200", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin-ext"],
});

export const metadata = {
  title: "JCU Intranet",
  description: "Intranet de la empresa JCU",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
