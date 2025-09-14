import { api } from "@/services/axios";
import { API_ROUTES } from "@/utils/routes";
import { useQuery } from "@tanstack/react-query";
import { ListTeamReturn } from "@/types/api/TEAM/list";

export async function fetchDataListTeam() {
  const res = await api.get<ListTeamReturn[]>(`${API_ROUTES.TEAMS}`);
    //await new Promise(resolve => setTimeout(resolve, 2000));
  return res.data;
}

export function uselistTeam(initialTeam?:ListTeamReturn[]) {
  const query = useQuery({
    queryFn: fetchDataListTeam,
    queryKey: ["listTeam"],
    initialData:initialTeam,
     staleTime: 1000 * 60,
  });
  return { ...query };
}
