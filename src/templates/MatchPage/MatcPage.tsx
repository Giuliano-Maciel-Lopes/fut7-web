import { HeaderMatch } from "./components/header";
import { BoxMatch } from "./components/boxMatch";
import { useListMatch } from "@/hooks/match/list/list";
import { NotfoundItems } from "@/components/notfound/nutfound";
import { Loading } from "@/components/loading/loading";
import { ListMatches } from "@/types/api/match/getList";
import { ParamsMatch } from "@/schemazod/match/paramsList";
import { parseFiltersMatch } from "@/hooks/match/list/parsedFilter";
import { useRouter } from "next/router";

type Props = {
  isAdm: boolean;
};

export function MatchPage({ isAdm }: Props) {
  
  const router = useRouter();
  const filters = parseFiltersMatch(router.query);

  const { data, isFetching } = useListMatch({ filters });

  return (
    <section className="flex flex-col mt-10 container gap-4">
      <HeaderMatch isFetching={isFetching} />

      {!data || data.length === 0 ? (
        <NotfoundItems msgNotfound="nenhuma partida encontrada" />
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.map((match) => (
            <BoxMatch key={match.id} data={match} />
          ))}
        </div>
      )}
    </section>
  );
}
