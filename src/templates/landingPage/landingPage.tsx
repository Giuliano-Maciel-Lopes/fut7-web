import { SectionHero, SectionNew } from "./section";
import { SectionEnrollment } from "./section/sectionenrollment/sectionenrollment";

export function LandingPage() {
  return (
    <div className="flex flex-col gap-12 mb-10">
     <SectionHero/>
     <SectionNew/>
     <SectionEnrollment/>
      
    </div>
  );
}