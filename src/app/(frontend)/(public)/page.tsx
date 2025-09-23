"use client";
import { Main } from "@/components/layout/main";
import { Features } from "@/components/screen/home/features";
import {
  ImageMedia,
  LayoutHeader,
  SectionHorizontal,
  SectionSpacing,
} from "@/components/layout/elements";
import dssConnectorLogin from "public/images/solutions/dss_connector/login.png";
import carlosGutierrez from "public/images/clients/carlos-gutierrez.png";
import ho from "public/images/clients/ho.png";
import solarSimplified from "public/images/clients/solar-simplified.png";
import { P } from "@/components/ui/typography";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useT } from "@/components/layout/i18n-provider";

export default function Home() {
  const t = useT();

  return (
    <Main>
      <LayoutHeader
        title={t("main.otiumtek.title")}
        description={t("main.otiumtek.content")}
        align="center"
      />
      <SectionSpacing className="mb-20">
        <Features />
      </SectionSpacing>
      <SectionSpacing className="mb-26">
        <LayoutHeader
          title={t("main.customers.title")}
          description={t("main.customers.content")}
          align="center"
        />
        <SectionHorizontal
          variant="left"
          title="HO Tecnología"
          description={
            <div className="mt-6 max-w-md">
              <P className="text-justify">{t("main.customers.one.content")}</P>
              <Link href="https://ho.com.uy" target="_blank">
                <Button variant="link" className="mt-2 cursor-pointer p-0">
                  {t("action.visit")}
                </Button>
              </Link>
            </div>
          }
          media={
            <ImageMedia
              src={ho}
              alt="HO Tecnología"
              imgClassName="rounded-2xl"
            />
          }
        />
        <SectionHorizontal
          variant="right"
          title="Carlos Gutiérrez S.A"
          description={
            <div className="mt-6 max-w-md">
              <P className="text-justify">{t("main.customers.two.content")}</P>
              <Link href="https://www.carlosgutierrez.com.uy/" target="_blank">
                <Button variant="link" className="mt-2 cursor-pointer p-0">
                  {t("action.visit")}
                </Button>
              </Link>
            </div>
          }
          media={
            <ImageMedia
              src={carlosGutierrez}
              alt="Carlos Gutierrez S.A"
              imgClassName="rounded-2xl"
            />
          }
        />
        <SectionHorizontal
          variant="left"
          title="Solar Simplified"
          description={
            <div className="mt-6 max-w-md">
              <P className="text-justify">
                {t("main.customers.three.content")}
              </P>
              <Link href="https://www.solarsimplified.com/" target="_blank">
                <Button variant="link" className="mt-2 cursor-pointer p-0">
                  {t("action.visit")}
                </Button>
              </Link>
            </div>
          }
          media={
            <ImageMedia
              src={solarSimplified}
              alt="Solar Simplified"
              imgClassName="rounded-2xl"
            />
          }
        />
      </SectionSpacing>
      <SectionSpacing className="mb-20">
        <LayoutHeader
          title={t("main.solutions.title")}
          description={t("main.solutions.content")}
          align="center"
        />
        <SectionHorizontal
          variant="left"
          title="DSS Connector"
          description={
            <div className="mt-6 max-w-md">
              <P className="text-justify">{t("main.solutions.one.content")}</P>
              <Link href="/solutions/dss-connector">
                <Button variant="link" className="mt-2 cursor-pointer p-0">
                  {t("action.go_page")}
                </Button>
              </Link>
            </div>
          }
          media={
            <ImageMedia
              src={dssConnectorLogin}
              alt="Dss Connector"
              imgClassName="rounded-4xl"
            />
          }
        />
      </SectionSpacing>
      {/* <SectionSpacing>
        <OtiumtekData />
      </SectionSpacing> */}
    </Main>
  );
}
