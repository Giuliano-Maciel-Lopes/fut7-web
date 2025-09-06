import { useListPlayer } from "@/hooks/player/List/list";
import { ListPlayerPage } from "@/templates/listPlayerPage/listPlayerPage";
import {  useEffect, useState } from "react";
import { FilterType } from "@/templates/listPlayerPage/heaader";
import { ListPlayerParams } from "@/schemazod/player/list";


// essa pag e isrc pois adm tem que ver tudo na ms hora


export default function PlayerList() {
  const [search, setSearch] = useState<string | undefined>(undefined);
  const [activeFilter, setActiveFilter] = useState<FilterType>("participatory");

 const params: Partial<ListPlayerParams> = {};

if (activeFilter === "goals") params.goals = true;
if (activeFilter === "assists") params.assists = true;
if (activeFilter === "participatory") params.participatory = true;
if (search) params.searchName = search;


useEffect(() => {
  setSearch(undefined);
}, [activeFilter]);

  const { data, isLoading , } = useListPlayer(params);
 


  return (
    <div>
      <ListPlayerPage
        onSelectFilter={setActiveFilter}
        adminMode={true}
        data={data}
        isLoading={isLoading}
        search={search}
        setSearch={setSearch}
      />
    </div>
  );
}
