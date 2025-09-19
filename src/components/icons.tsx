import { cn } from "@/lib/utils";
import Image from "next/image";
import type { SVGProps } from "react";
import logoLight from "public/images/logo-light.svg";
import logoDark from "public/images/logo-dark.svg";

export const OtiumtekLogoIcon = (props: SVGProps<SVGSVGElement>) => (
  <>
    <Image
      alt="otiumtek"
      src={logoLight}
      className={cn("block dark:hidden", props.className)}
      width={0}
      height={0}
    />
    <Image
      alt="otiumtek"
      src={logoDark}
      className={cn("hidden dark:block", props.className)}
      width={0}
      height={0}
    />
  </>
);
