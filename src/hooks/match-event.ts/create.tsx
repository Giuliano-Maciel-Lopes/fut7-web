import { MatchEventBodyInput } from "@/schemazod/matche-event/create";
import { api } from "@/services/axios";
import { errosApiMessage } from "@/utils/ErrosApi";
import { API_ROUTES } from "@/utils/routes";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

async function fetchDataCreateMatchEvent(data: MatchEventBodyInput) {
  const res = await api.post(`${API_ROUTES.MATCH_EVENTS}`, data);
  return res.data;
}

export function usematchEventCreate() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: fetchDataCreateMatchEvent,
    onSuccess(data, variables) {
      queryClient.invalidateQueries({ queryKey: ["match"] });
      queryClient.invalidateQueries({
        queryKey: ["match-show", variables.matchId],
      });

      toast.success("evento criado com sucesso");
    },
    onError(error) {
      const msg = errosApiMessage(error);
      toast.error(msg);
    },
  });

  return { ...mutation };
}
