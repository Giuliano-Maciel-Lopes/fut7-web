import { api } from "@/services/axios";
import { API_ROUTES } from "@/utils/routes";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updatePlayerInput } from "@/schemazod/player/update";
import { PlayerInput } from "@/schemazod/player/create";
import { toast } from "react-toastify";
import { UseAuth } from "@/hooks/context/useAuth";
import { errosApiMessage } from "@/utils/ErrosApi";

type Props = {
  id?: string; // se tiver -> update, se não -> create
  data: PlayerInput | updatePlayerInput;
};

// mutationFn que trata create/update
async function Fetchdata({ id, data }: Props) {
  if (id) {
    const res = await api.patch(`${API_ROUTES.PLAYERS}/${id}`, data);
    return res.data;
  } else {
    const res = await api.post(API_ROUTES.PLAYERS, data);
    return res.data;
  }
}

export function useCreateEditPlayer() {
  const queryClient = useQueryClient();
  const {session} = UseAuth()
  const userId = session?.datauser.id

  return useMutation({
    mutationFn: Fetchdata,
    onSuccess: (_, variables) => {
      
      queryClient.invalidateQueries({ queryKey: ["playersByUser", userId] });
      queryClient.invalidateQueries({ queryKey: ["playersByUser", variables.id] });
      queryClient.invalidateQueries({ queryKey: ["ListPlayer"] });
      

      toast.success(
        variables.id
          ? "Cartinha atualizada com sucesso!"
          : "Cartinha criada com sucesso!"
      );
    },
    onError: (error) => {
     const message =  errosApiMessage(error)
     toast.error(message)
    },
  });
}
