import Image, { StaticImageData } from "next/image";
import { sizes } from "./size";
import { User } from "lucide-react";

type PlayerCardImageProps = {
  img?: string | StaticImageData;
  LogoTeam?: string | StaticImageData;
  size?: "md" | "lg";
};

export function PlayerLetterImage({
  img,
  LogoTeam,
  size = "md",
}: PlayerCardImageProps) {
  const s = sizes[size];

  // checa se img é inválida ou null
  const hasImg = !!img;

  return (
    <div className="relative flex w-full justify-center mt-4 h-1/2">
      {hasImg ? (
        <Image
          src={img!}
          alt="Player"
          width={s.playerImgWidth}
          height={s.playerImgHeight}
          className="rounded-full border-2 border-white object-cover shadow-md"
        />
      ) : (
        <div className="flex items-center justify-center bg-gray-200 rounded-full border-2 border-white shadow-md">
          <User
            width={s.playerImgWidth}
            height={s.playerImgHeight}
            className="text-gray-500"
          />
        </div>
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
  );
}
