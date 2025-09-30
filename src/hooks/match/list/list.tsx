import { UseAuth } from "@/hooks/context/useAuth";
import { ParamsMatch } from "@/schemazod/match/paramsList";
import { api } from "@/services/axios";
import { ListMatches } from "@/types/api/match/getList";
import { QueryClient, useQuery } from "@tanstack/react-query";
import { API_ROUTES } from "@/utils/routes";

// Tipagem do hook
type Props = {
  filters?: ParamsMatch;
  token?: string;
};

// Função de fetch
export async function fetchDataListMatch({ filters, token }: Props) {
  const res = await api.get<ListMatches>(API_ROUTES.MATCHES, {
    params: filters,
    headers: token ? { Cookie: `token=${token}` } : undefined,
  });

  await new Promise((resolve) => setTimeout(resolve, 2000));

  return res.data;
}

export function useListMatch({ filters }: Props = {}) {
  const { session } = UseAuth();
  const isAdm = session?.datauser.role === "ADMIN";

  const filtersKey = JSON.stringify(filters ?? {});

  return useQuery({
    queryKey: ["match", filtersKey],
    queryFn: () => fetchDataListMatch({ filters }),
    staleTime: 1000 * 60 * 5,
  });
}

// Prefetch SSR
export async function PrefetchMatch(
  queryClient: QueryClient,
  filters?: ParamsMatch,
  token?:string
) {
  const safeFilters = filters ?? {};
  const filtersKey = JSON.stringify(safeFilters);

  await queryClient.prefetchQuery({
    queryKey: ["match", filtersKey],
    queryFn: () => fetchDataListMatch({ filters: safeFilters , token }),
  });
}
