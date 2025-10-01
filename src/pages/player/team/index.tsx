import { TeamConfirmedPage } from "@/templates/teamConfirmedPage/teamConfirmedPage";
import { GetTeamReturn } from "@/types/api/TEAM/get";
import { GetServerSidePropsContext } from "next";
import { verifyToken } from "@/utils/getToken";
import { api } from "@/services/axios";
import { API_ROUTES } from "@/utils/routes";
import { TeamUserIdPage } from "@/templates/jogadores/teamUser/teamUserIdd";

type Props = {
  data: GetTeamReturn;
  isCaptain?: boolean;
};

export default function Team({ data, isCaptain }: Props) {
  return (
    <div>
      <TeamUserIdPage data={data} isCaptain={isCaptain} />
    </div>
  );
}
export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const token = ctx.req.cookies["token"];
  const user = await verifyToken(token);

  const res = await api.get<GetTeamReturn>(`${API_ROUTES.TEAMS}/me`, {
    headers: {
      Cookie: `token=${token}`,
    },
  });

  const data = res.data;

    const isCaptain = data.captain ? data.captain.userId === user?.userId : false;

  return { props: { data, isCaptain } };
}
