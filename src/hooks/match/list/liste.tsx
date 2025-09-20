import { ParamsMatch } from "@/schemazod/match/paramsList";
import { api } from "@/services/axios";
import { ListMatches } from "@/types/api/match/getList";
import { API_ROUTES } from "@/utils/routes";
import { useQuery } from "@tanstack/react-query";

// Recebe os filtros como argumento
export async function fetchDataListMatch(params?: ParamsMatch) {
  const res = await api.get<ListMatches>(API_ROUTES.MATCHES, { params });
  return res.data;
}

// Hook React Query
export function useListMatch(filters?: ParamsMatch) {
  const query = useQuery({
    queryKey: ["match"], // refaz a query se filtros mudarem
    queryFn: () => fetchDataListMatch(filters),

  });

  return { ...query };
}
