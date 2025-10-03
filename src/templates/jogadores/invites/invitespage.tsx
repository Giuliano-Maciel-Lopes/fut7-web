import { NotfoundItems } from "@/components/notfound/nutfound";
import { HeaderInvites } from "./components/header";
import { InvitesBox } from "./components/invitesbox";
import { useListInvites } from "@/hooks/invites/list/list";
import { InvitesList } from "@/types/api/invites/getInvites";
import { useRouter } from "next/router";

type Props = {
  isCaptain: boolean;
  dataSsr:InvitesList
};
  
export function InvitePages({ isCaptain, dataSsr }: Props) {
  const router = useRouter()
const status =
  (router.query.status as "PENDING" | "ACCEPTED" | "REJECT") ?? "PENDING";

    
  const { data } = useListInvites({status});

  return (
    <section className="container my-10">
      <HeaderInvites IsCaptain={isCaptain} />

      {!data || data.length === 0 ? (
        <NotfoundItems msgNotfound="Você ainda não tem nenhum pedido na sua caixa de entrada" />
      ) : (
        <div className="flex flex-col gap-2">
          {data.map((i) => (
            <InvitesBox
              isCaptain={isCaptain}
              nameRevceveid={i.receiver.nameCart}
              key={i.id}
              inviteId={i.id}
              status={i.status}
              teamName={i.team.name}
            />
          ))}
        </div>
      )}
    </section>
  );
}

