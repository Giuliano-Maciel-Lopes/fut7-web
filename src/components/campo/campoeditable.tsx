import { PlayerLetter } from "@/components/LetterPlayer";
import { GetTeamReturn, PlayerMini } from "@/types/api/TEAM/get";
import { ContainerCampo } from "./container";
import { DndContext, DragEndEvent, closestCenter } from "@dnd-kit/core";
import { SlotDroppable } from "@/lib/dnd-kit/slotDropper";
import { DraggablePlayer } from "@/lib/dnd-kit/dragable";
import { playerPositions } from "./positionfixed";
import { useState } from "react";
import { Button } from "../ui/button";

type Props = {
  data: GetTeamReturn;
  onSave?: (players: PlayerMini[]) => void; // opcional, para chamar API
};

export function CampoEditable({ data, onSave }: Props) {
  const BaseURL = process.env.NEXT_PUBLIC_BASE_API;
  const [players, setPlayers] = useState<PlayerMini[]>(data.players);

  // Reservas (positionIndex >= 7)
  const reservas = data.players.filter((p) => p.positionIndex >= 7);

function handleDragEnd(event: DragEndEvent) {
  const { active, over } = event;
  if (!over) return;

  setPlayers((prev) => {
    const updated = [...prev];

    const draggedIndex = updated.findIndex(p => String(p.id) === active.id);
    if (draggedIndex === -1) return prev;

    const slotIndex = parseInt(over.id as string);

    const targetIndex = updated.findIndex(p => p.positionIndex === slotIndex);

    if (targetIndex === -1) {
      // slot vazio → só mover o jogador
      updated[draggedIndex].positionIndex = slotIndex;
    } else {
      // swap entre jogadores
      const tempPos = updated[targetIndex].positionIndex;
      updated[targetIndex].positionIndex = updated[draggedIndex].positionIndex;
      updated[draggedIndex].positionIndex = tempPos;
    }

    return updated;
  });
}


  return (
    <div className="flex flex-col md:flex-row gap-8">
      <DndContext onDragEnd={handleDragEnd} collisionDetection={closestCenter}>
        <ContainerCampo>
          {Array.from({ length: 7 }, (_, index) => {
            const player = players.find((p) => p.positionIndex === index);
            return (
              <SlotDroppable id={index} key={index}>
                <DraggablePlayer
                  player={
                    player ?? {
                      id: index.toString(),
                      nameCart: "",
                      photoUrl: "",
                      positionIndex: index,
                    }
                  }
                  key={index}
                  className={`${playerPositions[index]} cursor-pointer hover:scale-110 hover:shadow-lg transition-all duration-200`}
                >
                  <PlayerLetter.container
                    size="sm"
                    className={`absolute flex items-center justify-center`}
                  >
                    <PlayerLetter.image
                      size="lg"
                      img={
                        player?.photoUrl
                          ? `${BaseURL}/${player?.photoUrl}`
                          : undefined
                      }
                    />
                    <div className="text-sm mb-2 text-center overflow-hidden w-14">
                      {player?.nameCart}
                    </div>
                  </PlayerLetter.container>
                </DraggablePlayer>
              </SlotDroppable>
            );
          })}
        </ContainerCampo>
        {/* Reservas */}
        <div className="md:w-1/2 p-3 flex flex-col h-60 border-4 from-purple-400 via-pink-500 to-purple-600">
          <div className="grid md:grid-cols-3 grid-cols-2 gap-2">
            <h3 className="text-heading-lg">Reservas</h3>
            {reservas.map((player) => (
              <div
                key={player.nameCart}
                className="cursor-pointer hover:scale-110 hover:shadow-lg transition-all duration-200`"
              >
                {" "}
                <PlayerLetter.container size="md2">
                  {player.nameCart}
                </PlayerLetter.container>
              </div>
            ))}
          </div>
        </div>
      </DndContext>
      <Button onClick={() => onSave}>salvar alterações</Button>
    </div>
  );
}
