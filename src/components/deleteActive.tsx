import { Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";


type Props = {
  onDelete: () => void;
  setActive: (isactive: boolean) => void;
  isactive: boolean;
  Adm:boolean
};

export function DeleteActive({ onDelete, isactive, setActive , Adm }: Props) {

  return (
    <div>
      {Adm && (
        <div className={` flex justify-between`}>
          <Button onClick={onDelete} className="bg-red-600 rounded-full p-2">
            <Trash2 />
          </Button>

          <div className="h-6 w-6">
            <Input
              checked={isactive}
              onChange={(e) => setActive(e.target.checked)}
              type="checkbox"
            />
          </div>
        </div>
      )}
    </div>
  );
}
