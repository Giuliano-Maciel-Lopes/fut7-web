import Image from "next/image";
import { StaticImageData } from "next/image";
import React from "react";

type Props = {
  description: string;
  img: string | StaticImageData;
  classname?: string;
  icone: React.ReactNode;
};

export function CardNew({ description, img, classname, icone }: Props) {
  return (
    <div
      className={` border-4 border-blue-500 flex flex-col w-full md:w-64 h-96 p-2 items-center rounded-xl overflow-hidden bg-black/40 ${classname}`}
    >
      <div className="  flex flex-col w-full h-full  rounded-xl  ">
        <div className="mt- flex justify-center h-5">{icone}</div>
        <div className="w-full relative h-[60%] flex ">
          <Image alt="new" src={img} fill style={{ objectFit: "cover" }} />
        </div>
        <div className="rounded-lg w-full h-[40%] flex items-center justify-center p-2">
          <p className="text-center text-gray-200">{description}</p>
        </div>
      </div>
    </div>
  );
}
