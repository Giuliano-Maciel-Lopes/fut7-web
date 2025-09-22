import { FetchaDataListPlayer } from "@/hooks/player/List/list";
import { ListPlayerPage } from "@/templates/listPlayerPage/listPlayerPage";
import { ListPlayerParams } from "@/schemazod/player/list";
import { Player } from "@shared/prisma";
import { getUserRole } from "@/utils/getUserRole";


type Props = {
  initialData: Player[];
};

export default function PlayerListFilter({ initialData }: Props) {
  return (
    <div>
      <ListPlayerPage initialData={initialData} />
    </div>
  );
}

export async function getServerSideProps(ctx: any) {
  const role = await getUserRole(ctx);

  // Admin  nada, só React Query client-side
  if (role === "ADMIN") {
    return { props: {} };
  }

  // Usuário normal → SSR
  const params: ListPlayerParams = { participatory: true };
  const initialData = await FetchaDataListPlayer(params);

  return { props: { initialData } };
}