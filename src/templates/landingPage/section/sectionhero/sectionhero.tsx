import { StepCarouselImage } from "@/components/stepcarrrosel/stepcarroselImage";
import { useState } from "react";
import { HeroMobile } from "./heromobile";

export function SectionHero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const imageStep = [
    { img: "/assets/IMAGE1.png", href: "/enrollment" },
    { img: "/assets/IMAGE2.png", href: "/players" },
    { img: "/assets/IMAGE3.png", href: "/enrollment" },
  ];

  return (
    <section className="mt-2 min-h-screen">
      <div className="hidden md:block">
        <StepCarouselImage
          images={imageStep.map((i) => i.img)} // passa só as imagens
          href={imageStep[currentIndex].href} // link atual
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
        />
      </div>

      <div className="md:hidden container">
       <HeroMobile/>
      </div>
    </section>
  );
}
