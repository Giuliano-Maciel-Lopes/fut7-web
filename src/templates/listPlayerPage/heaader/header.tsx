import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PlayerNav } from "./nav";
import { useRouter } from "next/router";

type Props = {
  search?: string;
  setSearch: (value: string) => void;
};

export function HeaderlistPlayerPage({ search, setSearch }: Props) {
  const router = useRouter();
  const [inputValue, setInputValue] = useState(search || "");

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const trimmed = inputValue?.trim();
    if (!trimmed) return;

    router.push({
      pathname: "/players/search",
      query: { search: trimmed },
    });

    setSearch(trimmed);
  }

  return (
    <div>
      <header className="bg-blue-800 text-white rounded-md p-6 flex flex-col md:flex-row gap-4 md:items-center md:gap-16">
        <div className="flex flex-col gap-4 md:w-1/2">
          <h2 className="text-lg md:text-xl font-semibold hidden md:block">
            Procure por um jogador específico
          </h2>

          <form onSubmit={onSubmit} className="w-full max-w-xl flex">
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="w-full md:min-w-96 bg-white rounded-r-none"
              placeholder="buscar jogador..."
            />
            <Button type="submit" className="rounded-none h-10">
              <Search />
            </Button>
          </form>
        </div>

        <div className="md:w-1/2">
          <PlayerNav />
        </div>
      </header>
    </div>
  );
}
