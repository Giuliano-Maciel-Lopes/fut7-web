import {
  PrefectMatchShowId,
  fetchShowMatch,
} from "@/hooks/match/showId/showId";
import { MatchIdPage } from "@/templates/matchIDpage/matchIDpage";
import { verifyToken } from "@/utils/getToken";
import { dehydrate, QueryClient } from "@tanstack/react-query";
import { GetServerSidePropsContext } from "next";
import { GetShowMatch } from "@/types/api/match/getshow";

type Props = {
  dataSsr: GetShowMatch;
  isAdm: boolean;
};

export default function MatchID({ dataSsr, isAdm }: Props) {
  return (
    <div>
      <MatchIdPage dataSsr={dataSsr} isAdm={isAdm} />
    </div>
  );
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const token = ctx.req.cookies["token"];
  const id = ctx.query.id as string; // tenho certeza que vai ter apenas 1 do paramtro o id
  const user = await verifyToken(token);
  const isAdm = user?.role === "ADMIN";
  const queryClient = new QueryClient();

  let dataSsr = null;

  if (isAdm) {
    await PrefectMatchShowId(queryClient, id);
  }

  if (!isAdm) {
    dataSsr = await fetchShowMatch(id);
  }

  return { props: { dataSsr, isAdm, dehydratedState: dehydrate(queryClient) } };
}
