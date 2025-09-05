import { useListPlayer } from "@/hooks/player/List/list";
import { ListPlayerPage } from "@/templates/listPlayerPage/listPlayerPage";
// essa pag e isrc pois adm tem que ver tudo 

export default function PlayerList() {
  const { data, isLoading } = useListPlayer();

  return (
    <div>
      <ListPlayerPage adminMode={true} data={data} isLoading={isLoading} />
    </div>
  );
}
