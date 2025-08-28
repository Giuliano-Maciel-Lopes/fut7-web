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

      <DialogContent className="bg-blue-100 rounded-3xl md:w-[500px] w-[300px] max-h-[90vh] md:px-6 px-4 pt-4">

        <div className="flex flex-col items-center ">
          <Logo />
          <DialogTitle className="text-heading-lg">{title}</DialogTitle>
        </div>

          
        <div className="mt-4 mb-">{children}</div>
        <Button size={"lg"} onClick={toggleButton}>{buttonText}</Button>

      </DialogContent>
    </Dialog>
  );
}
