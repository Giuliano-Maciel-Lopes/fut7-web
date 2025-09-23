import { MenuLayout } from "./layout/menuLayout";
import { NavPages } from "../nav/navPages";
import { NavRest } from "../nav/navRest";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import { UseAuth } from "@/hooks/context/useAuth";
import { NavPublicMenu } from "../nav/navpagesPUblic";
import { useLogout } from "@/hooks/auth/session/uselogoout";


export function Menu() {
   const { mutate: logout, isPending } = useLogout();

  return (
    <aside>
      <MenuLayout>
        <nav className="flex flex-col gap-2 text-white  ">
          <div className="md:hidden ">
            <NavPages className="flex flex-col gap-2" />
          </div>
          
          <NavPublicMenu/>
          <NavRest />

          <Button isLoading={isPending} onClick={() => logout()}>
            {" "}
            <LogOut /> Sair
          </Button>
        </nav>
      </MenuLayout>
    </aside>
  );
}
