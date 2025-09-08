import {  FetchaDataListPlayer } from "@/hooks/player/List/list";
import { ListPlayerPage } from "@/templates/listPlayerPage/listPlayerPage";
import { useParamsListPlayer } from "@/hooks/player/List/queryParams";
import { Player } from "@shared/prisma";
import { ListPlayerParams } from "@/schemazod/player/list";

type Props = {
  dataSSR: Player;
};

export default function PlayerListFilter({ dataSSR }: Props) {

  return (
    <div>
      <ListPlayerPage  />
    </div>
  );
}


