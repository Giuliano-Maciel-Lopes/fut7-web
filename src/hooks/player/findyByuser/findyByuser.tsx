import { UseAuth } from "@/hooks/context/useAuth";
import { api } from "@/services/axios";
import { API_ROUTES } from "@/utils/routes";
import { PlayerShows } from "@/types/api/players/get";
import { useQuery } from "@tanstack/react-query";


export async function FetchDataFIndByUser() {
  const res = await api.get<PlayerShows>(`${API_ROUTES.PLAYERS}/me`);
 
 return res.data;
}

export function UsePLayerFindByuser() {
  const {session} = UseAuth()
  const userId = session?.datauser.id

  const query = useQuery({
    queryFn: FetchDataFIndByUser,
    queryKey: ["playersByUser" , userId],
    enabled:!!userId
    
  });
  return { ...query };
}
