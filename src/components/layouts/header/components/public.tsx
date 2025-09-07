import { Menu } from "../menu";
import { NavPages } from "../nav/navPages";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { User } from "lucide-react";
type Props = {
  loguin: () => void;
};

export function HeaderPublic({ loguin }: Props) {
  return (
    <>
      <div className="md:hidden">
        <Menu />
      </div>

      <div className="md:hidden">
        <Logo />
      </div>

      <div className="hidden md:flex items-center gap-4">
        <div className="flex items-center gap-16">
          <Menu />
          <Logo />
          <NavPages className="hidden md:flex gap-20" />
        </div>
      </div>

      <Button onClick={loguin} variant="default">
        <User /> login
      </Button>
    </>
  );
}
