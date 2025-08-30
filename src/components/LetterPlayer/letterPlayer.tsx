import Image, { StaticImageData } from "next/image";
import { sizes } from "./size";

type Props = {
  img?: string | StaticImageData;
  nome: string;
  assistencia: string;
  gols: string;
  LogoTeam?: string | StaticImageData;
  className?: string;
  size?:  | "md" | "lg";
};

export function LetterPlayer({
  LogoTeam,
  assistencia,
  gols,
  img,
  nome,
  size = "md",
  className,
}: Props) {
  const s = sizes[size];

  return (
    <div
      className={`relative ${s.w} ${s.h} shadow-xl border-4 border-yellow-200 overflow-hidden flex flex-col items-center
      bg-gradient-to-b from-yellow-400 via-yellow-300 to-yellow-500 clip-card ${className}`}
    >
     
      <div className="relative flex w-full justify-center  mt-4 h-1/2">
        
        {img && (
          <Image
            src={img}
            alt={""}
            width={s.playerImgWidth}
            height={s.playerImgHeight}
            className="rounded-full border-2 border-white object-cover shadow-md"
          />
        )}

       
        {LogoTeam && (
          <Image
            src={LogoTeam}
            alt="Team logo"
            width={s.logoWidth}
            height={s.logoHeight}
            className="absolute top-5 left-0 object-contain"
          />
        )}
      </div>

     
      <h2 className={`mt-4 font-bold text-gray-900 ${s.text}`}>{nome}</h2>

      
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
    </div>
  );
}
