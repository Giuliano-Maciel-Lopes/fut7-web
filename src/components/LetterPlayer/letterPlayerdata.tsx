import { sizes } from "./size";

type PlayerCardStatsProps = {
  nameCart: string;
  gols: number;
  assistencia: number;
  size?: "md" | "lg";
};

export function PlayerLetterStats({ nameCart, gols, assistencia, size = "md" }: PlayerCardStatsProps) {
  const s = sizes[size];
  return (
    <>
      <h2 className={`mt-4 font-bold text-gray-900 ${s.text}`}>{nameCart}</h2>
      <div className={`mt-2 w-full px-4 text-gray-800 font-semibold ${s.text}`}>
        <div className="flex justify-between">
          <span>Gols</span>
          <span>{gols}</span>
        </div>
        <div className="flex justify-between">
          <span>Assistências</span>
          <span>{assistencia}</span>
        </div>
      </div>
    </>
  );
}