import { LatterPlayerpage } from "@/templates/letterPlayerPage";
import { fetchDataShowPlayerId } from "@/hooks/player/showId/showId";
import { PlayerShows } from "@/types/api/players/get";
import { DataPlayer } from "@/templates/letterPlayerPage/subpages3/dataPlayer";
import { GetServerSidePropsContext } from "next";
import { api } from "@/services/axios";
import { API_ROUTES } from "@/utils/routes";
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

  const data = await fetchDataShowPlayerId(id);

  const res = await api.get<PlayerShows>(`${API_ROUTES.PLAYERS}/me`, {
     headers: {
      Cookie: `token=${token}`, 
    },
  });
  const dataLogged = res.data;

  const isCaptain = dataLogged.role === "CAPITAO";
  const teamIdCaptain = dataLogged.teamId

  return {
    props: { data, isCaptain , teamIdCaptain },
  };
}

