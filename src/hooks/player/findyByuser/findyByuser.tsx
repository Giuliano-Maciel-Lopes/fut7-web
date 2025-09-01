import { UseAuth } from "@/hooks/context/useAuth";
import { api } from "@/services/axios";
import { API_ROUTES } from "@/utils/routes";
import { Player } from "@shared/prisma";
import { useQuery } from "@tanstack/react-query";


async function FetchData() {
  const res = await api.get<Player>(`${API_ROUTES.PLAYERS}/me`);
 
 return res.data;
}

export function UsePLayerFindByuser() {
  const {session} = UseAuth()
  const userId = session?.datauser.id

  const query = useQuery({
    queryFn: FetchData,
    queryKey: ["playersByUser" , userId],
    enabled:!!userId
    
  });
  return { ...query };
}
