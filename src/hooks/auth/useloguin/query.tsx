import { api } from "@/services/axios";
import { useMutation } from "@tanstack/react-query";
import { CreateSessionInput } from "@/schemazod/session/creat";
import { errosApiMessage } from "@/utils/ErrosApi";
import { useState } from "react";
import { toast } from "react-toastify";
import { AuthResponse } from "@/types/auth";
import { UseAuth } from "@/hooks/context/useAuth";
import { useRouter } from "next/router";

async function FetchData(data: CreateSessionInput) {
  const res = await api.post<AuthResponse>("/session", data);

  return res.data;
}

export function UseLoguin(closedAside?: () => void) {
  const [erroMsg, setErroMsg] = useState<null | string>(null);
  const { save } = UseAuth();
  const router = useRouter();

  const mutation = useMutation({
    mutationFn: FetchData,
    onSuccess(data) {
      toast.success(`Tenha um bom jogo ${data.datauser.name}`);
      save(data);
      if (closedAside) closedAside();
      if (data.datauser.role === "ADMIN") router.push("/admin");
      else if (data.datauser.role === "PLAYER") router.push("/player");
    },

    onError(error) {
      const message = errosApiMessage(error);
      setErroMsg(message);
    },
  });
  return { ...mutation, erroMsg };
}
