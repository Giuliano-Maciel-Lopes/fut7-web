import { api } from "@/services/axios";
import { API_ROUTES } from "@/utils/routes";
import { useQuery } from "@tanstack/react-query";
import { GetTeamReturn } from "@/types/api/TEAM/get";
import { ParamsTeam } from "@/schemazod/team/params";

export async function fetchDataListTeam(params?: ParamsTeam) {
  const res = await api.get<GetTeamReturn[]>(`${API_ROUTES.TEAMS}`, { params });
  //await new Promise(resolve => setTimeout(resolve, 2000));
  return res.data;
}

export function uselistTeam(params?: ParamsTeam) {
  const query = useQuery({
    queryFn: () => fetchDataListTeam(params),
    queryKey: ["listTeam", params],
    staleTime: 1000 * 60 * 5
  });
  return { ...query };
}
