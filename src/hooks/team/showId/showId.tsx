import { api } from "@/services/axios";
import { API_ROUTES } from "@/utils/routes";
import { Team } from "@shared/prisma";
import { useQuery } from "@tanstack/react-query";


export async function fetchDataShowTeamrId(id: string) {
  const res = await api.get<Team>(`${API_ROUTES.TEAMS}/${id}`);
  
  // await new Promise(resolve => setTimeout(resolve, 2000));
  return res.data;
}


export function useShowTeamId(id: string, ) {
  return useQuery({
    queryKey: ["player", id],
    queryFn: () => fetchDataShowTeamrId(id),
    enabled: !!id, 
  });
}
