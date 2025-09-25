
import { MatchBodyUpdateStatusInput } from "@/schemazod/match/updatStatus";
import { api } from "@/services/axios";
import { errosApiMessage } from "@/utils/ErrosApi";
import { API_ROUTES } from "@/utils/routes";
import { Match } from "@shared/prisma";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

type Props = {
  data: MatchBodyUpdateStatusInput;
  id: string;
};

async function fetchDataUpdateStatus({ data, id }: Props) {
  const res = await api.patch<Match>(`${API_ROUTES.MATCHES}/${id}`, data);

  return res.data;
}

export function useUpdateStatusMatch() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: fetchDataUpdateStatus,
    onSuccess(data, variables) {
      queryClient.invalidateQueries({ queryKey: ["match-show", variables.id] });
      queryClient.invalidateQueries({ queryKey: ["match"] });

      toast.success(
        `Partida alterada para ${data.status} com sucesso`
      );
    },
    onError(error: any) {
      const message = errosApiMessage(error);
      toast.error(message);
    },
  });

  return { ...mutation };
}
