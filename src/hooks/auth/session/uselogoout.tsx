import { api } from "@/services/axios";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { UseAuth } from "@/hooks/context/useAuth";


async function fetchLogout() {
  await api.post("/session/logout"); 
}

export function useLogout() {
  const { remove } = UseAuth();

  const mutation = useMutation({
    mutationFn: fetchLogout,
    onSuccess() {
      remove(); 
      toast.success("Deslogado com sucesso!");
    },
    onError(err: any) {
      toast.error("Erro ao deslogar");
      console.error(err);
    },
  });

  return mutation; // vai ter mutate, isLoading, isError etc
}
