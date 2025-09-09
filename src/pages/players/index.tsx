import { FetchaDataListPlayer } from "@/hooks/player/List/list";
import { ListPlayerPage } from "@/templates/listPlayerPage/listPlayerPage";
import { ListPlayerParams } from "@/schemazod/player/list";
import { Player } from "@shared/prisma";

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

// SSR: traz os dados iniciais do backend
export async function getServerSideProps() {
  const params: ListPlayerParams = { participatory: true }; // top 50 
  const initialData = await FetchaDataListPlayer(params);

  return {
    props: { initialData },
  };
}