"use client";
import Image from "next/image";
import {
  VideoMedia,
  ImageMedia,
  LayoutHeader,
  SectionHeader,
  SectionHorizontal,
  SectionSpacing,
  Container,
} from "@/components/layout/elements";
import { Main } from "@/components/layout/main";

import dssConnectoBanner from "public/images/solutions/dss_connector/banner.png";
import dssConnectoLogo from "public/images/solutions/dss_connector/logo.svg";
import dssConnectoLogin from "public/images/solutions/dss_connector/login.png";
import dssConnectorMain from "public/images/solutions/dss_connector/main.png";
import video from "public/images/solutions/dss_connector/video.gif";
import { useT } from "@/components/layout/i18n-provider";

export default function DssConnectorPage() {
  const t = useT();
  return (
    <Main>
      <LayoutHeader
        title=""
        description={
          <div className="mt-5 flex justify-center flex-col items-center">
            <Image
              src={dssConnectoBanner}
              width={0}
              height={0}
              alt="DSS Connector Logo"
              className="hidden md:block"
            />
            <Image
              src={dssConnectoLogo}
              width={0}
              height={0}
              alt="DSS Connector Logo"
              className="w-1/2 md:w-1/8 block md:hidden"
            />
            <p className="mt-5 text-xl font-bold">
              {t("solution.dss_connector.title")}
            </p>
          </div>
        }
        align="center"
      />
      <SectionSpacing className="mt-10 mb-20">
        <SectionHeader
          title={t("solution.dss_connector.issue.title")}
          description={
            <div className="text-muted-foreground text-base/7 sm:text-base/7 text-justify mt-5">
              {t("solution.dss_connector.issue.content")}
            </div>
          }
        />
        <SectionHeader
          title={t("solution.dss_connector.solution.title")}
          description={
            <div className="text-muted-foreground text-base/7 sm:text-base/7 text-justify mt-5">
              {t("solution.dss_connector.solution.content")}
            </div>
          }
        />
        <SectionHorizontal
          variant="right"
          title={t("solution.dss_connector.offer.title")}
          description={
            <div className="mt-6">
              <ul>
                <li className="text-muted-foreground text-base/7 sm:text-base/7">
                  {t("solution.dss_connector.offer.one.content")}
                </li>
                <li className="text-muted-foreground text-base/7 sm:text-base/7">
                  {t("solution.dss_connector.offer.two.content")}
                </li>
                <li className="text-muted-foreground text-base/7 sm:text-base/7">
                  {t("solution.dss_connector.offer.three.content")}
                </li>
                <li className="text-muted-foreground text-base/7 sm:text-base/7">
                  {t("solution.dss_connector.offer.four.content")}
                </li>
              </ul>
            </div>
          }
          media={<ImageMedia src={dssConnectoLogin} alt="DSS Main" zoom />}
        />
        <SectionHorizontal
          variant="right"
          title={t("solution.dss_connector.howwork.title")}
          description={
            <div className="text-muted-foreground text-base/7 sm:text-base/7 mt-5">
              {t("solution.dss_connector.howwork.content")}
              <p>
                {t("solution.dss_connector.howwork.content2")} {" "}
                <b>{t("solution.dss_connector.howwork.content3")}</b>
              </p>
            </div>
          }
          media={
            <ImageMedia
              src={dssConnectorMain}
              alt="Flujo del DSS Connector"
              imgClassName="rounded-2xl"
              zoom
            />
          }
        />
      </SectionSpacing>
      <Container asChild>
        <Image
          src={video}
          alt="Flujo del DSS Connector"
          className="rounded-2xl w-full"
          width={0}
          height={0}
          unoptimized
        />
      </Container>
    </Main>
  );
}
