// utils/updatePlayerPositions.ts
import { PlayerMini } from "@/types/api/TEAM/get";

export function updatePlayerPositions(
  players: PlayerMini[],
  activeId: string | number,
  overId: string | number
): PlayerMini[] {
  const draggedIndex = players.findIndex((p) => String(p.id) === String(activeId));
  if (draggedIndex === -1) return players;

  const dragged = players[draggedIndex];
  const toIndex = Number(overId);
  if (isNaN(toIndex) || dragged.positionIndex === toIndex) return players;

  const targetIndex = players.findIndex((p) => p.positionIndex === toIndex);

  const newPlayers = [...players];
  newPlayers[draggedIndex] = { ...dragged, positionIndex: toIndex };

  if (targetIndex !== -1) {
    const target = newPlayers[targetIndex];
    newPlayers[targetIndex] = {
      ...target,
      positionIndex: dragged.positionIndex,
    };
  }

  return newPlayers;
}
