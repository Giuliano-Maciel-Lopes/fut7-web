import { MenuLayout } from "./layout/menuLayout";
import { NavPages } from "../nav/navPages";
import { NavRest } from "../nav/navRest";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import { UseAuth } from "@/hooks/context/useAuth";

export function Menu() {
  const { remove } = UseAuth();

  return (
    <aside>
      <MenuLayout>
        <nav className="flex flex-col gap-2 text-white  ">
          <div className="md:hidden ">
            <NavPages className="flex flex-col gap-2" />
          </div>

          <NavRest />

          <Button onClick={remove}>
            {" "}
            <LogOut /> Sair
          </Button>
        </nav>
      </MenuLayout>
    </aside>
  );
}
