import { api } from "@/services/axios";
import { API_ROUTES } from "@/utils/routes";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import {
  schemazBOdyIsactiveUpdate,
  IsActiveUpdate,
} from "@/schemazod/updateISactive";
import { Team } from "@shared/prisma";
import { errosApiMessage } from "@/utils/ErrosApi";

type Props = {
  data: IsActiveUpdate;
  id: string;
};

async function FetchDataUpdate({ id, data }: Props) {
  const res = await api.patch<Team>(`${API_ROUTES.TEAMS}/isActive/${id}`, data);
  return res.data;
}

export function useUpdateIsactiveTeam() {
  const useQuery = useQueryClient();
  const mutation = useMutation({
    mutationFn: FetchDataUpdate,
    onSuccess(data ,  variables) {
      useQuery.invalidateQueries({ queryKey: ["team", variables] });
      useQuery.invalidateQueries({ queryKey: ["listTeam"] });

      toast.success(`time ${data.name} modificado  `)
    },
    onError(error, ) {
      const msg = errosApiMessage(error);
      toast.error(msg);
    },
  });
  return { ...mutation };
}
