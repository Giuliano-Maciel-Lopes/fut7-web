import { api } from "@/services/axios";
import { errosApiMessage } from "@/utils/ErrosApi";
import { API_ROUTES } from "@/utils/routes";
import { Player } from "@shared/prisma";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

async function fetchUpdateTeamId(id: string) {
  const res = await api.patch<Player>(`${API_ROUTES.TEAMS}/player/${id}`);
  return res.data;
}

export function useUpdateTeamId() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: fetchUpdateTeamId,
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: ["team-show", data.teamId],
      });
      queryClient.invalidateQueries({
        queryKey: ["teamUser"],
      });

      queryClient.invalidateQueries({
        queryKey: ["playersByUser", data.id],
      });

      toast.success(`Time do jogador ${data.nameCart} atualizado com sucesso!`);
    },
    onError: (error) => {
      const msg = errosApiMessage(error);
      toast.error(msg);
    },
  });
}
