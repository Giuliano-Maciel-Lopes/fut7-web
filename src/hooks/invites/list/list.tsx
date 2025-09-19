// hooks/invites/useListInvites.ts
import { useQuery, QueryClient } from "@tanstack/react-query";
import { api } from "@/services/axios";
import { InvitesList } from "@/types/api/invites/getInvites";
import { API_ROUTES } from "@/utils/routes";
import { UseAuth } from "@/hooks/context/useAuth";

// Tipagem para fetch
type Props = {
  token?: string;
  status?: "PENDING" | "ACCEPTED" | "REJECT";
};

// Função de fetch
export async function fetchDataListInvites({ token, status }:Props = {}) {
  const headers = token ? { Cookie: `token=${token}` } : undefined;

  const res = await api.get<InvitesList>(API_ROUTES.INVITES, {
    headers,
    params: { status }, 
  });

  return res.data;
}

// Hook React Query
export function useListInvites({ token, status }:Props = {}) {
  const { session } = UseAuth();
  const userId = session?.datauser.id;

  return useQuery({
    queryKey: ["invites", userId ], 
    queryFn: () => fetchDataListInvites({ token, status }),
    staleTime: 1000 * 60 * 5,
    enabled: !!userId,
  });
}

// Função SSR
export async function prefetchInvites(
  queryClient: QueryClient,
  userId?: string,
  { token, status }: Props = {}
) {
  if (!userId) return;

  await queryClient.prefetchQuery({
    queryKey: ["invites", userId], 
    queryFn: () => fetchDataListInvites({ token, status }),
  });
}
