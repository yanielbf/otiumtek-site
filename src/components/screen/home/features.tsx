import { Container, ImageMedia } from "@/components/layout/elements";
import { AnimatedGroup } from "@/components/motion-primitives/animated-group";
import { Card } from "@/components/ui/card";
import { H2, Muted } from "@/components/ui/typography";
import softwareDevelopment from "public/images/services/software_development.png";
import updateOldSystems from "public/images/services/update_old_systems.png";
import devops from "public/images/services/devops.png";
import consulting from "public/images/services/consulting.png";

export const Features = () => {
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
            Desarrollo de software a medida
          </H2>
          <Muted className="text-muted-foreground mb-6 text-base lg:mb-14 mx-auto">
            Creamos soluciones tecnológicas personalizadas que se adaptan exactamente a las necesidades de tu negocio. Desde aplicaciones web hasta sistemas empresariales, desarrollamos software eficiente, escalable y fácil de usar.
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
            Modernización de sistemas
          </H2>
          <Muted className="text-muted-foreground mb-6 text-base lg:mb-14 mx-auto">
            Actualizamos plataformas heredadas (legacy) migrándolas a tecnologías modernas y arquitecturas escalables. Mejoramos el rendimiento, la seguridad y la experiencia del usuario sin interrumpir tu operación.
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
            Servicios DevOps
          </H2>
          <Muted className="text-muted-foreground mb-6 text-base lg:mb-14 mx-auto">
            Automatizamos procesos de desarrollo y despliegue para acelerar la entrega de software. Gestionamos infraestructura como código y garantizamos entornos estables, seguros y escalables.
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
            Consultoría técnica
          </H2>
          <Muted className="text-muted-foreground mb-6 text-base lg:mb-14 mx-auto">
            Asesoramos a empresas en la toma de decisiones tecnológicas clave. Analizamos tus sistemas, proponemos soluciones escalables y diseñamos arquitecturas eficientes.
          </Muted>
        </Card>
      </AnimatedGroup>
    </Container>
  );
};
