import { Input } from "@/components/ui/input";
import { PlayerLetter } from "@/components/LetterPlayer";
import { Player } from "@shared/prisma";
import { useListPlayer } from "@/hooks/player/List/list";
import { Loading } from "@/components/loading/loading";
import { useRouter } from "next/router";

type Props = {
  players?: Player[]; // para pag de (ISR)
  adminMode?: boolean; // flag para diferenciar se é admin
  data?: Player[]; // dados carregados via React Query // admin
  isLoading?: boolean; // loading do admin
};

export function ListPlayerPage({ players, adminMode, isLoading, data }: Props) {
  const displayPlayers = adminMode ? data : players;
  const BaseURL = process.env.NEXT_PUBLIC_BASE_API;
  const router = useRouter()

  if (adminMode && isLoading) return <Loading />;
   console.log("BaseURL:", BaseURL);
  console.log("Jogadores carregados:", displayPlayers);

  return (
    <div className="container mx-auto px-4">

      <header className="bg-blue-800 text-white rounded-md p-6 flex flex-col items-center gap-4">
        <h2 className="text-lg md:text-xl font-semibold">
          Procure por um jogador específico
        </h2>

        <div className="w-full max-w-xl">
          <Input
            className="w-full bg-white"
            placeholder="Digite o nome do jogador..."
          />
        </div>
      </header>

      <div className="flex flex-col md:flex-row gap-2 mt-5">
        {displayPlayers?.map((pl) => (
          <PlayerLetter.container onclick={()=> {router.push(`admin/player/${pl.id}`)}} >
            <PlayerLetter.image img={`${BaseURL}/${pl.photoUrl}`}/>

            <PlayerLetter.data
              assistencia={pl.assists}
              gols={pl.goals}
              nameCart={pl.nameCart}
            />
          </PlayerLetter.container>
        ))}
      </div>
    </div>
  );
}
