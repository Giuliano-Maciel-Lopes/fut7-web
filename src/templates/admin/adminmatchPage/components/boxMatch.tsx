import { Matchsingle } from "@/types/api/match/getList";
import { X } from "lucide-react";
import { ImgTeam } from "../../components/ImgTeam/img.team";

type Props = {
  data: Matchsingle;
};

export function BoxMatch({ data }: Props) {
  return (
    <div className="bg-indigo-200 flex w-full md:w-80 h-40 rounded-xl">
      <div className="p-2 flex flex-col justify-between w-[70%] border-r-2 text-black">
        <div className="flex items-center gap-4">
          <div className=" relative border-2 border-black w-20 h-10 flex justify-center items-center">
            <ImgTeam img={data.team1.photoUrl ?? null} />
          </div>
          <h4 className="text-heading-xs">{data.team1.name}</h4>
        </div>

        <X className="self-center" />

        <div className="flex items-center gap-4">
          <div className=" relative border-2 border-black w-20 h-10 flex justify-center items-center">
            <ImgTeam img={data.team2.photoUrl ?? null} />
          </div>
          <h4 className="text-heading-xs">{data.team2.name}</h4>
        </div>
      </div>

      <div className="flex w-[30%] flex-col justify-center items-center bg-blue-600 text-white p-3 gap-1 rounded-r-md">
        <p className="text-xs font-medium uppercase tracking-wide">Fase</p>
        <p className="text-sm font-bold">{data.stage}</p>

        <p className="text-xs font-medium uppercase tracking-wide mt-2">Data</p>
        <p className="text-sm">{new Date(data.date).toLocaleDateString()}</p>

        <p className="text-xs font-medium uppercase tracking-wide mt-2">
          Status
        </p>
        <p className="text-sm font-semibold capitalize">
          {data.status.toLowerCase()}
        </p>
      </div>
    </div>
  );
}
