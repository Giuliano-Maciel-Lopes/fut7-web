import { useAsideAuth } from "@/hooks/context/useAuthaside";
import { Button } from "@/components/ui/button";
import { User } from "lucide-react";
import { Logo } from "@/components/logo";
import { Menu } from "./menu";
import {NavPages } from "./nav/navPages";
import { UseAuth } from "@/hooks/context/useAuth";
import { useEffect } from "react";
useEffect;

export function Header() {
  const { loguin } = useAsideAuth();
  const { session } = UseAuth();
  const user = session?.token;

  return (
    <header className=" bg-blue-800 w-full text-md h-20 md:h-24 flex  items-center fixed z-50 border-b-2 border-gray-400">
      <div className="container flex items-center justify-between">
        <div className="md:hidden">
          <Menu />
        </div>

       
          <div className="md:hidden">
            <Logo />
          </div>

          {user ? (
            <div className="hidden md:flex border rounded-full border-blue-900">
              <Menu />
            </div>
          ) : (
            <div className="hidden md:block">
              <Logo />
            </div>
          )}
          
          <NavPages className="hidden md:flex gap-20" />
       

        <Button onClick={loguin.open} variant="default">
          <User /> login
        </Button>
      </div>
    </header>
  );
}
