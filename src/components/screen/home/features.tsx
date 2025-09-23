"use client";
import { Container, ImageMedia } from "@/components/layout/elements";
import { AnimatedGroup } from "@/components/motion-primitives/animated-group";
import { Card } from "@/components/ui/card";
import { H2, Muted } from "@/components/ui/typography";
import softwareDevelopment from "public/images/services/software_development.png";
import updateOldSystems from "public/images/services/update_old_systems.png";
import devops from "public/images/services/devops.png";
import consulting from "public/images/services/consulting.png";
import { useT } from "@/components/layout/i18n-provider";

export const Features = () => {
  const t = useT();

  return (
    <Container asChild>
      <AnimatedGroup className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2">
        <Card
          variant="muted"
          className="overflow-hidden p-4 h-full bg-transparent"
        >
          <ImageMedia
            src={softwareDevelopment}
            alt="Otk"
            imgClassName="rounded-2xl"
          />

          <H2 className="scroll-m-20 font-extrabold tracking-tight">
            {t('main.features.one.title')}
          </H2>
          <Muted className="text-muted-foreground mb-6 text-base lg:mb-14 mx-auto text-justify">
            {t('main.features.one.content')}
          </Muted>
        </Card>
        <Card
          variant="muted"
          className="overflow-hidden p-4 h-full bg-transparent"
        >
          <ImageMedia
            src={updateOldSystems}
            alt="Otk"
            imgClassName="rounded-2xl"
          />
          <H2 className="scroll-m-20 font-extrabold tracking-tight">
            {t('main.features.two.title')}
          </H2>
          <Muted className="text-muted-foreground mb-6 text-base lg:mb-14 mx-auto text-justify">
            {t('main.features.two.content')}
          </Muted>
        </Card>
        <Card
          variant="muted"
          className="overflow-hidden p-4 h-full bg-transparent"
        >
          <ImageMedia
            src={devops}
            alt="otk"
            imgClassName="rounded-2xl"
          />
          <H2 className="scroll-m-20 font-extrabold tracking-tight">
            {t('main.features.three.title')}
          </H2>
          <Muted className="text-muted-foreground mb-6 text-base lg:mb-14 mx-auto text-justify">
            {t('main.features.three.content')}
          </Muted>
        </Card>
        <Card
          variant="muted"
          className="overflow-hidden p-4 h-full bg-transparent"
        >
          <ImageMedia
            src={consulting}
            alt="HO Tecnología"
            imgClassName="rounded-2xl"
          />
          <H2 className="scroll-m-20 font-extrabold tracking-tight">
            {t('main.features.four.title')}
          </H2>
          <Muted className="text-muted-foreground mb-6 text-base lg:mb-14 mx-auto text-justify">
            {t('main.features.four.content')}
          </Muted>
        </Card>
      </AnimatedGroup>
    </Container>
  );
};
