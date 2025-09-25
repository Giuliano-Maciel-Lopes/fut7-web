import { SectionHero, SectionNew } from "./section";
import { CallToAction } from "./section/call-to-action";

export function LandingPage() {
  return (
    <div className="flex flex-col gap-12 mb-10">
     <SectionHero/>
     <SectionNew/>
     <CallToAction/>
      
    </div>
  );
}