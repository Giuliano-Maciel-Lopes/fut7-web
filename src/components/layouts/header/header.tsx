import { ActiveLink } from "../../acticve-link/activelink";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { User } from "lucide-react";
import { Logo } from "@/components/logo";

export function Header() {
  return (
    <header className=" bg-blue-800 w-full text-md h-20 md:h-24 flex  items-center fixed z-50 border-b-2 border-gray-400">
      <div className="container flex items-center justify-between">
        <Button variant={"transparent"} className="md:hidden">
          <Menu />
        </Button>

        <div className=" flex place-items-center gap-4">
          <Logo />

          <nav className="hidden md:flex gap-20">
            <ActiveLink href={"/"}>Início</ActiveLink>
            <ActiveLink href={"/"}>Times confirmados</ActiveLink>
            <ActiveLink href={""}>classificaçao</ActiveLink>
            <ActiveLink href={"/"}>Inscriçao</ActiveLink>
            <ActiveLink href={"/"}>contato</ActiveLink>
          </nav>
        </div>

        <Button variant={"default"}>
          <User /> loguin
        </Button>
      </div>
    </header>
  );
}
