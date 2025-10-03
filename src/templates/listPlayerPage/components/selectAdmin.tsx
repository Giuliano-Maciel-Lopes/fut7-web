import { Player } from "@shared/prisma";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { CopyIdButton } from "@/components/copieIdButton/copieIdButton";

type PlayerActionsPopoverProps = {
  pl: Player;
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function AdmAsideRoutes({
  pl,
  open,
  onOpenChange,
}: PlayerActionsPopoverProps) {
  return (
    <Popover open={open} onOpenChange={onOpenChange}>
      <PopoverTrigger asChild>
        <Button variant="transparent" className="p-2"></Button>
      </PopoverTrigger>

      <PopoverContent
        className="w-40 p-3 flex flex-col bg-white border shadow-lg rounded"
        side="top"
        align="center"
      >
        <div className=" flex flex-col gap-2">
          <Button asChild>
            <Link href={`/admin/player/${pl.id}`}>Editar Player</Link>
          </Button>
          <CopyIdButton id={pl.id} />
        </div>
      </PopoverContent>
    </Popover>
  );
}
