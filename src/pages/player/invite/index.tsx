import {
  prefetchInvites,
} from "@/hooks/invites/list/list";
import { InvitePages } from "@/templates/jogadores/invites/invitespage";
import { QueryClient, dehydrate } from "@tanstack/react-query";
import { GetServerSidePropsContext } from "next";
import { verifyToken } from "@/utils/getToken";


export default function Invite() {
  return (
    <div>
      <InvitePages  />
    </div>
  );
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const token = ctx.req.cookies["token"];
  const user  = await verifyToken(token)

  const queryClient = new QueryClient();

   await prefetchInvites(queryClient, user?.userId ,  token);
 

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
