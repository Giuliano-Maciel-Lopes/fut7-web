import { Menu } from "../menu";
import { NavPages } from "../nav/navPages";
import { Logo } from "@/components/logo";

type Props ={
  isPlayer:boolean
}

export function HeaderLogged({isPlayer}:Props) {
  return (
    <>
      <div className="md:hidden">
        <Menu  isPLayer={isPlayer}/>
      </div>

      <div className="hidden md:flex items-center gap-4">
        <Menu  isPLayer={isPlayer}/>
      </div>
      <NavPages className="hidden md:flex gap-20" />

      <Logo />
    </>
  );
}
