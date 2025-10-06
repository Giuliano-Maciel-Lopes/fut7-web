import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { ReactNode } from "react";

type Props = {
  length: number;
  currentIndex: number;
  setCurrentIndex: (i: number) => void;
  children: ReactNode;
  overlay?: boolean; 
};

export function StepCarouselBase({
  length,
  currentIndex,
  setCurrentIndex,
  children,
  overlay = false,
}: Props) {
  const next = () => setCurrentIndex((currentIndex + 1) % length);
  const prev = () => setCurrentIndex((currentIndex - 1 + length) % length);

  return (
    <div
      className={`relative w-full ${
       overlay 
      ? "h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden" 
      : "flex justify-between items-center gap-10"
      }`}
    >
      {children}

      <div
        className={`absolute inset-0 flex justify-between items-center p-6 `}
      >
        <Button onClick={prev} variant={"transparent"} size="icon">
          <ArrowLeft />
        </Button>
        <Button onClick={next} variant={"transparent"} size="icon">
          <ArrowRight />
        </Button>
      </div>
    </div>
  );
}
