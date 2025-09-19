import { Button } from "@/components/ui/button";
import { useUpdateStatusInvite } from "@/hooks/invites/updateStatus/updatestatus";
import { X, Check, View } from "lucide-react";

type Props = {
  status: "PENDING" | "ACCEPTED" | "REJECT";
  teamName: string;
  inviteId: string;
  isCaptain: boolean;
  nameRevceveid: string;
};

export function InvitesBox({
  status,
  teamName,
  inviteId,
  isCaptain,
  nameRevceveid,
}: Props) {
  const { mutate: mutateUpdate, isPending: isPendingUpdate } =
    useUpdateStatusInvite();

  const bgColor =
    status === "ACCEPTED"
      ? "bg-green-500"
      : status === "REJECT"
      ? "bg-red-800"
      : "bg-indigo-200"; // PENDING

  return (
    <div
      className={`flex justify-between items-center p-4 border rounded-xl ${bgColor}`}
    >
      <div className="flex items-center gap-10">
        <p className="text-heading-sm text-black uppercase">{teamName}</p>
      </div>

      {!isCaptain ? (
        <div className="flex gap-4 flex-col md:flex-row">
          <Button
            isLoading={isPendingUpdate}
            onClick={() =>
              mutateUpdate({ data: { status: "ACCEPTED" }, id: inviteId })
            }
          >
            <Check /> Aceitar
          </Button>

          <Button
            isLoading={isPendingUpdate}
            onClick={() =>
              mutateUpdate({ data: { status: "REJECT" }, id: inviteId })
            }
            variant="red"
          >
            <X /> Rejeitar
          </Button>

          <Button variant="secundary">
            <View /> Visualizar time
          </Button>
        </div>
      ) : (
        <div className="flex flex-col md:flex-row items-center gap-4">
          <span className="text-heading-sm text-black">{nameRevceveid}</span>
          <Button variant="secundary">
            <View /> Visualizar player
          </Button>
        </div>
      )}
    </div>
  );
}
