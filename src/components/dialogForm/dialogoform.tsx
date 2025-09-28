import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type Props = {
  title: string;
  trigger: React.ReactNode;
  onConfirm: () => Promise<void>;
  children: React.ReactNode;
  isPending?: boolean; // opcional, vem da mutation
};

export function DialogForm({ title, trigger, onConfirm, children, isPending }: Props) {
  const [open, setOpen] = useState(false);

const handleConfirm = async () => {
  try {
    await onConfirm(); 
    setOpen(false);    
  } catch (error) {
// aqui fica vazio pois o react query lida so coloquei try catch aqui pq o next reclama em dev 
  }
};


  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="bg-indigo-200">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <div>{children}</div>
        <div className="flex justify-end gap-2 mt-4">
          <DialogClose asChild>
            <Button variant="secundary">Cancelar</Button>
          </DialogClose>
          <Button onClick={handleConfirm} disabled={isPending}>
            Confirmar
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
