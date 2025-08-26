import { SectionHero, SectionNew } from "./section";

export function LandingPage() {
  return (
    <div className="flex flex-col gap-12">
     <SectionHero/>
     <SectionNew/>
      
    </div>
  );
}