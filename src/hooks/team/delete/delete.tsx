import { api } from "@/services/axios";
import { API_ROUTES } from "@/utils/routes";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { Team } from "@shared/prisma";
import { errosApiMessage } from "@/utils/ErrosApi";

async function FetchDataDelete( id: string) {
  const res = await api.delete<Team>(`${API_ROUTES.TEAMS}/${id}`,);
  return res.data;
}

export function useDeleteTeam() {
  const useQuery = useQueryClient();
  const mutation = useMutation({
    mutationFn: FetchDataDelete,
        onSuccess(data, variables) {
          useQuery.invalidateQueries({ queryKey: ["team", variables] });
          useQuery.invalidateQueries({ queryKey: ["listTeam"] });
      
        },
        onError(error, variables, context) {
         const msg =  errosApiMessage(error)
         toast.error(msg)
        },
  });

  return { ...mutation };
}
