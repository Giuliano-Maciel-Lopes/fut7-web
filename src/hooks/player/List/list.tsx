import { api } from "@/services/axios";
import { API_ROUTES } from "@/utils/routes";
import { useQuery } from "@tanstack/react-query";

export async function FetchaDataListPlayer() {
  const res = await api.get(`${API_ROUTES.PLAYERS}`);
  return res.data;
}

export function useListPlayer(){
    const query = useQuery({
        queryFn:FetchaDataListPlayer,
        queryKey:["ListPlayer"]
    })
    return {...query}
}
