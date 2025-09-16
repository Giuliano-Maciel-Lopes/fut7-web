import React from "react";
import { useDraggable } from "@dnd-kit/core";
import { PlayerMini } from "@/types/api/TEAM/get";
import { PlayerLetter } from "@/components/LetterPlayer";

type Props = { player: PlayerMini , className:string ,  children: React.ReactNode };

export function DraggablePlayer({ player , className, children}: Props) {
 
  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
    id: String(player.id),
  });

  const style: React.CSSProperties = {
    // move o elemento enquanto arrasta
    transform: transform ? `translate3d(${transform.x}px, ${transform.y}px, 0)` : undefined,
    // evita scroll estranho em touch
    touchAction: "none",
    // garante que o item fique acima enquanto arrasta
    zIndex: isDragging ? 999 : undefined,
  };

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      style={style}
      className={className}
    >
      {children}
    </div>
  );
}
