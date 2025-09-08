import { useListPlayer } from "@/hooks/player/List/list";
import { ListPlayerPage } from "@/templates/listPlayerPage/listPlayerPage";
import { useParamsListPlayer } from "@/hooks/player/List/queryParams";

export default function PlayerListFilter() {
  return (
    <div>
      <ListPlayerPage  />
    </div>
  );
}
