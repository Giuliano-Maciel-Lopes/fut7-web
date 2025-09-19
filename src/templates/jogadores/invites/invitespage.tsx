import { NotfoundItems } from "@/components/notfound/nutfound";
import { Mail } from "lucide-react";
import { InvitesBox } from "./components/invitesbox";
import { useListInvites } from "@/hooks/invites/list/list";

type Props = {
  isCaptain: boolean;
};

export function InvitePages({ isCaptain }: Props) {
  const { data, isFetching } = useListInvites();

  if (!data || data.length === 0) {
    return (
      <NotfoundItems msgNotfound="Você ainda não tem nenhum pedido na sua caixa de entrada" />
    );
  }

  return (
    <section className="container mt-10">
      <header className="flex flex-col items-center gap-2 mb-5">
        {isFetching && (
          <span className="ml-2 text-sm text-white">Atualizando...</span>
        )}
        <h1 className="text-center text-heading-xl flex items-center gap-2">
          <Mail /> CAIXA DE ENTRADA
        </h1>

        <div className="flex gap-4">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-green-500" />
            <span>Aceito</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-indigo-200" />
            <span>Pendente</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-200" />
            <span>Rejeitado</span>
          </div>
        </div>
      </header>

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
    </section>
  );
}
