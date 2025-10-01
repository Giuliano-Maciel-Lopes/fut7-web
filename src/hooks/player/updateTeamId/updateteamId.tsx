import { api } from "@/services/axios";
import { errosApiMessage } from "@/utils/ErrosApi";
import { API_ROUTES } from "@/utils/routes";
import { Player } from "@shared/prisma";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

async function fetchUpdateTeamIdMe() {
  const res = await api.patch<Player>(`${API_ROUTES.PLAYERS}/teamid/`);
  return res.data;
}

export function useUpdateTeamIdMe() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: fetchUpdateTeamIdMe,
    onSuccess: (data, variables) => {
      queryClient.invalidateQueries({
        queryKey: ["team-show" ,  data.teamId],
      });

     
      queryClient.invalidateQueries({
        queryKey: ["playersByUser", data.id ],
      });

      toast.success(`Time do jogador ${data.nameCart} atualizado com sucesso!`);
    },
    onError: (error) => {
    const msg =  errosApiMessage(error)
      toast.error(msg);
    },
  });
}
