import {
  ListPlayerParams,
  listPlayerParamsSchema,
} from "@/schemazod/player/list";
import { api } from "@/services/axios";
import { API_ROUTES } from "@/utils/routes";
import { Player } from "@shared/prisma";
import { useQuery } from "@tanstack/react-query";

export async function FetchaDataListPlayer(params?: ListPlayerParams , ) {
  const dataParams = listPlayerParamsSchema.parse(params);
  const res = await api.get<Player[]>(`${API_ROUTES.PLAYERS}`, {
    params: dataParams,
  });
 
  return res.data;
}

export function useListPlayer(params?: ListPlayerParams ,initialData?: Player[]) {
  const query = useQuery({
    queryFn: () => FetchaDataListPlayer(params),
    queryKey: ["ListPlayer", JSON.stringify(params)],
    staleTime: 1000 * 60 * 5,
    initialData
  });
  return { ...query };
}
