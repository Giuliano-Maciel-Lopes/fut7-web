import { useListPlayer } from "@/hooks/player/List/list";
import { ListPlayerPage } from "@/templates/listPlayerPage/listPlayerPage";
import { useParamsListPlayer } from "@/hooks/player/List/queryParams";



export default function PlayerListFilter() {
const { params ,search  ,setSearch} =  useParamsListPlayer()
const { data, isLoading } = useListPlayer({participatory:true});
 ;
  return (
    <div>
      <ListPlayerPage
        adminMode={true}
        data={data}
        isLoading={isLoading}
        search={search}
        setSearch={setSearch}
      />
    </div>
  );
}
