import { prefetchInvites } from "@/hooks/invites/list/list";
import { InvitePages } from "@/templates/jogadores/invites/invitespage";
import { QueryClient, dehydrate } from "@tanstack/react-query";
import { GetServerSidePropsContext } from "next";
import { verifyToken } from "@/utils/getToken";
import { FetchDataFindByUser } from "@/hooks/player/findyByuser/findyByuser";
type Props = {
  isCaptain: boolean;
};

export default function Invite({ isCaptain }: Props) {
  return (
    <div>
      <InvitePages isCaptain={isCaptain} />
    </div>
  );
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const token = ctx.req.cookies["token"];
  const user = await verifyToken(token);

  const queryClient = new QueryClient();

  await prefetchInvites(queryClient, user?.userId, token); // reftch ssr com react query
  const data = await FetchDataFindByUser(token);

const isCaptain = data.team?.captain?.userId === user?.userId

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      isCaptain
    },
  };
}
