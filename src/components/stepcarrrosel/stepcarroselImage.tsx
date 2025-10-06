import Link from "next/link";
import { StepCarouselBase } from "./setcarroselbase";
import Image from "next/image";

type Props = {
  images: string[];
  currentIndex: number;
  setCurrentIndex: (i: number) => void;
  href: string;
};

export function StepCarouselImage({
  images,
  currentIndex,
  setCurrentIndex,
  href,
}: Props) {
  return (
    <StepCarouselBase
      length={images.length}
      currentIndex={currentIndex}
      setCurrentIndex={setCurrentIndex}
      overlay
    >
      <Link href={href} className="block w-full h-full">
        <Image
          src={images[currentIndex]}
          alt="Slide"
          fill
          className="object-contain"
        />
      </Link>
    </StepCarouselBase>
  );
}
