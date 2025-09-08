import { Trash2 } from "lucide-react";
import { sizes } from "./size";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { UseAuth } from "@/hooks/context/useAuth";

type PlayerCardContainerProps = {
  size?: "md" | "lg";
  className?: string;
  children: React.ReactNode;
  onclick?: () => void;
  IsActive?: () => void;
  onDelete?:()=>void
};

export function PlayerletterContainer({
  size = "md",
  className,
  children,
  onclick,
  IsActive,
  onDelete
}: PlayerCardContainerProps) {
  const { session } = UseAuth();
  const Adm = session?.datauser.role === "ADMIN";
  const s = sizes[size];

  return (
    <div className="flex-flex-col">
      {Adm && (
        <div className={`${s.w} flex justify-between`}>
          <Button onClick={onDelete}  className="bg-red-600 rounded-full p-2">
            <Trash2 />
          </Button>

          <div className="h-6 w-6">
            <Input type="checkbox"  />
          </div>
        </div>
      )}

      <div
        onClick={onclick}
        className={`relative ${s.w} ${s.h} shadow-xl border-4 border-yellow-200 overflow-hidden flex flex-col items-center
      bg-gradient-to-b from-yellow-400 via-yellow-300 to-yellow-500 clip-card ${className}`}
      >
        {children}
      </div>
    </div>
  );
}
