import { fetchDataListMatch, PrefetchMatch } from "@/hooks/match/list/list";
import { MatchPage } from "@/templates/MatchPage/MatcPage";
import { QueryClient, dehydrate } from "@tanstack/react-query";
import { verifyToken } from "@/utils/getToken";
import { GetServerSidePropsContext } from "next";
import { parseFiltersMatch } from "@/hooks/match/list/parsedFilter";
import { ListMatches } from "@/types/api/match/getList";
// praa usuarios so ssr para admin ssr junto com react query
type Props = {
  isAdm: boolean;
  dataSSR: ListMatches;
};

export default function Match({ isAdm, dataSSR }: Props) {
  return (
    <div>
      <MatchPage isAdm={isAdm} dataSsr={dataSSR} />
    </div>
  );
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const token = ctx.req.cookies["token"];
  const queryClient = new QueryClient();

  const filters = parseFiltersMatch(ctx.query);

  const user = await verifyToken(token);
  const isAdm = user?.role === "ADMIN";

  if (isAdm) {
    await PrefetchMatch(queryClient, filters , token);
  }

  let dataSSR = null;
  if (!isAdm ) {
    dataSSR = await fetchDataListMatch({ filters , token });
  }

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      isAdm,
      dataSSR,
    },
  };
}
