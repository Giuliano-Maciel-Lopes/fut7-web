import { HeaderlistPlayerPage } from "./heaader/header";
import { PlayerLetter } from "@/components/LetterPlayer";
import { Player } from "@shared/prisma";
import { Loading } from "@/components/loading/loading";
import { useRouter } from "next/router";
import { NotfoundItems } from "@/components/notfound/nutfound";
import { useToggle } from "@/hooks/usetoggle";
import { ConfirmLayout } from "@/components/confirmLogout";
import { useDeletePlayer } from "@/hooks/player/delete/delete";
import { useState } from "react";
import { useListPlayer } from "@/hooks/player/List/list";
import { useParamsListPlayer } from "@/hooks/player/List/queryParams";

type Props = {
  initialData:Player[] // veio de ssr 
};

export function ListPlayerPage({initialData}:Props) {
  const { setSearch, search, params } = useParamsListPlayer();
  const { data, isLoading } = useListPlayer(params , initialData);

  const BaseURL = process.env.NEXT_PUBLIC_BASE_API;
  const router = useRouter();
  const [selectPlayerId, setSelectPlayerId] = useState<string | null>(null);
  const { mutateAsync: mutateDel, isPending: isPendingDel } = useDeletePlayer();

  const confirmmDel = useToggle();

  if (isLoading) return <Loading />;
  return (
    <div className="container mx-auto px-4">
      <HeaderlistPlayerPage setSearch={setSearch} search={search} />

      {!data || data.length === 0 ? (
        <NotfoundItems msgNotfound="Ops! jogador nao encontardo!F Esse jogador não existe ou você digitou errado." />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 justify-items-center items-center my-10">
          {data.map((pl) => (
            <PlayerLetter.container
              onDelete={() => {
                setSelectPlayerId(pl.id);
                confirmmDel.open();
              }}
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
      <ConfirmLayout
        mensg="Tem certeza que deseja excluir esse player ?"
        onCancel={confirmmDel.closed}
        onConfirm={async () => {
          if (selectPlayerId) await mutateDel(selectPlayerId);
          confirmmDel.closed();
        }}
        open={confirmmDel.isOpen}
        onOpenChange={confirmmDel.toggle}
        isLoading={isPendingDel}
      />
    </div>
  );
}
