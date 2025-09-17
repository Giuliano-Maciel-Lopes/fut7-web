import { PlayerLetter } from "@/components/LetterPlayer";
import {
  GetTeamReturn,
  PlayerMini,
  PlayerPositionIndex,
} from "@/types/api/TEAM/get";
import { ContainerCampo } from "../container";
import {
  DndContext,
  DragEndEvent,
  rectIntersection,
} from "@dnd-kit/core";
import { SlotDroppable } from "@/components/campo/campoEditable/dnd-kit/slotDropper";
import { DraggablePlayer } from "@/components/campo/campoEditable/dnd-kit/dragable";
import { playerPositions } from "../positionfixed";
import { useState,  } from "react";
import { Button } from "../../ui/button";
import { updatePlayerPositions } from "./dnd-kit/updatePlayerPositions";


type Props = {
  data: GetTeamReturn;
  onSave: ( data: {players: PlayerPositionIndex[]}) => void;
};

export function CampoEditable({ data, onSave }: Props) {
  const BaseURL = process.env.NEXT_PUBLIC_BASE_API;
  const [players, setPlayers] = useState<PlayerMini[]>(data.players);

function handleDragEnd(event: DragEndEvent) {
  const { active, over } = event;
  if (!over || active.id === over.id) return;

  setPlayers(prev => updatePlayerPositions(prev, active.id, over.id));
}

  return (
    <div className="flex flex-col md:flex-row gap-8">
      <DndContext
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
                  <DraggablePlayer player={player} className={` w-full h-full`}>
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
        <div className="md:w-1/2 p-3 flex flex-col h-auto border-4 from-purple-400 via-pink-500 to-purple-600">
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
                      <PlayerLetter.container size="sm">
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

 
<Button
  onClick={() =>
    onSave({ players: players.map(p => ({ id: p.id, positionIndex: p.positionIndex })) })
  }
>
  Salvar alterações
</Button>

    </div>
  );
}
