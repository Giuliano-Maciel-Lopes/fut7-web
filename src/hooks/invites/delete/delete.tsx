import { api } from "@/services/axios";
import { errosApiMessage } from "@/utils/ErrosApi";
import { API_ROUTES } from "@/utils/routes";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { UseAuth } from "@/hooks/context/useAuth";
import { InviteSingle } from "@/types/api/invites/getInvites";


async function FetchInvite(id: String) {
  const res = await api.delete<InviteSingle>(`${API_ROUTES.INVITES}/${id}`);
  return res.data;
}

export function useDeleteInvite() {
  const queryClient = useQueryClient();
  const { session } = UseAuth();
  const userId = session?.datauser.id;

  const mutation = useMutation({
    mutationFn: FetchInvite,
    onSuccess(data) {
      queryClient.invalidateQueries({ queryKey: ["invites", userId] });

      toast.success("Pedido recusado");
    },
    onError(error) {
      const msg = errosApiMessage(error);
      toast.error(msg);
    },
  });

  return { ...mutation };
}
