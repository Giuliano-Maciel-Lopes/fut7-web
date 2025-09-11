import { StepTeam } from "./components/stepTeam";
import { Campo } from "./components/campo";
import { uselistTeam } from "@/hooks/team/list/list";
import { Loading } from "@/components/loading/loading";
import { NotfoundItems } from "@/components/notfound/nutfound";

type Props = {};

export function TeamConfirmedPage() {
  const { data, isLoading } = uselistTeam();
console.log("data from hook:", data);

  if (isLoading) return <Loading />;
  if (!data || data.length === 0)
    return (
      <NotfoundItems msgNotfound="nenhum time encontrado no momento volte novamente mais tarde" />
    );
  const nameTeam = data.map((t)=> t.name)
  
  return (
    <section className="flex  flex-col container gap-4 pt-10 pb-28">
      <div className="mt-10">
        <StepTeam nameTeam={nameTeam} />
      </div>
      <Campo />
    </section>
  );
}
