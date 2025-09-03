import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

type Props = {
  mensg: string;
  onConfirm: () => void;
  onCancel: () => void;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  isLoading?: boolean;
};

export function ConfirmLayout({
  mensg,
  onConfirm,
  onCancel,
  onOpenChange,
  open,
  isLoading
}: Props) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="flex flex-col justify-center items-center min-h-[70vh] max-w-2xl mx-auto bg-aside rounded-2xl shadow-2xl p-8">
        <DialogHeader className="text-center mb-6">
          <DialogDescription className="text-blue-900 font-semibold text-xl md:text-2xl">
            {mensg}
          </DialogDescription>
        </DialogHeader>

        <div className="flex justify-center items-center gap-6 mt-8 w-full">
          <Button
            variant="default"
            className="w-36 h-14 text-blue-800 bg-white border border-blue-200 rounded-xl shadow hover:bg-blue-50 transition"
            onClick={onCancel}
          >
            Cancelar
          </Button>
          <Button
          isLoading={isLoading}
            variant="default"
            className="w-36 h-14 text-white bg-blue-700 rounded-xl shadow-lg hover:bg-blue-800 transition"
            onClick={onConfirm}
          >
            Confirmar
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
