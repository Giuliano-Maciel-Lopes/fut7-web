import { StepTeam } from "./components/stepTeam";
import { Campo } from "./components/campo";

export function TeamConfirmedPage() {
  return (
    <section className="flex  flex-col container gap-4 pt-10 pb-28" >
      <div className="mt-10">
        <StepTeam nameTeam="REDLEABEL Fc"/>
      </div>
      <Campo/>
      
      
      
    </section>
  );
}