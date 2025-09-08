import { useState } from "react";
import { FilterType } from "@/templates/listPlayerPage";
import { ListPlayerParams } from "@/schemazod/player/list";
import { useRouter } from "next/router";

export function useParamsListPlayer() {
  const router = useRouter();
  const searchQuery = router.query.search as string | undefined;
  const [search, setSearch] = useState<string | undefined>(searchQuery);

  const activeFilter = router.query.filter as FilterType | undefined;

  const params: ListPlayerParams = {};

  if (activeFilter === "goals") params.goals = true;
  if (activeFilter === "assists") params.assists = true;
  if (activeFilter === "participatory") params.participatory = true;

  if (search) {
    params.searchName = search;
  }

  return { params, setSearch, search };
}
