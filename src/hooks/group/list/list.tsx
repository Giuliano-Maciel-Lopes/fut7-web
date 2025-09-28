import { api } from "@/services/axios";
import { GrouplistScore } from "@/types/api/groups/getListgroups";
import { API_ROUTES } from "@/utils/routes";
import { QueryClient, useQuery } from "@tanstack/react-query";

export async function FetchDataGroups(token?: string) {
  const headers = token ? { Cookie: `token=${token}` } : undefined;

  const res = await api.get<GrouplistScore>(`${API_ROUTES.GROUPS}`, {
    headers,
  });

  return res.data;
}

export function uselistGroups() {
  const query = useQuery({
    queryFn: () => FetchDataGroups(),
    queryKey: ["groups"],
  });
  return { ...query };
}

export async function prefetchListGroups(queryclient: QueryClient, token?: string) {
  queryclient.prefetchQuery({
    queryFn: () => FetchDataGroups(token),
    queryKey: ["groups"],
  })
}
