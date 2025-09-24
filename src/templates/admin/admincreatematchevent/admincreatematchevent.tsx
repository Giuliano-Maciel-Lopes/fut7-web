import { Loading } from "@/components/loading/loading";
import { NotfoundItems } from "@/components/notfound/nutfound";
import { useShowMatch } from "@/hooks/match/showId/showId";
import { useRouter } from "next/router";
import { CardTimes } from "./components/cardTimes";

export function AdminCreateMatchevent() {
  const router = useRouter();
  const id = router.query.id as string | undefined;
  if (!id) return <Loading />;

  const { data, isLoading } = useShowMatch(id);

  if (isLoading) return <Loading />;
  if (!data)
    return (
      <NotfoundItems msgNotfound="Essa partida foi apagada ou desativada" />
    );

  return (
    <section className="container my-10">
      <h2 className="text-center text-heading-md mb-4 uppercase">
        Criar um evento da partida
      </h2>
      <div className="flex  bg-white text-black p-2 gap-2 rounded-2xl">
        <CardTimes  matchId={data.id} team={data.team1}/>
        <CardTimes matchId={data.id} team={data.team2}/>

       
      </div>
    </section>
  );
}
