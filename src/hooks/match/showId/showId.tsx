import { api } from "@/services/axios";
import { QueryClient, useQuery } from "@tanstack/react-query";
import { API_ROUTES } from "@/utils/routes";
import { GetShowMatch } from "@/types/api/match/getshow";

export async function fetchShowMatch(id: string, token?: string) {
  const res = await api.get<GetShowMatch>(`${API_ROUTES.MATCHES}/${id}`, {
    headers: token ? { Cookie: `token=${token}` } : undefined,
  });

  await new Promise((resolve) => setTimeout(resolve, 2000));

  return res.data;
}

export function useShowMatch(id: string) {
  return useQuery({
    queryKey: ["match-show", id],
    queryFn: () => fetchShowMatch(id),
    enabled: !!id,
  });
}

export async function PrefectMatchShowId(
  queryCliente: QueryClient,
  id: string,
  token?: string
) {
  await queryCliente.prefetchQuery({
    queryKey: ["match-show", id],
    queryFn: () => fetchShowMatch(id, token),
  });
}
