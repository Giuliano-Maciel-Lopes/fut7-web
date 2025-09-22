// HeaderMatch.tsx
import { Button } from "@/components/ui/button";
import { useRouter } from "next/router";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ButtonStatus, BUTTON_STAGE } from "../utils/buttonQuerys";


export function HeaderMatch() {
  const router = useRouter();
  const { status, stage } = router.query;

  const handleQuery = (key: string, value?: string) => {
    const newQuery = { ...router.query };

    if (value) {
      newQuery[key] = value;
    } else {
      delete newQuery[key]; // remove de verdade da URL
    }

    router.push({
      pathname: router.pathname,
      query: newQuery,
    });
  };

  return (
    <header className="flex flex-col gap-4">
      <h2 className="text-heading-md text-center">PARTIDAS</h2>
     

      <div className="flex gap-2 border-2 w-full p-3 rounded-xl">
        {ButtonStatus.map((btn) => (
          <Button
            key={btn.query}
            className={`border-2 hover:bg-blue-700 ${
              btn.query === status ? "bg-blue-500 text-white" : ""
            }`}
            variant="transparent"
            onClick={() =>
              handleQuery(
                "status",
                btn.query === status ? undefined : btn.query
              )
            }
          >
            {btn.name}
          </Button>
        ))}

        <Select
          value={stage as string | undefined}
          onValueChange={(value) => handleQuery("stage", value)}
        >
          <SelectTrigger
            className={`w-[180px] rounded-xl ${
              stage ? "bg-blue-500 text-white" : "bg-white text-black"
            }`}
          >
            <SelectValue placeholder="Fases " />
          </SelectTrigger>
          <SelectContent className="bg-white flex gap-2">
            <SelectItem
              value={undefined as unknown as string}
              onSelect={() => handleQuery("stage", undefined)}
            >
              Todas
            </SelectItem>

            {BUTTON_STAGE.map((sel) => (
              <SelectItem key={sel.query} value={sel.query}>
                {sel.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </header>
  );
}
