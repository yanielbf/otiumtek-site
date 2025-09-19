import { Analytics } from "@vercel/analytics/next";
import { Montserrat } from "next/font/google";
import { Providers } from "./providers";

// Configura Montserrat
const montserrat = Montserrat({
  subsets: ["latin"], // caracteres que vas a usar
  variable: "--font-montserrat", // CSS variable para Tailwind
  weight: ["400", "500", "700"], // elige los pesos que necesites
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${montserrat.variable} antialiased min-h-screen flex flex-col`}
      >
        <Providers>{children}</Providers>
        <Analytics />
      </body>
    </html>
  );
}
