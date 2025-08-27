import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
type Props = {
  nameTeam?: string;
};

export function StepTeam({ nameTeam }: Props) {
  return (
    <div className="flex justify-between items-center gap-10 ">
      <Button variant={"transparent"}>
        <ArrowLeft />
      </Button>
      <div className="text-heading-lg truncate max-w-[200px] md:max-w-[700px] text-center">
        {nameTeam}
      </div>
      <Button variant={"transparent"}>
        <ArrowRight />
      </Button>
    </div>
  );
}
