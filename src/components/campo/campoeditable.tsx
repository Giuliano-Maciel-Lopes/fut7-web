import { PlayerLetter } from "@/components/LetterPlayer";
import { GetTeamReturn, PlayerMini } from "@/types/api/TEAM/get";
import { ContainerCampo } from "./container";
import {
  DndContext,
  DragEndEvent,
  rectIntersection,
  useSensors,
  useSensor,
  PointerSensor,
} from "@dnd-kit/core";
import { SlotDroppable } from "@/lib/dnd-kit/slotDropper";
import { DraggablePlayer } from "@/lib/dnd-kit/dragable";
import { playerPositions ,  } from "./positionfixed";
import { useState, useEffect } from "react";
import { Button } from "../ui/button";

type Props = {
  data: GetTeamReturn;
  onSave?: (players: PlayerMini[]) => void;
};

export function CampoEditable({ data, onSave }: Props) {
  const BaseURL = process.env.NEXT_PUBLIC_BASE_API;
  const [players, setPlayers] = useState<PlayerMini[]>(data.players);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: { distance: 5 },
    })
  );

  // log em tempo real para debug
  useEffect(() => {
    console.table(
      players.map((p) => ({
        id: p.id,
        name: p.nameCart,
        positionIndex: p.positionIndex,
      }))
    );
  }, [players]);

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    setPlayers((prev) => {
      const draggedIndex = prev.findIndex((p) => String(p.id) === active.id);
      if (draggedIndex === -1) return prev;

      const dragged = prev[draggedIndex];
      const toIndex = Number(over.id);
      if (isNaN(toIndex)) return prev;

      if (dragged.positionIndex === toIndex) return prev;

      const targetIndex = prev.findIndex((p) => p.positionIndex === toIndex);

      const newPlayers = [...prev];
      newPlayers[draggedIndex] = { ...dragged, positionIndex: toIndex };

      if (targetIndex !== -1) {
        const target = newPlayers[targetIndex];
        newPlayers[targetIndex] = {
          ...target,
          positionIndex: dragged.positionIndex,
        };
      }

      return newPlayers;
    });
  }

  return (
    <div className="flex flex-col md:flex-row gap-8">
      <DndContext
        sensors={sensors}
        onDragEnd={handleDragEnd}
        collisionDetection={rectIntersection}
      >
        {/* --- CAMPO --- */}
        <ContainerCampo>
          {Array.from({ length: 7 }, (_, index) => {
            const player = players.find((p) => p.positionIndex === index);
            return (
              <SlotDroppable
                id={index.toString()}
                key={index}
                className={`${playerPositions[index]} border-2 bg- w-16 h-20 cursor-pointer hover:scale-110 hover:shadow-lg transition-all duration-200`}
              >
                {player ? (
                  <DraggablePlayer
                    player={player}
                    className={ ` w-full h-full`}
                  >
                    <PlayerLetter.container
                      size="sm"
                     className={` relative cursor-pointer hover:scale-110 hover:shadow-lg transition-all duration-200`}
                    >
                      <PlayerLetter.image
                        size="lg"
                        img={
                          player.photoUrl
                            ? `${BaseURL}/${player.photoUrl}`
                            : undefined
                        }
                      />
                      <div className="text-sm mb-2 text-center overflow-hidden w-14">
                        {player.nameCart}
                      </div>
                    </PlayerLetter.container>
                  </DraggablePlayer>
                ) : (
                  <div
                    className={` w-14 h-14 bg-gray-200 rounded flex items-center justify-center`}
                  >
                    +
                  </div>
                )}
              </SlotDroppable>
            );
          })}
        </ContainerCampo>

        {/* --- RESERVAS --- */}
        <div className="md:w-1/2 p-3 flex flex-col h-72 border-4 from-purple-400 via-pink-500 to-purple-600">
          <h3 className="text-heading-lg mb-2">Reservas</h3>
          <div className="grid md:grid-cols-4 grid-cols-2 gap-2">
            {Array.from({ length: 7 }, (_, i) => {
              const index = i + 7;
              const player = players.find((p) => p.positionIndex === index);

              return (
                <SlotDroppable id={index.toString()} key={index}>
                  {player ? (
                    <DraggablePlayer
                      player={player}
                      className="cursor-pointer hover:scale-110 hover:shadow-lg transition-all duration-200"
                    >
                      <PlayerLetter.container size="md2">
                        {player.nameCart}
                      </PlayerLetter.container>
                    </DraggablePlayer>
                  ) : (
                    <div className="w-14 h-14 bg-gray-200 rounded flex items-center justify-center">
                      +
                    </div>
                  )}
                </SlotDroppable>
              );
            })}
          </div>
        </div>
      </DndContext>

      {/* --- Botão salvar --- */}
      <Button onClick={() => onSave?.(players)}>Salvar alterações</Button>
    </div>
  );
}
