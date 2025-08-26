import Image from "next/image";
import { StaticImageData } from "next/image";

type Props = {
  description: string;
  img: string | StaticImageData;
};

export function CardNew({ description, img }: Props) {
  return (
    <div className="flex flex-col w-full gap-4 items-center border rounded-md border-gray-400">
      <div className="w-full relative h-60">
        <Image
          alt="new"
          src={img}
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="bg-blue-500 rounded-lg w-full">
         <p className="text-center text-gray-200 p-2">{description}</p>
      </div>
    </div>
  );
}
