import { UseAuth } from "@/hooks/context/useAuth";
import { api } from "@/services/axios";
import { GetTeamReturn } from "@/types/api/TEAM/get";
import { API_ROUTES } from "@/utils/routes";
import { useQuery } from "@tanstack/react-query";

export async function fetchDataTeamUserId() {
  const res = await api.get<GetTeamReturn>(`${API_ROUTES.TEAMS}/me`);
  return res.data;
}

export function useTeamShowUserId() {
  const { session } = UseAuth(); 
  const id = session?.datauser.id

  const query = useQuery({
    queryKey: ["team", id], 
    queryFn: fetchDataTeamUserId,
    staleTime: 1000 * 60 * 5, // 5 minutos
    
  });

  return query;
}
