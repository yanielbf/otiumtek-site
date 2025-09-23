import { Analytics } from "@vercel/analytics/next";
import { Montserrat } from "next/font/google";
import { Providers } from "./providers";

import { cookies } from "next/headers";
import { getDictionary, DEFAULT_LOCALE } from "@/lib/i18n";
import { I18nProvider } from "@/components/layout/i18n-provider";

// Configura Montserrat
const montserrat = Montserrat({
  subsets: ["latin"], // caracteres que vas a usar
  variable: "--font-montserrat", // CSS variable para Tailwind
  weight: ["400", "500", "700"], // elige los pesos que necesites
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const lang = ((await cookies()).get("lang")?.value ?? DEFAULT_LOCALE) as
    | "es"
    | "en";
  const dict = await getDictionary(lang);

  return (
    <html lang={lang} suppressHydrationWarning>
      <body
        className={`${montserrat.variable} antialiased min-h-screen flex flex-col`}
      >
        <Providers>
          <I18nProvider locale={lang} dict={dict}>
            {children}
          </I18nProvider>
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
