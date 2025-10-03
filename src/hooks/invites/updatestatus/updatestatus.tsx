import { api } from "@/services/axios";
import { errosApiMessage } from "@/utils/ErrosApi";
import { API_ROUTES } from "@/utils/routes";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { InviteSingle } from "@/types/api/invites/getInvites";
import { InviteUpdate } from "@/schemazod/invite/update";
type Props ={
    data:InviteUpdate
    id:String
}

async function FetchInvite({data , id}:Props) {
  const res = await api.patch<InviteSingle>(`${API_ROUTES.INVITES}/${id}` , data);
  return res.data;
}

export function useUpdateStatusInvite() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: FetchInvite,
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ["invites",] });

      toast.success("Pedido Aceito "); // pois so pode mudar para aceitar pois m vai ter historico de pedidos 
    },
    onError(error) {
      const msg = errosApiMessage(error);
      toast.error(msg);
    },
  });

  return { ...mutation };
}
