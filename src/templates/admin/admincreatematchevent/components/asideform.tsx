import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { usematchEventCreate } from "@/hooks/match-event.ts/create";
import { DialogForm } from "@/components/dialogForm/dialogoform";

type Props = {
  name: string;
  matchId: string;
  playerId: string;
  teamId: string;
};

export function AsidematchEvent({ name, matchId, playerId, teamId }: Props) {
  const { mutateAsync, isPending } = usematchEventCreate();
  const [eventType, setEventType] = useState<
    "GOAL" | "ASSIST" | "OWN_GOAL" | ""
  >("");

  return (
    <DialogForm
      isPending={isPending}
      title={`Selecionar tipo de evento para o jogador ${name}`}
      trigger={
        <Button size="icon">
          <Plus />
        </Button>
      }
      onConfirm={async () => {
        if (!eventType) return;
        await mutateAsync({ matchId, teamId, playerId, type: eventType });
        setEventType("");
      }}
    >
      <form className="flex flex-col gap-3">
        <label className="flex items-center gap-2">
          <input
            type="radio"
            name="event"
            value="GOAL"
            checked={eventType === "GOAL"}
            onChange={(e) =>
              setEventType(e.target.value as "GOAL" | "ASSIST" | "OWN_GOAL")
            }
          />
          Gol
        </label>

        <label className="flex items-center gap-2">
          <input
            type="radio"
            name="event"
            value="ASSIST"
            checked={eventType === "ASSIST"}
            onChange={(e) =>
              setEventType(e.target.value as "GOAL" | "ASSIST" | "OWN_GOAL")
            }
          />
          Assistência
        </label>

        <label className="flex items-center gap-2">
          <input
            type="radio"
            name="event"
            value="OWN_GOAL"
            checked={eventType === "OWN_GOAL"}
            onChange={(e) =>
              setEventType(e.target.value as "GOAL" | "ASSIST" | "OWN_GOAL")
            }
          />
          Gol Contra
        </label>
      </form>
    </DialogForm>
  );
}
