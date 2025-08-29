import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerTrigger,
  DrawerTitle,
  DrawerContent,
  DrawerClose,
} from "@/components/ui/drawer";
import { Menu } from "lucide-react";
import { X } from "lucide-react";
import React from "react";
type Props ={
  children?:React.ReactNode
}

export function MenuLayout({children}:Props) {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="transparent" className="">
          <Menu className="w-6 h-6 text-white" />
        </Button>
      </DrawerTrigger>

      <DrawerContent className="h-full w-full md:w-96 bg-blue-600 text-white p-6 flex flex-col">
        <div className="flex items-center justify-between mb-6">
          <DrawerTitle className="text-2xl font-bold tracking-tight">
            Menu
          </DrawerTitle>

          <DrawerClose asChild>
            <Button variant="transparent" className="">
              <X className="w-5 h-5" />
            </Button>
          </DrawerClose>
        </div>

        <nav >
          
          {children}
        </nav>
       

        <div className="mt-auto pt-6 border-t border-white/20 text-sm text-white/70">
          © 2025 Fut7. Todos os direitos reservados.
        </div>
      </DrawerContent>
    </Drawer>
  );
}
