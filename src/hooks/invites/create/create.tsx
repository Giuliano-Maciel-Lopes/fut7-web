import {  InviteBodyInput } from "@/schemazod/invite/create";
import { api } from "@/services/axios";
import { errosApiMessage } from "@/utils/ErrosApi";
import { API_ROUTES } from "@/utils/routes";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { InviteSingle,} from "@/types/api/invites/getInvites";

async function FetchInvite(data: InviteBodyInput) {
  const res = await api.post<InviteSingle>(`${API_ROUTES.INVITES}`, data);
  return res.data;
}

export function useInviteCreate() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: FetchInvite,
    onSuccess( ) {
      queryClient.invalidateQueries({ queryKey: ["invites"] }); 

      toast.success("pedido enviado  com sucesso ")
    },
    onError(error) {
      const msg = errosApiMessage(error);
      toast.error(msg);
    },
  });

  return { ...mutation };
}
