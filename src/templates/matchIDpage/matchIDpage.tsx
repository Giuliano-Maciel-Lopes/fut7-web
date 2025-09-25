import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/router";
import { Score } from "./components/score";
import { useShowMatch } from "@/hooks/match/showId/showId";
import { NotfoundItems } from "@/components/notfound/nutfound";
import { GetShowMatch } from "@/types/api/match/getshow";
import { MatchImageTeams } from "./components/matchImgTeams";
import { NavButton } from "./components/navbuttuns/navbuttons";

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
      <NavButton status={data.status} IsAdm={isAdm} id={data.id} />
      <Score data={data} />
      <MatchImageTeams data={data} />

      <div className="border-2 flex">
        <div className="w-1/2 p-3 space-y-2">
          <h2 className="font-semibold text-center">{data.team1.name}</h2>
          {data.events
            .filter((e) => e.player?.teamId === data.team1.id)
            .map((e, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <span className="text-sm">{e.type}</span>
                <span className="font-medium">{e.player?.nameCart}</span>
              </div>
            ))}
        </div>

        <span className="border-x-2 h-auto"></span>

        <div className="w-1/2 p-3 space-y-2">
          <h2 className="font-semibold text-center">{data.team2.name}</h2>
          {data.events
            .filter((e) => e.player?.teamId === data.team2.id)
            .map((e, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <span className="text-sm">{e.type}</span>
                <span className="font-medium">{e.player?.nameCart}</span>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
