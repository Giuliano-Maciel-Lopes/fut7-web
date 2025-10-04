import { dehydrate } from "@tanstack/react-query";
import { GetTeamReturn } from "@/types/api/TEAM/get";
import { GetServerSidePropsContext } from "next";
import { verifyToken } from "@/utils/getToken";
import {
  fetchDataTeamUserId,
  PrefetchQueryTeamUserId,
} from "@/hooks/team/showIduserId/showUserId";
import { TeamUserIdPage } from "@/templates/jogadores/teamUser/teamUserIdd";
import { QueryClient } from "@tanstack/react-query";

type Props = {
  dataSsr: GetTeamReturn;
  isCaptain?: boolean;
};

export default function Team({ dataSsr, isCaptain }: Props) {
  return (
    <div>
      <TeamUserIdPage dataSsr={dataSsr} isCaptain={isCaptain} />
    </div>
  );
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const token = ctx.req.cookies["token"];
  const user = await verifyToken(token);
  const queryClient = new QueryClient();

  // Prefetch para hidratação
  await PrefetchQueryTeamUserId(queryClient, token);
  // Tenta pegar do cache do queryClient
  let dataSsr = queryClient.getQueryData<GetTeamReturn>(["teamUser"]);

 

const isCaptain = dataSsr?.captain?.userId === user?.userId;

  return {
    props: {
      dataSsr,
      isCaptain,
      dehydratedState: dehydrate(queryClient),
    },
  };
}
