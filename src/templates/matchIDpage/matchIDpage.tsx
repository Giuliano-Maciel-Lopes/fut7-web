import { TeamEvents } from "./components/matchEventsView";
import { useRouter } from "next/router";
import { Score } from "./components/score";
import { useShowMatch } from "@/hooks/match/showId/showId";
import { NotfoundItems } from "@/components/notfound/nutfound";
import { GetShowMatch } from "@/types/api/match/getshow";
import { MatchImageTeams } from "./components/matchImgTeams";
import { NavButton } from "./components/navbuttuns/navbuttons";
import { ConfirmLayout } from "@/components/confirmLogout";
import { useToggle } from "@/hooks/usetoggle";
import { useDeleteMatchEvent } from "@/hooks/match-event.ts/delet";
import { useState } from "react";
import { PropsDeletematchEvent } from "@/hooks/match-event.ts/delet";

type Props = {
  dataSsr: GetShowMatch;
  isAdm: boolean;
};

export function MatchIdPage({ dataSsr, isAdm }: Props) {
  const confirmdel = useToggle();
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [selectedmatchId, setSelectedmatchId] = useState<string | null>(null);
  const { mutateAsync, isPending } = useDeleteMatchEvent();

  const router = useRouter();
  const id = router.query.id;
  const { data: dataquery } = useShowMatch(id as string);
  const data = isAdm ? dataquery : dataSsr;

  if (!data) {
    return (
      <NotfoundItems msgNotfound="Essa partida foi apagada ou desativada" />
    );
  }

  const handleDeleteClick = ({ id, matchId }: PropsDeletematchEvent) => {
    setSelectedId(id);
    setSelectedmatchId(matchId);
    confirmdel.open();
  };

  return (
    <section className="container mx-auto flex flex-col gap-4 p-4">
      <NavButton status={data.status} IsAdm={isAdm} id={data.id} />
      <Score data={data} />
      <MatchImageTeams data={data} />

      <div className="border-2 flex flex-wrap">
        <TeamEvents
          isADM={isAdm}
          ondelete={handleDeleteClick}
          events={data.events}
          teamId={data.team1Id}
          teamName={data.team1.name}
        />
        <TeamEvents
          isADM={isAdm}
          ondelete={handleDeleteClick}
          events={data.events}
          teamId={data.team2Id}
          teamName={data.team2.name}
        />
      </div>

      <ConfirmLayout
        mensg="Deseja realmente excluir esse evento?"
        onCancel={confirmdel.closed}
        onConfirm={async () => {
          if (!selectedId || !selectedmatchId) {
            return;
          }

          await mutateAsync({ id: selectedId, matchId: selectedmatchId });
          confirmdel.closed();
        }}
        onOpenChange={confirmdel.toggle}
        open={confirmdel.isOpen}
        isLoading={isPending}
      />
    </section>
  );
}
