import { LandingPage } from "@/templates/landingPage/landingPage";
//essa rota nao vai ter nehuma requisiçaoa a api ou seja n precisa de ssg isr nem nd do tipo 

export default function Home() {
  return (
    <article className=" flex flex-col">
      <LandingPage/>
    
    </article>
  );
}
