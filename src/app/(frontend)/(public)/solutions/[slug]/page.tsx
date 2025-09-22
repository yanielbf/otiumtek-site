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

export default function DssConnectorPage() {
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
              Integra Dahua DSS con tus sistemas de negocio en minutos
            </p>
          </div>
        }
        align="center"
      />
      <SectionSpacing className="mt-10 mb-20">
        <SectionHeader
          title="Tienes este problema"
          description={
            <div className="text-muted-foreground text-base/7 sm:text-base/7 text-justify mt-5">
              ¿Tu plataforma DSS Dahua funciona aislada de tu nómina, control de
              accesos o ERP? La integración manual es costosa, lenta y poco
              confiable.
            </div>
          }
        />
        <SectionHeader
          title="DSS Connector es la solución"
          description={
            <div className="text-muted-foreground text-base/7 sm:text-base/7 text-justify mt-5">
              DSS Connector actúa como capa intermedia entre Dahua DSS y tus
              aplicaciones críticas. Con arquitectura modular y plugins
              dinámicos, transforma notificaciones de DSS en acciones concretas
              para tu negocio.
            </div>
          }
        />
        <SectionHorizontal
          variant="right"
          title="¿Qué ofrece?"
          description={
            <div className="mt-6">
              <ul>
                <li className="text-muted-foreground text-base/7 sm:text-base/7">
                  01. Integración rápida y segura
                </li>
                <li className="text-muted-foreground text-base/7 sm:text-base/7">
                  02. Procesamiento en tiempo real de eventos
                </li>
                <li className="text-muted-foreground text-base/7 sm:text-base/7">
                  03. Arquitectura confiable y escalable
                </li>
                <li className="text-muted-foreground text-base/7 sm:text-base/7">
                  04. Plugins adaptables a cada necesidad
                </li>
              </ul>
            </div>
          }
          media={<ImageMedia src={dssConnectoLogin} alt="DSS Main" zoom />}
        />
        <SectionHorizontal
          variant="right"
          title="¿Cómo funciona?"
          description={
            <div className="text-muted-foreground text-base/7 sm:text-base/7 mt-5">
              <b>DSS Connector</b> es un único producto con dos módulos embebidos: el <b>Gateway y el Core de Integraciones</b> (gestor de plugins). 
              El Gateway abre la comunicación con Dahua DSS para inyectar datos 
              (personas, vehículos, credenciales, permisos y acciones sobre dispositivos, etc). Luego, el 
              Core de Integraciones normaliza y enruta esos eventos mediante plugins hacia sistemas externos; todo en un solo paquete, bidireccional, extensible y fácil de desplegar
              (nómina, seguridad, BI) sin tocar el núcleo. <p>En simple: <b>Sistemas externos → Gateway (DSS Connector) → DSS y 
              de regreso DSS → Core/Plugins → Sistemas externos</b></p>.
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
