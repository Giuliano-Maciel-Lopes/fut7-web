import { api } from "@/services/axios";
import { API_ROUTES } from "@/utils/routes";
import { Player } from "@shared/prisma";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { schemazBOdyIsactiveUpdate , IsActiveUpdate  } from "@/schemazod/updateISactive";
type props ={
  id:string
  data:IsActiveUpdate
}

async function FetchIsActiveUpdatePlayer({data ,id}:props) {
    
  const res = await api.patch<Player>(`${API_ROUTES.PLAYERS}/isActive/${id}`,data );

 // await new Promise(resolve => setTimeout(resolve, 2000));
  return res.data;
}

export function useIsActivePlayer() {
  const useQuery = useQueryClient();
  const mutate = useMutation({
    mutationFn: FetchIsActiveUpdatePlayer,
    onSuccess(data, variables, context) {
      useQuery.invalidateQueries({ queryKey: ["playersByUser", variables.id] }); 
      
    
 useQuery.setQueriesData<Player[]>({ queryKey: ["ListPlayer"] }, (old) =>
  old
    ? old.map(p =>
        p.id === variables.id ? { ...p, isActive: data.isActive } : p
      )
    : old
);
      

      toast.success(`jogador ${data.nameCart} desativado`);
    },
    onError(error,) {
        toast.error(error.message)
    },
  });
  return{...mutate}
}
