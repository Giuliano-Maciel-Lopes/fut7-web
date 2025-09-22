import { PrefetchMatch } from "@/hooks/match/list/list";
import { ParamsMatch } from "@/schemazod/match/paramsList";
import { MatchPage } from "@/templates/MatchPage/MatcPage";
import { QueryClient, dehydrate } from "@tanstack/react-query";
import { verifyToken } from "@/utils/getToken";
import { GetServerSidePropsContext } from "next";
import { parseFiltersMatch } from "@/hooks/match/list/parsedFilter";
// praa usuarios so ssr para admin ssr junto com react query
type Props = {
  isAdm: boolean;
};

export default function Match({ isAdm}: Props) {
  return (
    <div>
      <MatchPage isAdm={isAdm} />
    </div>
  );
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const token = ctx.req.cookies["token"];
  const queryClient = new QueryClient();

  const filters = parseFiltersMatch(ctx.query); 

  const user = await verifyToken(token);
  const userId = user?.userId
   const isAdm = user?.role === "ADMIN";

  await PrefetchMatch(queryClient , filters ,userId );

  

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      isAdm,
    },
  };
}
