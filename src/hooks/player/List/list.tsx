import {
  ListPlayerParams,
  listPlayerParamsSchema,
} from "@/schemazod/player/list";
import { api } from "@/services/axios";
import { API_ROUTES } from "@/utils/routes";
import { useQuery } from "@tanstack/react-query";

export async function FetchaDataListPlayer(params?: ListPlayerParams) {
  const dataParams = listPlayerParamsSchema.parse(params);
  const res = await api.get(`${API_ROUTES.PLAYERS}`, {
    params: dataParams ,
  });
  return res.data;
}

export function useListPlayer(params?: ListPlayerParams) {
  const query = useQuery({
    queryFn: () => FetchaDataListPlayer(params),
    queryKey: ["ListPlayer", JSON.stringify(params)],
    staleTime: 1000 * 60 * 5,
  });
  return { ...query };
}
