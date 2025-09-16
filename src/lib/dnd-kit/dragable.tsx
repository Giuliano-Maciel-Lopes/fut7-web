import React from "react";
import { useDraggable } from "@dnd-kit/core";
import { PlayerMini } from "@/types/api/TEAM/get";

type Props = { 
  player: PlayerMini;
  className: string;
  children: React.ReactNode;
};

export function DraggablePlayer({ player, className, children }: Props) {
  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
    id: String(player.id),
  });

  // Só aplica transform enquanto arrasta
  const style: React.CSSProperties = isDragging
    ? {
        transform: `translate3d(${transform?.x ?? 0}px, ${transform?.y ?? 0}px, 0)`,
        zIndex: 999,
        touchAction: "none", // evita scroll estranho em touch
      }
    : {
        touchAction: "none",
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

