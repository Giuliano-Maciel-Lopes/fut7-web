import { Button } from "@/components/ui/button";
import { PropsDeletematchEvent } from "@/hooks/match-event.ts/delet";
import { EventMini } from "@/types/api/match/getshow";
import { Trash, WandSparkles, Volleyball } from "lucide-react";

type TeamEventsProps = {
  isADM: Boolean;
  teamName: string;
  teamId: string;
  events: EventMini[];
  ondelete: ({ id, matchId }: PropsDeletematchEvent) => void;
};

export function TeamEvents({
  teamName,
  teamId,
  events,
  ondelete,
  isADM,
}: TeamEventsProps) {
  const teamEvents = events.filter((e) => e.player?.teamId === teamId);

  const renderIcon = (type: string) => {
    switch (type) {
      case "GOAL":
        return <Volleyball className="text-green-500" />;
      case "OWN_GOAL":
        return <Volleyball className="text-red-500" />;
      case "ASSIST":
        return <WandSparkles className="text-yellow-400" />;
      default:
        return null;
    }
  };

  return (
    <div className="w-full sm:w-1/2 p-3 space-y-2">
      <h2 className="font-semibold text-center">{teamName}</h2>
      {teamEvents.length > 0 ? (
        teamEvents.map((e, idx) => (
          <div
            key={idx}
            className="flex flex-wrap items-center justify-between gap-2 border-2 rounded-sm p-2"
          >
            <div className="flex items-center gap-2 min-w-0">
              {renderIcon(e.type)}
              <span className="font-medium truncate">{e.player?.nameCart}</span>
            </div>
            {isADM && (
              <Button
                variant="red"
                size="sm"
                className="mt-2 sm:mt-0"
                onClick={() => ondelete({ id: e.id, matchId: e.matchId })}
              >
                <Trash size={16} />
              </Button>
            )}
          </div>
        ))
      ) : (
        <p className="text-sm text-center">Nenhum evento</p>
      )}
    </div>
  );
}
