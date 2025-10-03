import { TeamBodySchemaInput } from "@/schemazod/team/create";
import { api } from "@/services/axios";
import { errosApiMessage } from "@/utils/ErrosApi";
import { API_ROUTES } from "@/utils/routes";
import { Team } from "@shared/prisma";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
type Props = {
  data: TeamBodySchemaInput;
  id?: string;
};

async function Fetchdata({ id, data }: Props) {
  if (id) {
    const res = await api.patch<Team>(`${API_ROUTES.TEAMS}/${id}`, data);
    return res.data;
  } else {
    const res = await api.post<Team>(API_ROUTES.TEAMS, data);
    return res.data;
  }
}

export function useCreateEditTeam() {
  const useQuery = useQueryClient();

  const mutation = useMutation({
    mutationFn: Fetchdata,

    onSuccess(data, variables) {

      useQuery.invalidateQueries({ queryKey: ["team", variables.id] });
      useQuery.invalidateQueries({ queryKey: ["listTeam"] });
      if (variables.id) {
        toast.success(`Time ${data.name} atualizado com sucesso!`);
      } else {
        toast.success(`Time ${data.name} criado com sucesso!`);
      }
    },
onError(error: unknown) {
  if (error instanceof AxiosError) {
    console.error("❌ Erro API completo:", {
      status: error.response?.status,
      data: error.response?.data,
      headers: error.response?.headers,
    });
  } else {
    console.error("❌ Erro inesperado:", error);
  }

  const msg = errosApiMessage(error);
  toast.error(msg);
},
  });
  return { ...mutation };
}
