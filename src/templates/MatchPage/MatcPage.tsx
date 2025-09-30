import { useState } from "react";
import { useRouter } from "next/router";
import { HeaderMatch } from "./components/header";
import { BoxMatch } from "./components/boxMatch";
import { useListMatch } from "@/hooks/match/list/list";
import { NotfoundItems } from "@/components/notfound/nutfound";
import { parseFiltersMatch } from "@/hooks/match/list/parsedFilter";
import { DeleteActive } from "../../components/deleteActive";
import { ConfirmLayout } from "@/components/confirmLogout";
import { useToggle } from "@/hooks/usetoggle";
import { UseDeleteMatch } from "@/hooks/match/delete/delete";
import { useUpdateIsActiveMatch } from "@/hooks/match/updateActive/updateIsactive";
import { Loading } from "@/components/loading/loading";
import { ListMatches } from "@/types/api/match/getList";


type Props = {
  isAdm: boolean;
  dataSsr: ListMatches;
};

export function MatchPage({ isAdm, dataSsr }: Props) {
  const router = useRouter();
  const filters = parseFiltersMatch(router.query);

  const { data: dataquery,  } = useListMatch({ filters });

  const data = (!!filters || isAdm) && dataquery ? dataquery : dataSsr;

  const [selectedMatchId, setSelectedMatchId] = useState<string | null>(null);
  const [activeState, setActiveState] = useState<boolean | null>(null);

  const confirmDelete = useToggle();
  const confirmActive = useToggle();

  const { mutateAsync: mutateDelete, isPending: isPendingDelete } =
    UseDeleteMatch(filters);
  const { mutateAsync: mutateActive, isPending: isPendingActive } =
    useUpdateIsActiveMatch(filters);

  return (
    <section className="flex flex-col mt-10 container gap-4">
      <HeaderMatch />
      

      {!data || data.length === 0 ? (
        <NotfoundItems msgNotfound="nenhuma partida encontrada" />
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.map((match) => (
            <div className="w-full md:w-80" key={match.id}>
            
                <DeleteActive
                Adm={isAdm}
                  isactive={match.isActive}
                  setActive={(newState: boolean) => {
                    setSelectedMatchId(match.id);
                    setActiveState(newState);
                    confirmActive.open();
                  }}
                  onDelete={() => {
                    setSelectedMatchId(match.id);
                    confirmDelete.open();
                  }}
                />
             
              <BoxMatch data={match} />
            </div>
          ))}
        </div>
      )}
     
      <ConfirmLayout
        mensg="Tem certeza que deseja excluir essa partida?"
        open={confirmDelete.isOpen}
        onCancel={confirmDelete.closed}
        onConfirm={async () => {
          if (selectedMatchId) await mutateDelete(selectedMatchId);
          confirmDelete.closed();
        }}
        onOpenChange={confirmDelete.toggle}
        isLoading={isPendingDelete}
      />

      <ConfirmLayout
        mensg={`Tem certeza que deseja ${
          activeState ? "ativar" : "desativar"
        } essa partida?`}
        open={confirmActive.isOpen}
        onCancel={confirmActive.closed}
        onConfirm={async () => {
          if (selectedMatchId && activeState !== null) {
            await mutateActive({
              id: selectedMatchId,
              data: { isActive: activeState },
            });
          }
          confirmActive.closed();
        }}
        onOpenChange={confirmActive.toggle}
        isLoading={isPendingActive}
      />
    </section>
  );
}
