import { useRouter } from "next/router";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { FormUpdateStatus } from "./alterStatus";

type Props = {
  IsAdm: boolean;
  id: string;
  status: "SCHEDULED" | "ONGOING" | "FINISHED";
};

export function NavButton({ IsAdm, id, status }: Props) {
  const router = useRouter();
  return (
    <div className="flex justify-between">
      <Button
        onClick={() => router.push("/match")}
        variant="transparent"
        className="w-fit flex items-center gap-2"
      >
        <ArrowLeft /> Voltar
        
      </Button>
      <div className="flex gap-2  items-center justify-center">
        <h4>{status}</h4>
        {IsAdm && <FormUpdateStatus id={id} statusPrev={status}/>}
      </div>

      {IsAdm && (
        <Button
          onClick={() => router.push(`/admin/matchevent/${id}`)}
          variant="secundary"
          className="w-fit flex items-center gap-2"
        >
          criar evento
        </Button>
      )}
    </div>
  );
}
