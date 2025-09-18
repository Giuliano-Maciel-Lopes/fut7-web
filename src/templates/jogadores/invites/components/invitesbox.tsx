import { Button } from "@/components/ui/button";
import { useDeleteInvite } from "@/hooks/invites/updatestatus/updatestatus";
import TeamId from "@/pages/player/team/[id]";
import { X, Check, View } from "lucide-react";


type Props = {
  status:"PENDING" | "ACCEPTED", 
  teamName: string;
  inviteId:string
};

export function InvitesBox({ status, teamName , inviteId }: Props) {
   const {mutate , isPending} =  useDeleteInvite()
  const bgColor =
    status === "ACCEPTED"
      ? "bg-green-500"
      : "bg-indigo-200"; // PENDING ou outro status

  return (
      <div className={`flex justify-between items-center p-4 border rounded-xl ${bgColor}`}>
      <div className=" flex items-center justify-center gap-10">
        <p className="text-heading-sm text-black uppercase">{teamName}</p>
      </div>

      <div className=" flex gap-4 flex-col md:flex-row">
        <Button>
          <Check /> aceitar
        </Button>
        <Button isLoading={isPending} onClick={()=> mutate(inviteId)} variant={"red"}>
          <X />
          Cancelar
        </Button>
        <Button variant={"secundary"}>
          <View />
          vizualizar time
        </Button>
      </div>
    </div>
  );
}
