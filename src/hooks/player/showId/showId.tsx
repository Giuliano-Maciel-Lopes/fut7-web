import { api } from "@/services/axios";
import { API_ROUTES } from "@/utils/routes";
import { PlayerShows } from "@/types/api/players/get";
import { useQuery } from "@tanstack/react-query";

export async function fetchDataShowPlayerId(id: string) {
  const res = await api.get<PlayerShows>(`${API_ROUTES.PLAYERS}/${id}`);
  return res.data;
}

export function useShowPlayerId(id: string) {
  const query = useQuery({
    queryFn: () =>  fetchDataShowPlayerId(id),
    queryKey: ["playersByUser", id],
    enabled: !!id
  });
  return { ...query };
}
