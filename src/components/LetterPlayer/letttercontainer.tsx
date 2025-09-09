import { sizes } from "./size";
import { UseAuth } from "@/hooks/context/useAuth";

type PlayerCardContainerProps = {
  size?: "md" | "lg";
  className?: string;
  children: React.ReactNode;
  onclick?: () => void;
};

export function PlayerletterContainer({
  size = "md",
  className,
  children,
  onclick,

}: PlayerCardContainerProps) {
  const s = sizes[size];

  return (
    <div className="flex-flex-col">
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
