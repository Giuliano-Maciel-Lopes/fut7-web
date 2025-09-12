import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { ArrowRight } from "lucide-react";

type Props = {
  nameTeam: string[];
  currentIndex: number;
  setCurrentIndex: (i: number) => void;
};

export function StepTeam({ nameTeam, currentIndex, setCurrentIndex }: Props) {
  function nextSlid() {
    const next = (currentIndex + 1) % nameTeam.length;
    setCurrentIndex(next);
  }
  function prevSlid() {
    const next = (currentIndex - 1 + nameTeam.length) % nameTeam.length;
    setCurrentIndex(next);
  }

  return (
    <div className="flex justify-between items-center gap-10 ">
      <Button onClick={prevSlid} variant={"transparent"}>
        <ArrowLeft />
      </Button>
      <div className="text-heading-lg truncate max-w-[200px] md:max-w-[700px] text-center">
        {nameTeam[currentIndex]}
      </div>
      <Button onClick={nextSlid} variant={"transparent"}>
        <ArrowRight />
      </Button>
    </div>
  );
}
