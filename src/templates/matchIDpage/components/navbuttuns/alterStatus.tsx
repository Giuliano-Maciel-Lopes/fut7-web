import { DialogForm } from "@/components/dialogForm/dialogoform";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useUpdateStatusMatch } from "@/hooks/match/updatestatus/useupdatestatus";

type Props = {
  statusPrev: "SCHEDULED" | "ONGOING" | "FINISHED";
  id: string;
};

export function FormUpdateStatus({ statusPrev, id }: Props) {
  const { mutateAsync, isPending } = useUpdateStatusMatch();
  const [status, setStatus] = useState<"SCHEDULED" | "ONGOING" | "FINISHED">(
    statusPrev
  );

  return (
    <DialogForm
      onConfirm={async () => {
        await mutateAsync({ data: { status }, id });
      }}
      isPending={isPending}
      trigger={<Button variant="secundary">Alterar status</Button>}
      title="Escolha uma opção para alterar"
    >
      <div className="flex flex-col gap-2 mt-2">
        <label className="flex items-center gap-2">
          <input
            type="radio"
            name="status"
            value="SCHEDULED"
            checked={status === "SCHEDULED"}
            onChange={() => setStatus("SCHEDULED")}
          />
          Agendada
        </label>

        <label className="flex items-center gap-2">
          <input
            type="radio"
            name="status"
            value="ONGOING"
            checked={status === "ONGOING"}
            onChange={() => setStatus("ONGOING")}
          />
          Em andamento
        </label>

        <label className="flex items-center gap-2">
          <input
            type="radio"
            name="status"
            value="FINISHED"
            checked={status === "FINISHED"}
            onChange={() => setStatus("FINISHED")}
          />
          Finalizada
        </label>
      </div>
    </DialogForm>
  );
}
