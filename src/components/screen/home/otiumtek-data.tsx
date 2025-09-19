import { Container } from "@/components/layout/elements";
import { InView } from "@/components/motion-primitives/in-view";

import { inViewOptions } from "@/lib/animation";
import { Contactus } from "./contactus";
import { Information } from "./information";

export const OtiumtekData = () => {
  return (
    <Container
      variant="muted"
      className="grid md:grid-cols-2 grid-4 md:gap-8"
      rootClassName="relative isolate bg-gradient-to-b from-muted/50 dark:from-muted/75 to-muted/0 rounded"
      asChild
    >
      <InView {...inViewOptions()} as="section">
        <div
          className="absolute inset-0 z-[-1] opacity-20"
          style={{
            backgroundImage: `url('/images/pattern-plus.svg')`,
            backgroundSize: "60px 60px",
            backgroundRepeat: "repeat",
            backgroundPosition: "15px 15px",
            maskImage: "linear-gradient(to bottom, black, transparent)",
          }}
        />
        <Information />
        <Contactus />
      </InView>
    </Container>
  );
};
