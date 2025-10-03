import { prefetchInvites ,fetchDataListInvites } from "@/hooks/invites/list/list";
import { InvitePages } from "@/templates/jogadores/invites/invitespage";
import { QueryClient, dehydrate } from "@tanstack/react-query";
import { GetServerSidePropsContext } from "next";
import { verifyToken } from "@/utils/getToken";
import { FetchDataFindByUser } from "@/hooks/player/findyByuser/findyByuser";
import { InvitesList } from "@/types/api/invites/getInvites";
type Props = {
  isCaptain: boolean;
  dataSsr:InvitesList
   status?: "PENDING" | "ACCEPTED" | "REJECT";
};

export default function Invite({ isCaptain , dataSsr }: Props) {
  return (
    <div>
      <InvitePages  dataSsr={dataSsr} isCaptain={isCaptain} />
    </div>
  );
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const token = ctx.req.cookies["token"];
  const user = await verifyToken(token);
  const queryClient = new QueryClient();

  const data= await FetchDataFindByUser(token); // busco player logado

  const isCaptain = data.team?.captain?.userId === user?.userId;
const status = (ctx.query.status as "PENDING" | "ACCEPTED" | "REJECT") ?? "PENDING";


  await prefetchInvites(queryClient, { token , status}) ;

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      isCaptain,
      
    },
  };
}
