import { UseAuth } from "@/hooks/context/useAuth";
import { ParamsMatch } from "@/schemazod/match/paramsList";
import { api } from "@/services/axios";
import { ListMatches } from "@/types/api/match/getList";
import { QueryClient, useQuery } from "@tanstack/react-query";
import { API_ROUTES } from "@/utils/routes";

// Tipagem do hook
type Props = {
  filters?: ParamsMatch;
};

// Função de fetch
export async function fetchDataListMatch({ filters }: Props) {
  const res = await api.get<ListMatches>(API_ROUTES.MATCHES, {
    params: filters,
  });

  await new Promise((resolve) => setTimeout(resolve, 2000));

  return res.data;
}

export function useListMatch({ filters }: Props = {}) {
  const { session } = UseAuth();
  const userId = session?.datauser.id;
  const isAdm = session?.datauser.role === "ADMIN"; 
  const safeUserId = userId ?? null;

  const filtersKey = JSON.stringify(filters ?? {});

  return useQuery({
    queryKey: ["match", safeUserId, filtersKey],
    queryFn: () => fetchDataListMatch({ filters }),
    enabled: !!isAdm,     // pq so admin vai poder usar react query usarios vai ser ssr     
    staleTime: 1000 * 60 * 5,   
  });
}

// Prefetch SSR
export async function PrefetchMatch(
  queryClient: QueryClient,
  filters?: ParamsMatch,
  userId?: string
) {
  const safeFilters = filters ?? {};
  const filtersKey = JSON.stringify(safeFilters);
  const safeUserId = userId ?? null;

  await queryClient.prefetchQuery({
    queryKey: ["match", safeUserId, filtersKey],
    queryFn: () => fetchDataListMatch({ filters: safeFilters }),
  });
}