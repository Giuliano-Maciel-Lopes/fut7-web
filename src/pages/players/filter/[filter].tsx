import { FetchaDataListPlayer, prefetchListPlayer } from "@/hooks/player/List/list";
import { ListPlayerPage, PropsListplayerpage } from "@/templates/listPlayerPage/listPlayerPage";
import { GetServerSidePropsContext } from "next";
import { verifyToken } from "@/utils/getToken";
import { dehydrate, QueryClient } from "@tanstack/react-query";
import {  parseFiltersServer } from "@/hooks/player/List/parsedParams";

export default function PlayerListFilter({ dataSsr, isAdm }: PropsListplayerpage) {
  return (
    <div>
      <ListPlayerPage dataSsr={dataSsr} isAdm={isAdm} />
    </div>
  );
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const token = ctx.req.cookies["token"];
  const user = await verifyToken(token);
  const isAdm = user?.role === "ADMIN";
  const queryClient = new QueryClient();
  const params = parseFiltersServer(ctx.query);

  // Busca dados no servidor para todos os usuários
  const dataSsr = await FetchaDataListPlayer(params);

  if (isAdm) {
    // Prefetch para React Query (hidratação)
    await prefetchListPlayer(queryClient, params, token);
  }

  return {
    props: {
      isAdm,
      dataSsr, // Dados SSR para todos
      dehydratedState: dehydrate(queryClient),
    },
  };
}