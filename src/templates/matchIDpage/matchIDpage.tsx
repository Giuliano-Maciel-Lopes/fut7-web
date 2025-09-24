import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/router";
import { Score } from "./components/score";
import { useShowMatch } from "@/hooks/match/showId/showId";
import { NotfoundItems } from "@/components/notfound/nutfound";
import { GetShowMatch } from "@/types/api/match/getshow";
import { MatchImageTeams } from "./components/matchImgTeams";
import { NavButton } from "./components/navbuttons";

type Props = {
  dataSsr: GetShowMatch;
  isAdm: boolean;
};

export function MatchIdPage({ dataSsr, isAdm }: Props) {
  const router = useRouter();
  const id = router.query.id;
  const { data: dataquery } = useShowMatch(id as string);
  const data = isAdm ? dataquery : dataSsr;

  if (!data) {
    return (
      <NotfoundItems msgNotfound="Essa partida foi apagada ou desativada" />
    );
  }

  return (
    <section className="container mx-auto flex flex-col gap-4 p-4">
      <NavButton IsAdm={isAdm} id={data.id} />
      <Score data={data} />
      <MatchImageTeams data={data} />

      <div className="border-2 flex ">
        <div className=" w-1/2 p-3 ">teste1</div>
        <span className="border-x-2 h-auto"></span>

        <div className="w-1/2 p-3">teste2</div>
      </div>
    </section>
  );
}
