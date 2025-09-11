import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
type Props = {
  nameTeam:string[];
};


export function StepTeam({ nameTeam  }: Props) {
  const [index, setIndex] = useState(0);
function nextSlid() {
  const next = (index + 1 ) % nameTeam.length
  setIndex(next)
  
}
function prevSlid() {
  const next = (index - 1 + nameTeam.length ) % nameTeam.length
  setIndex(next)}


  return (
    <div className="flex justify-between items-center gap-10 ">
      <Button onClick={prevSlid} variant={"transparent"}>
        <ArrowLeft />
      </Button>
      <div className="text-heading-lg truncate max-w-[200px] md:max-w-[700px] text-center">
        {nameTeam[index]}
      </div>
      <Button onClick={nextSlid} variant={"transparent"}>
        <ArrowRight />
      </Button>
    </div>
  );
}
