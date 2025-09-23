import { api } from "@/services/axios";
import { useQuery } from "@tanstack/react-query";
import { API_ROUTES } from "@/utils/routes";
import { GetShowMatch } from "@/types/api/match/getshow";

export async function fetchShowMatch(id: string) {
  const res = await api.get<GetShowMatch>(`${API_ROUTES.MATCHES}/${id}`);

  await new Promise((resolve) => setTimeout(resolve, 2000));

  return res.data;
}

export function useShowMatch(id: string) {
  return useQuery<GetShowMatch>({
    queryKey: ["match-show", id],
    queryFn: () => fetchShowMatch(id),
    enabled: !!id,
  });
}
