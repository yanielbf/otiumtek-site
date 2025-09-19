import "../globals.css";

import type { Metadata } from "next";

import Header from "@/components/layout/header";

import { getServerSideURL } from "@/lib/payload";
import { mergeOpenGraph } from "@/lib/payload/merge-open-graph";
import { OtiumtekData } from "@/components/screen/home/otiumtek-data";

export const metadata: Metadata = {
  metadataBase: new URL(getServerSideURL()),
  openGraph: mergeOpenGraph(),
  title: {
    template: "%s | Otiumtek",
    default: "Otiumtek",
  },
  description: "OtiumtekSomos una empresa de desarrollo de software fundada hace 5 años, con base en Uruguay y proyección internacional. Nuestro equipo está conformado por profesionales con más de 14 años de experiencia en la creación de soluciones tecnológicas robustas, eficientes y adaptadas a las necesidades reales de las empresas.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <div className="flex-1">{children}</div>
      <OtiumtekData />
      {/* <Footer /> */}
    </>
  );
}
