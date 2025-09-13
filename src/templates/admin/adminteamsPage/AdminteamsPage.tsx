import { uselistTeam } from "@/hooks/team/list/list";
import { BoxTeams } from "./components/boxTeams";
import { Loading } from "@/components/loading/loading";
import { NotfoundItems } from "@/components/notfound/nutfound";
import { useRouter } from "next/router";

export function AdminTeamsPage() {
  const router = useRouter();
  const { data, isLoading } = uselistTeam();

  if (isLoading) return <Loading />;
  if (!data || data.length === 0)
    return (
      <NotfoundItems msgNotfound="nenhum time encontrado no momento volte novamente mais tarde" />
    );
  return (
    <section className="container mt-10">
      <div className="grid grid-cols-2  ">
        {data.map((t) => (
          <BoxTeams
            key={t.id}
            onClick={() => router.push(`/admin/teams/${t.id}`)}
            nameTeam={t.name}
            img={t.photoUrl}
          />
        ))}
      </div>
    </section>
  );
}
