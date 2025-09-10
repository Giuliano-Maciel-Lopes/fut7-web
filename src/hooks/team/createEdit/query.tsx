import { TeamBodySchemaInput } from "@/schemazod/team/create";
import { api } from "@/services/axios";
import { API_ROUTES } from "@/utils/routes";
import { useMutation, useQueryClient } from "@tanstack/react-query";
type Props = {
  data: TeamBodySchemaInput;
  id: string;
};

async function Fetchdata({ id, data }: Props) {
  if (id) {
    const res = await api.patch(`${API_ROUTES.TEAMS}/${id}`, data);
    return res.data;
  } else {
    const res = await api.post(API_ROUTES.TEAMS, data);
    return res.data;
  }
}

export function useCreateEditTeam(){
  const useQuery = useQueryClient()
  
   const mutation =  useMutation({
    mutationFn:Fetchdata
    
   })
   return{...mutation}

}