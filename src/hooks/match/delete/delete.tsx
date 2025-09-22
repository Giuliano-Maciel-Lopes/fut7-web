import { UseAuth } from "@/hooks/context/useAuth";
import { ParamsMatch } from "@/schemazod/match/paramsList";
import { api } from "@/services/axios";
import { errosApiMessage } from "@/utils/ErrosApi";
import { API_ROUTES } from "@/utils/routes";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

async function FetchDataDelete(id: string) {
  const res = await api.delete(`${API_ROUTES.MATCHES}/${id}`);
  return res.data;
}

export function UseDeleteMatch(filters: ParamsMatch) {
  const queryClient = useQueryClient();
  const { session } = UseAuth();
  const userId = session?.datauser.id;
  const filtersKey = JSON.stringify(filters ?? {});

  const mutation = useMutation({
    mutationFn: FetchDataDelete,
    onSuccess() {
      queryClient.invalidateQueries({
           queryKey: ["match", userId, filtersKey], 
      });

      toast.success("Partida excluida");
    },
    onError(error) {
      const message = errosApiMessage(error);
      toast.error(message);
    },
  });
  return { ...mutation };
}
