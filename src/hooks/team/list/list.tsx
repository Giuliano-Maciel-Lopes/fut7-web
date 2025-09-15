import { api } from "@/services/axios";
import { API_ROUTES } from "@/utils/routes";
import { useQuery } from "@tanstack/react-query";
import { GetTeamReturn} from "@/types/api/TEAM/get";

export async function fetchDataListTeam() {
  const res = await api.get<GetTeamReturn[]>(`${API_ROUTES.TEAMS}`);
    //await new Promise(resolve => setTimeout(resolve, 2000));
  return res.data;
}

export function uselistTeam(initialTeam?:GetTeamReturn[]) {
  const query = useQuery({
    queryFn: fetchDataListTeam,
    queryKey: ["listTeam"],
    initialData:initialTeam,
     staleTime: 1000 * 60,
  });
  return { ...query };
}
