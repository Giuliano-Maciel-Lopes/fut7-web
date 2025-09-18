// hooks/invites/useListInvites.ts
import { useQuery, QueryClient } from "@tanstack/react-query";
import { api } from "@/services/axios";
import { InvitesList } from "@/types/api/invites/getInvites";
import { API_ROUTES } from "@/utils/routes";
import { UseAuth } from "@/hooks/context/useAuth";

// fetch function
export async function fetchDataListInvites(token?: string) {
  const headers = token ? { Cookie: `token=${token}` } : undefined;
  const res = await api.get<InvitesList>(API_ROUTES.INVITES, { headers });
 await new Promise(resolve => setTimeout(resolve, 2000));
  return res.data;
}

// hook React Query
export function useListInvites(token?: string) {
  const { session } = UseAuth();
  const userId = session?.datauser.id;
  return useQuery({
    queryKey: ["invites", userId],
    queryFn: () => fetchDataListInvites(token),
    staleTime: 1000 * 60 * 5,
    enabled: !!userId,
  });
}

// função SSR
export async function prefetchInvites(
  queryClient: QueryClient,
  userId?: string,
  token?: string
) {
  if (!userId) return; // não faz nada se não tiver userId

  await queryClient.prefetchQuery({
    queryKey: ["invites", userId],
    queryFn: () => fetchDataListInvites(token),
  });
}
