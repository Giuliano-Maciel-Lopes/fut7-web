import { api } from "@/services/axios";
import { API_ROUTES } from "@/utils/routes";
import { useQuery } from "@tanstack/react-query";
import { Team } from "@shared/prisma";
import { ListTeamReturn } from "@/types/api/TEAM/list";

export async function fetchDataListTeam() {
  const res = await api.get<ListTeamReturn[]>(`${API_ROUTES.TEAMS}`);
  
  return res.data;
}

export function uselistTeam(initialTeam?:ListTeamReturn[]) {
  const query = useQuery({
    queryFn: fetchDataListTeam,
    queryKey: ["listTeam"],
    initialData:initialTeam
  });
  return { ...query };
}
