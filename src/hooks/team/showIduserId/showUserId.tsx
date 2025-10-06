
import { api } from "@/services/axios";
import { GetTeamReturn } from "@/types/api/TEAM/get";
import { API_ROUTES } from "@/utils/routes";
import { QueryClient, useQuery } from "@tanstack/react-query";

export async function fetchDataTeamUserId(token?: string) {
  const res = await api.get<GetTeamReturn>(`${API_ROUTES.TEAMS}/me`, {
    headers: token ? { Cookie: `token=${token}` } : undefined, // ckiente usa cookie HTTP-only
  });
   //  await new Promise(resolve => setTimeout(resolve, 2000));
 
  return res.data;
}

export function useTeamShowUserId() {
  return useQuery({
    queryKey: ["teamUser"],
    queryFn: () => fetchDataTeamUserId(),
   
  });
}
export async function PrefetchQueryTeamUserId(queryClient: QueryClient, token?: string) {
  await queryClient.prefetchQuery({
    queryKey: ["teamUser"],
    queryFn: () => fetchDataTeamUserId(token), // usa o token do SSR
  });
}