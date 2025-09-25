import { SectionHero, SectionNew ,CallToAction , SectionFotter  } from "./section";


export function LandingPage() {
  return (
    <div className="flex flex-col gap-12 ">
     <SectionHero/>
     <SectionNew/>
     <CallToAction/>
     <SectionFotter/>
      
    </div>
  );
}