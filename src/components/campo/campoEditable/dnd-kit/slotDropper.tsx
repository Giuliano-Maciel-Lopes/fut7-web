import { useDroppable } from "@dnd-kit/core";
import React from "react";

type Props = {
  id: string ;
  children?: React.ReactNode;
  className?:string
};

export function SlotDroppable({ id, children ,className }: Props) {
  const { setNodeRef, isOver } = useDroppable({ id });

  return (
    <div
    className={className}
      ref={setNodeRef}
     
    >
      {children}
    </div>
  );
}