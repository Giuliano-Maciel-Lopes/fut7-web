import { api } from "@/services/axios";
import { useMutation } from "@tanstack/react-query";
import { CreateSessionInput } from "@/schemazod/session/creat";
import { errosApiMessage } from "@/utils/ErrosApi";
import { useState } from "react";
import { toast } from "react-toastify";
import { AuthResponse } from "@/types/auth";

async function FetchData(data: CreateSessionInput) {
  const res = await api.post<AuthResponse>("/session", data);

  return res.data;
}

export function UseLoguin(closedAside?: () => void) {
  const [erroMsg, setErroMsg] = useState<null | string>(null);

  const mutation = useMutation({
    mutationFn: FetchData,
    onSuccess(data) {
      toast.success(`Tenha um bom jogo ${data.datauser.name}`);

      if (closedAside) closedAside()
    },

    onError(error) {
      const message = errosApiMessage(error);
      setErroMsg(message);
    },
  });
  return { ...mutation, erroMsg };
}
