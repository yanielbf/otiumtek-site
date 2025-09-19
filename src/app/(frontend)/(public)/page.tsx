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

export default function Home() {
  return (
    <Main>
      <LayoutHeader
        title="Innovación en Software"
        description="Somos una empresa de desarrollo de software fundada hace 5 años, con base en Uruguay
        y proyección internacional. Nuestro equipo está conformado por profesionales con más de 14 años 
        de experiencia en la creación de soluciones tecnológicas robustas, eficientes y adaptadas a las necesidades reales de las empresas."
        align="center"
      />
      <SectionSpacing className="mb-20">
        <Features />
      </SectionSpacing>
      <SectionSpacing className="mb-26">
        <LayoutHeader
          title="Clientes destacados"
          description="Colaboramos con empresas y organizaciones que confían en nuestra experiencia para potenciar su 
          transformación digital. Cada proyecto desarrollado junto a nuestros clientes representa un compromiso con 
          la innovación, la calidad y la generación de valor real para sus operaciones."
          align="center"
        />
        <SectionHorizontal
          variant="left"
          title="HO Tecnología"
          description={
            <div className="mt-6 max-w-md">
              <P>
                Somos partners estratégicos, brindando servicios de desarrollo
                de software a medida para sus clientes en Uruguay. Nuestra
                alianza, basada en confianza y colaboración, permite ampliar su
                portafolio con soluciones tecnológicas innovadoras, escalables y
                eficientes que optimizan procesos y potencian resultados.
              </P>
              <Link href="https://ho.com.uy" target="_blank">
                <Button variant="link" className="mt-2 cursor-pointer p-0">
                  Visitar
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
              <P>
                Diseño y desarrollo integral de un nuevo eCommerce con foco en
                alto rendimiento y escalabilidad; evolución del eCommerce
                existente mediante la incorporación de nuevas funcionalidades
                estratégicas; y mantenimiento con soporte continuo de
                aplicaciones críticas para la operación diaria, incluyendo
                procesos de ventas, logística y gestión de stock.
              </P>
              <Link href="https://www.carlosgutierrez.com.uy/" target="_blank">
                <Button variant="link" className="mt-2 cursor-pointer p-0">
                  Visitar
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
              <P>
                Optimización y evolución de la plataforma Solar Simplified, con
                foco en mejorar la gestión de clientes y automatizar procesos
                clave. Como parte del equipo de desarrollo, colaboramos en la
                implementación de nuevas funcionalidades y la corrección de
                errores, facilitando el acceso a proyectos de energía solar
                comunitaria mediante una solución digital simple, escalable y
                orientada al usuario.
              </P>
              <Link href="https://www.solarsimplified.com/" target="_blank">
                <Button variant="link" className="mt-2 cursor-pointer p-0">
                  Visitar
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
          title="Soluciones desarrolladas"
          description="Nuestras soluciones se destacan por su enfoque en la eficiencia, la escalabilidad y la integración
          con sistemas existentes, permitiendo a las empresas optimizar procesos críticos y responder de forma ágil a los
          desafíos del día a día."
          align="center"
        />
        <SectionHorizontal
          variant="left"
          title="DSS Connector"
          description={
            <div className="mt-6 max-w-md">
              <P>
                DSS Connector, desarrollado en conjunto con HO en Uruguay, es
                una solución que conecta la plataforma Dahua DSS con
                aplicaciones de terceros de forma simple y segura. Gracias a su
                arquitectura modular basada en plugins, permite integrar y
                automatizar procesos clave, potenciando al máximo la inversión
                en tecnología de seguridad.
              </P>
              <Link href="/solutions/dss-connector">
                <Button variant="link" className="mt-2 cursor-pointer p-0">
                  Ver solución
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
