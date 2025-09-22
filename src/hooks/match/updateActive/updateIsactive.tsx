import { UseAuth } from "@/hooks/context/useAuth";
import { ParamsMatch} from "@/schemazod/match/paramsList";
import { IsActiveUpdate } from "@/schemazod/updateISactive";
import { api } from "@/services/axios";
import { errosApiMessage } from "@/utils/ErrosApi";
import { API_ROUTES } from "@/utils/routes";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";


type Props = {
  data: IsActiveUpdate;
  id: string;
};

async function fetchDataUpdate({ data, id }: Props) {
  const res = await api.patch(`${API_ROUTES.MATCHES}/isactive/${id}`, data)
  
  return res.data;
}

export function useUpdateIsActiveMatch(filters:ParamsMatch) {
  const queryClient = useQueryClient();
  const { session } = UseAuth();
  const userId = session?.datauser.id;
  const filtersKey = JSON.stringify(filters ?? {});

  const mutation = useMutation({
    mutationFn: fetchDataUpdate,
    onSuccess(data) {
      
      queryClient.invalidateQueries({ queryKey: ["match", userId, filtersKey] });

      toast.success(`Partida ${data.isActive ? "ativada" : "desativada"} com sucesso`);
    },
    onError(error: any) {
      const message = errosApiMessage(error);
      toast.error(message);
    },
  });

  return { ...mutation };
}
