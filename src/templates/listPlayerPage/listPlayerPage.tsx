import { HeaderlistPlayerPage } from "./heaader/header";
import { PlayerLetter } from "@/components/LetterPlayer";
import { Player } from "@shared/prisma";
import { Loading } from "@/components/loading/loading";
import { useRouter } from "next/router";
import { NotfoundItems } from "@/components/notfound/nutfound";
import { FilterType } from "./heaader";

type Props = {
  players?: Player[]; // para pag de (ISR)
  adminMode?: boolean; // flag para diferenciar se é admin
  data?: Player[]; // dados carregados via React Query // admin
  isLoading?: boolean; // loading do admin
  search?: string; //
  setSearch: (value: string) => void;
};

export function ListPlayerPage({
  players,
  adminMode,
  isLoading,
  data,
  setSearch,
  search,
}: Props) {
  const displayPlayers = adminMode ? data : players;
  const BaseURL = process.env.NEXT_PUBLIC_BASE_API;
  const router = useRouter();

  if (adminMode && isLoading) return <Loading />;

  return (
    <div className="container mx-auto px-4">
      <HeaderlistPlayerPage setSearch={setSearch} search={search} />

      {!displayPlayers || displayPlayers.length === 0 ? (
        <NotfoundItems msgNotfound="Ops! jogador nao encontardo!F Esse jogador não existe ou você digitou errado." />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 justify-items-center items-center my-10">
          {displayPlayers?.map((pl) => (
            <PlayerLetter.container
              key={pl.id}
              onclick={() => {
                router.push(`/admin/player/${pl.id}`);
              }}
            >
              <PlayerLetter.image img={`${BaseURL}/${pl.photoUrl}`} />

              <PlayerLetter.data
                assistencia={pl.assists}
                gols={pl.goals}
                nameCart={pl.nameCart}
              />
            </PlayerLetter.container>
          ))}
        </div>
      )}
    </div>
  );
}
