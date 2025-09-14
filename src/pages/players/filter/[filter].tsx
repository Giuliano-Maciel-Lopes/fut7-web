import { FetchaDataListPlayer } from "@/hooks/player/List/list";
import { ListPlayerPage } from "@/templates/listPlayerPage/listPlayerPage";
import { Player } from "@shared/prisma";
import { ListPlayerParams } from "@/schemazod/player/list";
import { FilterType } from "@/templates/listPlayerPage";
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

// SSR
export async function getServerSideProps(ctx: any) {
    const role = await getUserRole(ctx);
    
  if (role === "ADMIN") {
    return { props: {} };
  }

  const { params } = ctx;
  const filterFromParam = params?.filter as FilterType | undefined;

  const paramsPlayer: ListPlayerParams = {};

  if (filterFromParam === "goals") paramsPlayer.goals = true;
  if (filterFromParam === "assists") paramsPlayer.assists = true;
  if (!filterFromParam || filterFromParam === "participatory")
    paramsPlayer.participatory = true;

  const initialData = await FetchaDataListPlayer(paramsPlayer);

  return { props: { initialData } };
}

