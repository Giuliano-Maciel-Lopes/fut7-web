import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/router";
import { useState } from "react";
import { Search } from "lucide-react";

type SearchProps = {
  search: string;
  setSearch: (value: string) => void;
};

export function SearchInput({ search, setSearch }: SearchProps) {
  const router = useRouter();
  const [inputValue, setInputValue] = useState(search);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const trimmed = inputValue.trim();
    if (!trimmed) return;

    setSearch(trimmed); // atualiza o estado no AdminTeamsPage

    router.push(
      { pathname: router.pathname, query: { search: trimmed } },
      undefined
    );
  }

  return (
    <form onSubmit={onSubmit} className="flex mb-6 w-full max-w-xl ">
      <Input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Buscar time..."
        className="w-full md:min-w-96 bg-white rounded-r-none"
      />
      <Button type="submit" className="rounded-none h-10 ">
        <Search />
      </Button>
    </form>
  );
}
