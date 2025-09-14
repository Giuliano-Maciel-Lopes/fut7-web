import { uselistTeam } from "@/hooks/team/list/list";
import { BoxTeams } from "./components/boxTeams";
import { Loading } from "@/components/loading/loading";
import { NotfoundItems } from "@/components/notfound/nutfound";
import { useRouter } from "next/router";
import { useDeleteTeam } from "@/hooks/team/delete/delete";
import { useUpdateIsactiveTeam } from "@/hooks/team/updateisactive/Updateosactive";
import { useToggle } from "@/hooks/usetoggle";
import { ConfirmLayout } from "@/components/confirmLogout";
import { useState } from "react";

export function AdminTeamsPage() {
  const del = useToggle();
  const update = useToggle();
  const router = useRouter();
  const { data, isLoading } = uselistTeam();
  const { mutateAsync: mutatedel, isPending: isPendingdel } = useDeleteTeam();
  const { mutateAsync:mutateupd ,  isPending: isPendingUpdate } = useUpdateIsactiveTeam();
  const [storage, setStorage] = useState<string>("");
  const [storageActive , setStorageActive] = useState<boolean>()

  if (isLoading) return <Loading />;
  if (!data || data.length === 0)
    return (
      <NotfoundItems msgNotfound="nenhum time encontrado no momento volte novamente mais tarde" />
    );
  return (
    <section className="container mt-10">
      <div className="grid grid-cols-2 md:grid-cols-3  lg:grid-cols-4">
        {data.map((t) => (
          <BoxTeams
            isActive={t.isActive}
            setActive={()=>{
              setStorage(t.id)
              setStorageActive(t.isActive)
              update.open()
            }}
            onDelete={() => {
              setStorage(t.id);
              del.open();
            }}
            key={t.id}
            onClick={() => router.push(`/admin/teams/${t.id}`)}
            nameTeam={t.name}
            img={t.photoUrl}
          />
        ))}
      </div>
      <ConfirmLayout
        mensg="Deseja realmente excluir este time? Essa ação não poderá ser desfeita. "
        onCancel={del.closed}
        onConfirm={async () => {
          await mutatedel(storage);
          del.closed();
        }}
        onOpenChange={del.toggle}
        open={del.isOpen}
        isLoading={isPendingdel}
      />
       <ConfirmLayout
        mensg="Deseja realmente mudar o status desse este time? "
        onCancel={update.closed}
        onConfirm={async () => {
          await mutateupd({data:{isActive:!storageActive} ,  id:storage});
          update.closed();
        }}
        onOpenChange={update.toggle}
        open={update.isOpen}
        isLoading={isPendingUpdate}
      />
    </section>
  );
}
