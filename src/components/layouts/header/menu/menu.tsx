import { MenuLayout } from "./layout/menuLayout";
import { NavPages } from "../nav/navPages";
import { NavPlayers } from "../nav/navRest";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import { NavPublicMenu } from "../nav/navpagesPUblic";
import { useLogout } from "@/hooks/auth/session/uselogoout";

type Props={
 isPLayer:boolean
}

export function Menu({isPLayer}:Props) {
  const { mutate: logout, isPending } = useLogout();

  return (
    <aside>
      <MenuLayout>
        <nav className="flex flex-col gap-2 text-white  ">
          <div className="md:hidden ">
            <NavPages className="flex flex-col gap-2" />
          </div>

          <NavPublicMenu className="gap-2 flex flex-col" />

        {isPLayer&& (<NavPlayers  />)}  

          <Button isLoading={isPending} onClick={() => logout()}>
            {" "}
            <LogOut /> Sair
          </Button>
        </nav>
      </MenuLayout>
    </aside>
  );
}
