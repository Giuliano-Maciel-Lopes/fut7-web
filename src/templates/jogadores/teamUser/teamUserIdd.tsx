import { Campo } from "@/components/campo/campo";
import { NotfoundItems } from "@/components/notfound/nutfound";
import { GetTeamReturn } from "@/types/api/TEAM/get";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/router";
import { AsidePlayersTeam } from "@/templates/teamConfirmedPage/components/asidePlayers";
import { useTeamShowUserId } from "@/hooks/team/showIduserId/showUserId";

type Props = {
  dataSsr?: GetTeamReturn;
  isCaptain?: boolean;
};

export function TeamUserIdPage({dataSsr , isCaptain }: Props) {
  const router = useRouter();
  const {data:dataquery , } =  useTeamShowUserId()
  const data = dataquery ?? dataSsr

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
