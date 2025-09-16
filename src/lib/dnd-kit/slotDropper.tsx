import { useDroppable } from "@dnd-kit/core";
import React from "react";

type Props = {
  id: string | number;
  children?: React.ReactNode;
};

export function SlotDroppable({ id, children }: Props) {
  const { setNodeRef, isOver } = useDroppable({ id });

  return (
    <div
      ref={setNodeRef}
     
    >
      {children}
    </div>
  );
}