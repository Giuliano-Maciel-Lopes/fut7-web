import { MenuLayout } from "./layout/menuLayout";
import { NavPages } from "../nav/navPages";
import { NavPlayers } from "../nav/navRest";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import { NavPublicMenu } from "../nav/navpagesPUblic";
import { useLogout } from "@/hooks/auth/session/uselogoout";
import { UseAuth } from "@/hooks/context/useAuth";


type Props={

}

export function Menu() {
  const { mutate: logout, isPending } = useLogout();
  const {session} = UseAuth()
  const isPLayer = session?.datauser.role === "PLAYER"
  const name = session?.datauser.name

  return (
    <aside>
      <MenuLayout name={name}>
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
