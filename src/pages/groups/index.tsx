import { GroupsPage } from "@/templates/groups/groupspage";
import { prefetchListGroups, FetchDataGroups } from "@/hooks/group/list/list";
import { verifyToken } from "@/utils/getToken";
import { GetServerSidePropsContext } from "next";
import { dehydrate, QueryClient } from "@tanstack/react-query";
import { PropsGroupPage } from "@/templates/groups/groupspage";

export default function Group({ dataSsr, isAdm }: PropsGroupPage) {
  return (
    <div>
      <GroupsPage dataSsr={dataSsr} isAdm={isAdm} />
    </div>
  );
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const token = ctx.req.cookies["token"];
  const user = await verifyToken(token);
  const queryclient = new QueryClient();
  const isAdm = user?.role === "ADMIN";

  const dataSsr = await FetchDataGroups(token);

  await prefetchListGroups(queryclient, token);

  return {
    props: {
      isAdm,
      dataSsr,
      dehydratedState: dehydrate(queryclient),
    },
  };
}
