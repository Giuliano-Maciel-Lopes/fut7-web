import { Menu } from "../menu";
import { NavPages } from "../nav/navPages";
import { Logo } from "@/components/logo";

export function HeaderLogged() {
  return (
    <>
      <div className="md:hidden">
        <Menu />
      </div>

      <div className="hidden md:flex items-center gap-4">
        <Menu />
      </div>
      <NavPages className="hidden md:flex gap-20" />

      <Logo />
    </>
  );
}
