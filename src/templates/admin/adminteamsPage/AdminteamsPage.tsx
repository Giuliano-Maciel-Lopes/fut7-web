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
import { SearchInput } from "./components/search";
import Link from "next/link";
import { Plus } from "lucide-react";

export function AdminTeamsPage() {
  const router = useRouter();
  const searchQuery = router.query.search as string | undefined;
  const [search, setSearch] = useState(searchQuery || "");

  const del = useToggle();
  const update = useToggle();

  const { data, isLoading } = uselistTeam(
    searchQuery ? { search: searchQuery } : undefined
  );
  const { mutateAsync: mutatedel, isPending: isPendingdel } = useDeleteTeam();
  const { mutateAsync: mutateupd, isPending: isPendingUpdate } =
    useUpdateIsactiveTeam();
  const [storage, setStorage] = useState<string>("");
  const [storageActive, setStorageActive] = useState<boolean>();

  if (isLoading) return <Loading />;

  return (
    <section className="container mt-10">
      <SearchInput search={search} setSearch={setSearch} />

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <Link
          href="/admin/teams/create"
          className="flex items-center justify-center w-40 h-40 md:w-52 md:h-52 
                     border-2 border-dashed rounded-xl bg-blue-700 text-white
                     cursor-pointer transition-transform transform hover:scale-105"
        >
          <Plus size={48} strokeWidth={2.5} />
        </Link>

        {!data || data.length === 0 ? (
          <div className="col-span-full">
            <NotfoundItems msgNotfound="Nenhum time encontrado no momento, volte novamente mais tarde" />
          </div>
        ) : (
          data.map((t) => (
            <BoxTeams
              key={t.id}
              id={t.id}
              nameTeam={t.name}
              img={t.photoUrl}
              isActive={t.isActive}
              setActive={() => {
                setStorage(t.id);
                setStorageActive(t.isActive);
                update.open();
              }}
              onDelete={() => {
                setStorage(t.id);
                del.open();
              }}
              onClick={() => router.push(`/admin/teams/${t.id}`)}
            />
          ))
        )}
      </div>

      {/* so asides de confirmaçoes */}
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
          await mutateupd({ data: { isActive: !storageActive }, id: storage });
          update.closed();
        }}
        onOpenChange={update.toggle}
        open={update.isOpen}
        isLoading={isPendingUpdate}
      />
    </section>
  );
}
