import { api } from "@/services/axios";
import { API_ROUTES } from "@/utils/routes";
import { Player } from "@shared/prisma";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

async function FetchDataDelete(id: string) {
    
  const res = await api.delete<Player>(`${API_ROUTES.PLAYERS}/${id}`);

 // await new Promise(resolve => setTimeout(resolve, 2000));
  return res.data;
}

export function useDeletePlayer() {
  const useQuery = useQueryClient();
  const mutate = useMutation({
    mutationFn: FetchDataDelete,
    onSuccess(data, variables, context) {
      useQuery.invalidateQueries({ queryKey: ["playersByUser", variables] }); 
      
      useQuery.setQueryData<Player[]>(["ListPlayer"], (old) => {
        if (!old) return [];
        return old.filter((p) => p.id !== variables);
      });
      

      toast.success(`jogador ${data.nameCart} excluido`);
    },
    onError(error,) {
        toast.error(error.message)
    },
  });
  return{...mutate}
}
