import Image from "next/image";

type Props = {
  description: string;
  img: string;
};

export function CardNew({ description, img }: Props) {
  return (
    <div className="flex flex-col w-full gap-4 items-center border-1 rounded-md">
      <div className="w-[70%] ">
        <Image
          alt="novidade"
          src={img}
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <p>{description}</p>
    </div>
  );
}
