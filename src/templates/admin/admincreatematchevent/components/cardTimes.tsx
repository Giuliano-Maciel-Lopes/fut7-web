import { GetShowMatch, TeamWithPlayers } from "@/types/api/match/getshow";
import { AsidematchEvent } from "./asideform";
import MatchID from "@/pages/match/[id]";

type Props = {
  team: TeamWithPlayers;
  matchId: string;
};

export function CardTimes({ team, matchId }: Props) {
  return (
    <div className="w-1/2 border flex flex-col p-2 gap-2">
      <h4 className="border-b-2">{team.name}</h4>
      <div className="flex flex-col gap-3">
        {team.players.map((p) => (
          <div
            key={p.id}
            className="p-2 w-full flex justify-between items-center border rounded-3xl"
          >
            {p.nameCart}
            <AsidematchEvent
              matchId={matchId}
              playerId={p.id}
              teamId={team.id}
              name={p.nameCart}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
