import { LatterPlayerpage } from "@/templates/letterPlayerPage";
import { fetchDataShowPlayerId } from "@/hooks/player/showId/showId";
import { PlayerShows } from "@/types/api/players/get";
import { DataPlayer } from "@/templates/letterPlayerPage/components/dataPlayer";
import { verifyToken } from "@/utils/getToken";
import { GetServerSidePropsContext } from "next";
import { FetchDataFIndByUser } from "@/hooks/player/findyByuser/findyByuser";
import { api } from "@/services/axios";
import { API_ROUTES } from "@/utils/routes";
//ssr
type Props = {
  data: PlayerShows;
  isCaptain: boolean;
};

export default function PlayersId({ data, isCaptain }: Props) {
  return (
    <div>
      <LatterPlayerpage data={data}>
        <DataPlayer isCaptain={isCaptain} data={data} />
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

  return {
    props: { data, isCaptain },
  };
}

