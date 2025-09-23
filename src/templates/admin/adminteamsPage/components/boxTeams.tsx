import { ImgTeam } from "../../components/ImgTeam/img.team";
import { DeleteActive } from "@/components/deleteActive";
import { CopyIdButton } from "@/components/copieIdButton/copieIdButton";

type Props = {
  img?: string | null;
  nameTeam: string;
  onClick?: () => void;
  onDelete: () => void;
  setActive: (isActive: boolean) => void;
  isActive: boolean;
  id:string
};

export function BoxTeams({
  img,
  nameTeam,
  onClick,
  onDelete,
  isActive,
  setActive,
  id
}: Props) {
  return (
    <div className=" flex flex-col gap-2 w-40 md:w-52">
      <div className="">
        <DeleteActive
          onDelete={onDelete}
          isactive={isActive}
          setActive={setActive}
        />
      </div>
      <div
        onClick={onClick}
        className="w-40 h-40 md:w-52 md:h-52 border-2 rounded-xl flex flex-col cursor-pointer 
                 transform transition-transform duration-300 hover:scale-105"
      >
        {/* Foto ocupa 80% */}
        <div className="flex flex-col h-[80%] w-full items-center justify-center bg-blue-700">
          <div className=" relative border-4 w-20 h-20 md:w-28 md:h-28 bg-white flex items-center justify-center overflow-hidden rounded-lg">
             <ImgTeam img={img ?? null} />
          </div>
        </div>

        {/* Nome ocupa 20% */}
        <div className="h-[20%] w-full bg-white text-black flex items-center justify-center text-sm font-medium">
          {nameTeam}
        </div>
      </div>
      <CopyIdButton id={id}/>
    </div>
  );
}
