import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerTitle,
  DrawerClose,
} from "@/components/ui/drawer";
import { Trophy, Award, Star, Filter } from "lucide-react";

export type FilterType =   "goals" | "assists" | "participatory"|"searchName";

type NavItem = {
  label: string;
  icon: React.ReactNode;
  query: FilterType;
};

type Props = {
  onSelectFilter: (filter: FilterType) => void;
};

// Navegação
const navItems: NavItem[] = [
  { label: "Top 50", icon: <Trophy />, query: "participatory" },
  { label: "Artilharia", icon: <Award />, query: "goals" },
  { label: "Assistência", icon: <Star />, query: "assists" },
];

export function PlayerNav({ onSelectFilter }: Props) {
  const [open, setOpen] = useState(false);

  const handleSelect = (filter: FilterType) => {
    onSelectFilter(filter);
    setOpen(false);
  };

  return (
    <>
      {/* Botão mobile  abrir o aside*/}
      <div className="md:hidden mb-4">
        <Button
          onClick={() => setOpen(true)}
          variant='secundary'
          className="border-2 rounded-lg bg-blue-950 flex items-center gap-2"
        >
          <Filter />
          Filtrar
        </Button>
      </div>

      
      <nav className="hidden md:flex gap-4">
        {navItems.map((item) => (
          <Button
            key={item.label}
            variant="secundary"
            className="flex items-center gap-2"
            onClick={() => handleSelect(item.query)}
          >
            {item.icon}
            {item.label}
          </Button>
        ))}
      </nav>

      {/* aside mobile */}
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerContent className="h-1/2 w-full md:w-96 bg-aside text-white p-6 flex flex-col">
          <DrawerTitle>Filtros de Jogadores</DrawerTitle>
          <DrawerClose asChild>
            <Button variant="secundary" className="absolute top-2 right-2">
              Fechar
            </Button>
          </DrawerClose>

          <div className="flex flex-col gap-4 mt-4">
            {navItems.map((item) => (
              <Button
                key={item.label}
                variant="secundary"
                className="flex items-center gap-2"
                onClick={() => handleSelect(item.query)}
              >
                {item.icon}
                {item.label}
              </Button>
            ))}
          </div>
        </DrawerContent>
      </Drawer>
    </>
  );
}
