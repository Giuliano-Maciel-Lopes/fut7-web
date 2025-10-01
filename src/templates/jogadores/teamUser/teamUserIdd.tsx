import { Campo } from "@/components/campo/campo";
import { NotfoundItems } from "@/components/notfound/nutfound";
import { GetTeamReturn } from "@/types/api/TEAM/get";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/router";
import { AsidePlayersTeam } from "@/templates/teamConfirmedPage/components/asidePlayers";

type Props = {
  data?: GetTeamReturn;
  isCaptain?: boolean;
};

export function TeamUserIdPage({ data, isCaptain }: Props) {
  const router = useRouter();

  if (!data)
    return (
      <NotfoundItems msgNotfound="Nenhum time encontrado no momento, volte mais tarde" />
    );

  return (
    <section className="flex flex-col container gap-6 pt-10 pb-28">
      <div className="flex items-center gap-4">
        <AsidePlayersTeam data={data} isCaptain={!!isCaptain} />

        {isCaptain && (
          <div className="flex gap-2">
            <Button onClick={() => router.push("/player/team/training")}>
              Editar Formação
            </Button>
            <Button onClick={() => router.push(`/player/team/${data.id}`)}>
              Editar Time
            </Button>
          </div>
        )}
      </div>

      <Campo data={data} />
    </section>
  );
}
