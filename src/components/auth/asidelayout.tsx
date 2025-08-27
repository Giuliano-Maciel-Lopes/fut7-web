import React from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogClose,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { User, X } from "lucide-react";
import { Logo } from "../logo";
import { Input } from "../ui/input";

type Props = {
  children?: React.ReactNode;
  title: string;
};

export function LayoutAuth({ children, title }: Props) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default">
          <User /> login
        </Button>
      </DialogTrigger>

      <DialogContent className="bg-blue-100 rounded-xl max-w-md w-[90%] p-6 ">
        <div className="flex flex-col items-center gap-3">
          <Logo />
          <DialogTitle className="text-heading-lg">{title}</DialogTitle>
        </div>

        <div className="mt-4">
          <Input legend="fildset" /> {children}
        </div>
      </DialogContent>
    </Dialog>
  );
}
