import { PlayerLetter } from "@/components/LetterPlayer";
import { Loading } from "@/components/loading/loading";
import { UsePLayerFindByuser } from "@/hooks/player/findyByuser/findyByuser";
import { PlayerLayout } from "./layout";

export function LatterPlayerpage() {
  const { isLoading, data } = UsePLayerFindByuser();

  if (isLoading) return <Loading />;
  return (
    <PlayerLayout className="" bgImage="/assets/fundofutebol.jpg">

    <section className="container flex flex-col md:flex-row z-10 items-center">
      <div className="md:w-1/2 ">
        <PlayerLetter.container size="lg">
          <PlayerLetter.image size="lg" img={data?.photoUrl || undefined} />
          <PlayerLetter.data
            size="lg"
            assistencia={data?.assists ?? 0}
            gols={data?.goals ?? 0}
            nameCart={data?.nameCart || "Crie sua cartinha"}
          />
        </PlayerLetter.container>
      </div>

      <div className="">
        
      </div>
    </section>
    </PlayerLayout>
  );
}
