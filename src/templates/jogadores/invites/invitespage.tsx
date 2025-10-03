import { NotfoundItems } from "@/components/notfound/nutfound";
import { HeaderInvites } from "./components/header";
import { InvitesBox } from "./components/invitesbox";
import { useListInvites } from "@/hooks/invites/list/list";
import { InvitesList } from "@/types/api/invites/getInvites";

type Props = {
  isCaptain: boolean;
  dataSsr:InvitesList
};

export function InvitePages({ isCaptain  , dataSsr}: Props) {
  const { data:dataquery,  } = useListInvites();
  const data = dataquery ? dataquery : dataSsr

  return (
    <section className="container mt-10">
      <HeaderInvites IsCaptain={isCaptain}  />
      
      {!data || data.length === 0 ? (
        <NotfoundItems msgNotfound="Você ainda não tem nenhum pedido na sua caixa de entrada" />
      ) : (
        data.map((i) => (
          <InvitesBox
            isCaptain={isCaptain}
            nameRevceveid={i.receiver.nameCart}
            key={i.id}
            inviteId={i.id}
            status={i.status}
            teamName={i.team.name}
          />
        ))
      )}
    </section>
  );
}
