// parsedParamsServer.ts
import { ListPlayerParams } from "@/schemazod/player/list";
import { FilterType } from "@/templates/listPlayerPage";
import { useRouter } from "next/router";
import { useState } from "react";

// parsing comum
function parseFilters(query: any) {
  const search = query.search as string | undefined;
  const activeFilter = query.filter as FilterType | undefined;
  const params: ListPlayerParams = {};
  if (!activeFilter && !search) params.participatory = true;
  if (activeFilter === "goals") params.goals = true;
  if (activeFilter === "assists") params.assists = true;
  if (activeFilter === "participatory") params.participatory = true;
  if (search) params.searchName = search;
  return { params, search };
}

// SSR
export function parseFiltersServer(query: any) {
  return parseFilters(query).params;
}

// Client
export function useParsedFiltersClient() {
  const router = useRouter();
  const { params, search } = parseFilters(router.query);
  const [searchState, setSearch] = useState(search);
  return { params, search: searchState, setSearch };
}

