import { LayoutAuth } from "@/components/auth";
import { Button } from "@/components/ui/button";
import { User } from "lucide-react";
import { Logo } from "@/components/logo";
import { MenuBar } from "./menu";
import { NavHeader } from "./nav/nav";

export function Header() {
  return (
    <header className=" bg-blue-800 w-full text-md h-20 md:h-24 flex  items-center fixed z-50 border-b-2 border-gray-400">
      <div className="container flex items-center justify-between">
        <MenuBar />

        <div className=" flex place-items-center gap-4">
          <Logo />

          <NavHeader className="hidden md:flex gap-20" />
        </div>

       <LayoutAuth title="teste">
        teste
       </LayoutAuth>
      </div>
    </header>
  );
}
