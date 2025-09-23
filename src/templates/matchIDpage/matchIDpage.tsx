import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/router";
import { ImgTeam } from "../admin/components/ImgTeam/img.team";
import { Score } from "./components/score";
import { useShowMatch } from "@/hooks/match/showId/showId";
import { NotfoundItems } from "@/components/notfound/nutfound";
import { Loading } from "@/components/loading/loading";

type Props = {};

export function MatchIdPage({}: Props) {
  const router = useRouter();
  const id = router.query.id;
  const { data, isLoading } = useShowMatch(id as string);

  if (!data) {
    return (
      <NotfoundItems msgNotfound="Essa partida foi apagada ou desativada" />
    );
  }
  if (isLoading) return <Loading />;

  return (
    <section className="container mx-auto flex flex-col gap-4 p-4">
      <Button
        onClick={() => router.push("/match")}
        variant="transparent"
        className="w-fit flex items-center gap-2"
      >
        <ArrowLeft /> Voltar
      </Button>

      <Score data={data} />

      <div className="flex gap-4 mt-8 items-center ">
        <div className=" relative w-1/2 sm:h-32 lg:h-64 border bg-indigo-200 flex items-center justify-center">
          <ImgTeam img={data.team1.photoUrl ?? null} />
        </div>
        <h1 className="text-center text-2xl sm:text-3xl lg:text-4xl font-bold">
          x
        </h1>
        <div className=" relative w-1/2 sm:h-32 lg:h-64 border  bg-indigo-200 flex items-center justify-center">
          <ImgTeam img={data.team1.photoUrl ?? null} />
        </div>
      </div>

      <div className="border-t-2 flex">
        <div className=" w-1/2 ">
       
        </div>
        <span className="border-x-2 h-auto"></span>

        <div className="w-1/2 ">
        
        </div>
      </div>
    </section>
  );
}
