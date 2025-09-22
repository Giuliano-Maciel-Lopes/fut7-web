import { ParamsMatch } from "@/schemazod/match/paramsList";
import { api } from "@/services/axios";
import { ListMatches } from "@/types/api/match/getList";
import { API_ROUTES } from "@/utils/routes";
import { useQuery, QueryClient } from "@tanstack/react-query";

type Props = {
  filters?: ParamsMatch;
  token?: string;
};

export async function fetchDataListMatch({ filters, token }: Props) {
  const res = await api.get<ListMatches>(API_ROUTES.MATCHES, {
    headers: token ? { Cookie: `token=${token}` } : undefined,

    params: filters,
  });
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return res.data;
}

export function useListMatch({ filters, token }: Props = {}) {
  return useQuery({
    queryKey: ["match", filters],
    queryFn: () => fetchDataListMatch({ filters, token }),
   
  });
}

export async function PrefetchMatch(
  queryClient: QueryClient,
  filters?: ParamsMatch
) {
  const safeFilters = filters ?? {}; // se undefined, usa objeto vazio no servidor reclama c passa undfined

  await queryClient.prefetchQuery({
    queryFn: () => fetchDataListMatch({ filters: safeFilters }),
    queryKey: ["match", safeFilters],
  });
}
