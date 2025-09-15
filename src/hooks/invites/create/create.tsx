import { InviteUpdateSchema , InviteUpdate } from "@/schemazod/invite/update";
import { api } from "@/services/axios";
import { errosApiMessage } from "@/utils/ErrosApi";
import { API_ROUTES } from "@/utils/routes";
import { Invite } from "@shared/prisma"; // modelo do prisma
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";





async function FetchInvite(data: InviteUpdate) {
  const res = await api.patch<Invite>(`${API_ROUTES.INVITES}`,data.status );
  return res.data;
}

export function useInviteMutation() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: FetchInvite,

    onSuccess(data, variables) {},

    onError(error) {
      const msg = errosApiMessage(error);
      toast.error(msg);
    },
  });

  return { ...mutation };
}
