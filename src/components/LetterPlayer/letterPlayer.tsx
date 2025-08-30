import Image, { StaticImageData } from "next/image";

type Props = {
  img?: string | StaticImageData;
  nome: string;
  assistencia: string;
  gols: string;
  LogoTeam?: string | StaticImageData;
  className?: string;
};

export function CardPlayer({
  LogoTeam,
  assistencia,
  gols,
  img,
  nome,
  className,
}: Props) {
  return (
    <div
      className={`relative w-48 h-72 shadow-xl border-4 border-yellow-200 overflow-hidden flex flex-col items-center
  bg-gradient-to-b from-yellow-400 via-yellow-300 to-yellow-500
clip-card ${className}`}
    >
      {LogoTeam && (
        <Image
          src={LogoTeam}
          alt="Team logo"
          className="absolute top-2 left-2 w-10 h-10 object-contain"
        />
      )}

      {img && (
        <Image
          src={img}
          alt={nome}
          className="mt-6 w-24 h-24 rounded-full border-2 border-white object-cover shadow-md"
        />
      )}

      <h2 className="mt-3 text-lg font-bold text-gray-900">{nome}</h2>

      <div className="mt-4 w-full px-4 text-gray-800 text-sm font-semibold">
        <div className="flex justify-between ">
          <span>Gols</span>
          <span>{gols}</span>
        </div>

        <div className="flex justify-between ">
          <span>Assistências</span>
          <span>{assistencia}</span>
        </div>
      </div>
    </div>
  );
}
