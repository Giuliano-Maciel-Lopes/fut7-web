import { LatterPlayerpage } from "@/templates/letterPlayerPage";
import { fetchDataShowPlayerId } from "@/hooks/player/showId/showId";
import { PlayerShows } from "@/types/api/players/get";
import { DataPlayer } from "@/templates/letterPlayerPage/subpages3/dataPlayer";
import { GetServerSidePropsContext } from "next";
import { FetchDataFindByUser } from "@/hooks/player/findyByuser/findyByuser";

//ssr
type Props = {
  data: PlayerShows;
  isCaptain: boolean;
  teamIdCaptain: string
};

export default function PlayersId({ data, isCaptain , teamIdCaptain }: Props) {
  return (
    <div>
      <LatterPlayerpage data={data}>
        <DataPlayer isCaptain={isCaptain} data={data} teamIdCaptain={teamIdCaptain} />
      </LatterPlayerpage>
    </div>
  );
}
export async function getServerSideProps(
  ctx: { params: { id: string } } & GetServerSidePropsContext
) {
  const { id } = ctx.params;
  const token = ctx.req.cookies["token"];

  // Busca dados do jogador que está sendo visualizado
  const data = await fetchDataShowPlayerId(id, token);

  // Se não tiver token, retorna n tem time e nem e capitao
  if (!token) {
    return {
      props: { 
        data, 
        isCaptain: false, 
        teamIdCaptain: '' 
      },
    };
  }

  // Se tiver token, busca dados do usuário logado
  const dataLogged = await FetchDataFindByUser(token);

  // Verifica se é capitão e não é o próprio jogador sendo visualizado
  const isCaptain = dataLogged?.role === "CAPITAO" && dataLogged?.id !== data.id;
  const teamIdCaptain = dataLogged?.teamId || '';

  return {
    props: { 
      data, 
      isCaptain, 
      teamIdCaptain 
    },
  };
}

