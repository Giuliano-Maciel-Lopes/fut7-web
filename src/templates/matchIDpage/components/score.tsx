import { GetShowMatch } from "@/types/api/match/getshow";

type Props = {
  data: GetShowMatch;
};

export function Score({ data }: Props) {
  return (
    <div className="flex flex-col ">
      <h1 className="text-heading-lg text-center">Detalhes do jogo</h1>
      <div className="flex justify-center border bg-gray-100 h-20 w-full rounded-b-3xl mt-2">
        <div className="p-2 flex justify-between items-center bg-blue-800 h-16 w-[80%] rounded-b-3xl">
          <div className="w-[25%]  flex items-center justify-center">
            <p className="truncate text-heading-xs uppercase text-white">
              {data.team1.name}
            </p>
          </div>

          <div className="bg-white w-[40%] rounded-b-3xl h-14 flex items-center justify-center text-black font-bold text-lg">
            {data.team1Score} <span className="mx-2">X</span> {data.team2Score}
          </div>

          <div className="w-[25%]  flex items-center justify-center">
            <p className="truncate text-heading-xs uppercase text-white">
              {data.team2.name}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
