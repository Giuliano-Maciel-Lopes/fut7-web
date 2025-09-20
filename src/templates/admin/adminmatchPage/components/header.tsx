import { Button } from "@/components/ui/button";
import { useRouter } from "next/router";

export function HeaderMatch() {
  const ButtonStatus = [
    { name: "Agendada", query: "SCHEDULED" }, // marcada mas ainda não começou
    { name: "Em andamento", query: "ONGOING" }, // em andamento
    { name: "Finalizada", query: "FINISHED" }, // terminou
  ];
  const BUTTON_STAGE = [
    { name: "Grupo", query: "GROUP" },
    { name: "Quartas", query: "QUARTAS" },
    { name: "Semi-final", query: "SEMI" },
    { name: "Final", query: "FINAL" },
  ];

  const router = useRouter();
  const queryStatus = router.query.status as
    | "SCHEDULED"
    | "ONGOING"
    | "FINISHED"
    | undefined;

  return (
    <header className=" flex flex-col gap-4">
      <h2 className="text-heading-md text-center">  PARTIDAS </h2>

      <div className="flex gap-2 border-2 w-full p-3 rounded-xl">
        {ButtonStatus.map((btn) => {
          const isActive =  btn.query === queryStatus 

          return (
            <Button
              key={btn.query}
              className={`border-2 hover:bg-blue-700 ${
                isActive ? "bg-blue-500 text-white" : ""
              }`}
              variant="transparent"
              onClick={() =>
                router.push({
                  pathname: router.pathname, // ou sua rota de matches
                  query: { status: btn.query },
                })
              }
            >
              {btn.name}
            </Button>
          );
        })}
      </div>
    </header>
  );
}
