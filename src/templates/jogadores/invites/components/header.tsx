import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/router";

type Props = {
  isFetching: boolean;
  IsCaptain: boolean;
};

export function HeaderInvites({ isFetching, IsCaptain }: Props) {
  const buttons = [
    { name: "Aceitos", query: "ACCEPTED" },
    { name: "Recusados", query: "REJECT" },
    { name: "Pendentes", query: "PENDING" },
  ];
  const router = useRouter();
  const queryStatus = router.query.status as
    | "PENDING"
    | "ACCEPTED"
    | "REJECT"
    | undefined;

  return (
    <header className="flex flex-col items-center gap-2 mb-5">
      {isFetching && (
        <span className="ml-2 text-sm text-white">Atualizando...</span>
      )}

      <h1 className="text-center text-heading-xl flex items-center gap-2">
        <Mail /> CAIXA DE ENTRADA
      </h1>
      
      {IsCaptain && (
        <div className="flex gap-2">
          {buttons.map((btn) => {
            const isActive =
              btn.query === queryStatus ||
              (!queryStatus && btn.query === "PENDING");
            return (
              <Button
                key={btn.query}
                className={`border-2 hover:bg-blue-700 ${
                  isActive ? "bg-blue-500 text-white" : ""
                }`}
                variant="transparent"
                onClick={() =>
                  router.push({
                    pathname: "/player/invite",
                    query: { status: btn.query },
                  })
                }
              >
                {btn.name}
              </Button>
            );
          })}
        </div>
      )}
    </header>
  );
}
