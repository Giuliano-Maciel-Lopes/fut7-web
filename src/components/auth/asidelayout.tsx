import React from "react";
import { Dialog, DialogContent, DialogTitle } from "../ui/dialog";
import { Button } from "../ui/button";
import { Logo } from "../logo";

type Props = {
  children?: React.ReactNode;
  title: string;
  buttonText: string;
  toggleButton: () => void;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
};
export function LayoutAuth({
  children,
  title,
  buttonText,
  isOpen,
  onOpenChange,
  toggleButton,
}: Props) {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="bg-aside rounded-3xl md:w-[500px] w-[300px] max-h-[90vh] md:px-6 px-4 pt-4 flex flex-col border-2 border-white">
      
        <div className="flex flex-col items-center">
          <Logo />
          <DialogTitle className="text-heading-lg">{title}</DialogTitle>
        </div>

       
        <div className="flex-1 overflow-y-auto mt-4">
          {children}
        </div>

        
        <div className="mt-4">
          <Button className="w-full" size="lg" onClick={toggleButton}>
            {buttonText}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
