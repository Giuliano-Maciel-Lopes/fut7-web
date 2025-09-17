import { api } from "@/services/axios";
import { API_ROUTES } from "@/utils/routes";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { GetTeamReturn, PlayerPositionIndex } from "@/types/api/TEAM/get";
import { toast } from "react-toastify";
import { errosApiMessage } from "@/utils/ErrosApi";



type Props = {
   data: { players: PlayerPositionIndex[] }; // <--
  id: string;
};


async function fetchDataUpdate({ data, id }: Props) {
  const res = await api.patch(`${API_ROUTES.TEAMS}/position/${id}`, data);
  return res.data;
}

// Hook customizado para usar mutation
export function useTeamUpdateIndex() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: fetchDataUpdate,
    onSuccess: (data, variables) => {
      queryClient.invalidateQueries({ queryKey: ["team", variables.id] });

      toast.success(`Possiçoes do time alteradas com sucesso`);
    },
    onError: (error) => {
      const msg = errosApiMessage(error);
      toast.error(msg);
    },
  });

  return mutation;
}
