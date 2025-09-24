import { ImgTeam } from "@/templates/admin/components/ImgTeam/img.team";
import { GetShowMatch } from "@/types/api/match/getshow";

type Props ={
    data:GetShowMatch
}

export function MatchImageTeams({data}:Props) {
  return (
    <div className="flex gap-4 mt-8 items-center ">
            <div className=" relative w-1/2 h-20 sm:h-32 lg:h-64 border bg-indigo-200 flex items-center justify-center">
              <ImgTeam img={data.team1.photoUrl ?? null} />
            </div>
            <h1 className="text-center text-2xl sm:text-3xl lg:text-4xl font-bold">
              x
            </h1>
            <div className=" h-20 relative w-1/2 sm:h-32 lg:h-64 border  bg-indigo-200 flex items-center justify-center">
              <ImgTeam img={data.team1.photoUrl ?? null} />
            </div>
          </div>
  );
}