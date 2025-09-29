import { api } from "@/services/axios";
import { errosApiMessage } from "@/utils/ErrosApi";
import { API_ROUTES } from "@/utils/routes";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { MatchEvent } from "@shared/prisma";
export type PropsDeletematchEvent ={
    id:string
    matchId:string
}

async function FetchDelete({id}:PropsDeletematchEvent) {
  const res = await api.delete<MatchEvent>(`${API_ROUTES.MATCH_EVENTS}/${id}`);
  return res.data;
}

export function useDeleteMatchEvent() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: FetchDelete,
    onSuccess(data, variables) {
      queryClient.invalidateQueries({ queryKey: ["match-show", variables.matchId] });

      toast.success("Evento apagado com sucesso");
    },
    onError(error) {
      const msg = errosApiMessage(error);
      toast.error(msg);
    },
  });

  return { ...mutation };
}
