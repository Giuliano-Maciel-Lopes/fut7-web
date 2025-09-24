
import { MatchBodyInput } from "@/schemazod/match/create";
import { api } from "@/services/axios";
import { errosApiMessage } from "@/utils/ErrosApi";
import { API_ROUTES } from "@/utils/routes";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

export async function Fetchdata(data:MatchBodyInput) {
  const res = await api.post(API_ROUTES.MATCHES , data);

  res.data;
}

export function UseCreateMatch() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: Fetchdata,
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: ["match" ],
      });

      toast.success("Partida criada");
    },
    onError(error) {
      const message = errosApiMessage(error);
      toast.error(message);
    },
  });
  return { ...mutation };
}
