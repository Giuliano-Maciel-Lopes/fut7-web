import { api } from "@/services/axios";
import { API_ROUTES } from "@/utils/routes";
import { PlayerShows } from "@/types/api/players/get";
import { useQuery } from "@tanstack/react-query";

export async function FetchDataFindByUser(token?: string) {
  const headers = token ? { Cookie: `token=${token}` } : undefined;

  const res = await api.get<PlayerShows>(`${API_ROUTES.PLAYERS}/me`, {
    headers,
  });

  return res.data;
}

export function UsePLayerFindByuser() {
  const query = useQuery({
    queryFn: () => FetchDataFindByUser(),
    queryKey: ["playersByUser"],
  });
  return { ...query };
}
