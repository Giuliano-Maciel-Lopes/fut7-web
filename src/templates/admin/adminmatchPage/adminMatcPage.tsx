import { HeaderMatch } from "./components/header";
import { BoxMatch } from "./components/boxMatch";
import { useListMatch } from "@/hooks/match/list/liste";
import { useRouter } from "next/router";

export function AdminMatchPage() {
  const router = useRouter();
    const filters = {
    status: ["SCHEDULED", "ONGOING", "FINISHED"].includes(router.query.status as string)
      ? (router.query.status as "SCHEDULED" | "ONGOING" | "FINISHED")
      : undefined,
    stage: ["GROUP", "QUARTAS", "SEMI", "FINAL"].includes(router.query.stage as string)
      ? (router.query.stage as "GROUP" | "QUARTAS" | "SEMI" | "FINAL")
      : undefined,
    timeName: typeof router.query.timeName === "string" ? router.query.timeName : undefined,
  };

  const { data, isLoading } = useListMatch(filters);


  if (isLoading) return <p>Carregando partidas...</p>; // so apra teste
  if (!data || data.length === 0) return <p>Nenhuma partida encontrada.</p>;

  return (
    <section className="flex flex-col mt-10 container gap-4">
      <HeaderMatch />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((match) => (
          <BoxMatch key={match.id} data={match} />
        ))}
      </div>
    </section>
  );
}
