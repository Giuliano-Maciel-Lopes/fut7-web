// hooks/invites/useListInvites.ts
import { useQuery, QueryClient } from "@tanstack/react-query";
import { api } from "@/services/axios";
import { InvitesList } from "@/types/api/invites/getInvites";
import { API_ROUTES } from "@/utils/routes";

// Tipagem para fetch
type Props = {
  token?: string;
  status?: "PENDING" | "ACCEPTED" | "REJECT";
};

// Função de fetch
export async function fetchDataListInvites({ token, status }: Props = {}) {
  const headers = token ? { Cookie: `token=${token}` } : undefined;

  const res = await api.get<InvitesList>(API_ROUTES.INVITES, {
    headers,
    params: { status },
  });
 // await new Promise((resolve) => setTimeout(resolve, 2000));
  return res.data;
}

// Hook React Query
export function useListInvites({ status }: Props = {}) {
  return useQuery({
    queryKey: ["invites", status],
    queryFn: () => fetchDataListInvites({ status }),
    staleTime: 1000 * 60 * 5,
  });
}

// Função SSR para prefetch
export async function prefetchInvites(
  queryClient: QueryClient,
  { status , token}: Props = {}
  
) {
  const data = await queryClient.prefetchQuery({
    queryKey: ["invites", status],
    queryFn: () => fetchDataListInvites({ status , token }),
  });
 
}
