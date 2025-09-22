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
import { UseAuth } from "@/hooks/context/useAuth";
import { DeleteActive } from "../../components/deleteActive";
import { useIsActivePlayer } from "@/hooks/player/isactiveUpdate/isactiveupdate";

type Props = {
  initialData?: Player[]; // veio de ssr
};

export function ListPlayerPage({ initialData }: Props) {
  const router = useRouter();
  const BaseURL = process.env.NEXT_PUBLIC_BASE_API;
  const { session } = UseAuth();
  const ADM = session?.datauser.role === "ADMIN";

  const { setSearch, search, params } = useParamsListPlayer();
  const { data:dataquey, isLoading } = useListPlayer(params  );
const data = router.pathname === "/players/search" || ADM
  ? dataquey
  : initialData;


  const { mutateAsync: mutateDel, isPending: isPendingDel } = useDeletePlayer();
  const { mutateAsync: mutateActive, isPending: isPendingActive } =
    useIsActivePlayer();

  const confirmmDel = useToggle();
  const confirmIsActive = useToggle();
  const [activeState, setActiveState] = useState<boolean | null>(null);
  const [selectPlayerId, setSelectPlayerId] = useState<string | null>(null);

 if (isLoading && !data) return <Loading />;


  return (
    <div className="container mx-auto px-4">
      <HeaderlistPlayerPage setSearch={setSearch} search={search} />

      {!data || data.length === 0 ? (
        <NotfoundItems msgNotfound="Ops! jogador nao encontardo!F Esse jogador não existe ou você digitou errado." />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 justify-items-center items-center my-10">
          {data.map((pl) => (
            <div key={pl.id}>
              <div>
                <DeleteActive
                  isactive={pl.isActive}
                  setActive={(newState: boolean) => {
                    setSelectPlayerId(pl.id);
                    setActiveState(newState); // pega o valor do checkbox
                    confirmIsActive.open();
                  }}
                  onDelete={() => {
                    setSelectPlayerId(pl.id);
                    confirmmDel.open();
                  }}
                />
              </div>
              <PlayerLetter.container
                onclick={() => {
                  router.push(
                    ADM ? `/admin/player/${pl.id}` : `/players/${pl.id}`
                  );
                }}
              >
                <PlayerLetter.image img={`${BaseURL}/${pl.photoUrl}`} />

                <PlayerLetter.data
                  assistencia={pl.assists}
                  gols={pl.goals}
                  nameCart={pl.nameCart}
                />
              </PlayerLetter.container>
            </div>
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
      <ConfirmLayout
        mensg="Tem certeza que deseja ativar ou desativar esse player?"
        onCancel={confirmIsActive.closed}
        onConfirm={async () => {
          if (selectPlayerId && activeState !== null) {
            await mutateActive({
              id: selectPlayerId,
              data: { isActive: activeState },
            });
          }

          confirmIsActive.closed();
        }}
        open={confirmIsActive.isOpen}
        onOpenChange={confirmIsActive.toggle}
        isLoading={isPendingActive}
      />
    </div>
  );
}
