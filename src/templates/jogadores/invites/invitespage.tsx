import { NotfoundItems } from "@/components/notfound/nutfound";
import { HeaderInvites } from "./components/header";
import { InvitesBox } from "./components/invitesbox";
import { useListInvites } from "@/hooks/invites/list/list";

type Props = {
  isCaptain: boolean;
};

export function InvitePages({ isCaptain }: Props) {
  const { data, isFetching } = useListInvites();

  return (
    <section className="container mt-10">
      <HeaderInvites IsCaptain={isCaptain} isFetching={isFetching} />
      
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
