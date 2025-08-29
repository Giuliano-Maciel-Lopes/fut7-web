import { api } from "@/services/axios";
import { CreateUserInput } from "@/schemazod/user/creat";
import { useMutation } from "@tanstack/react-query";
import { errosApiMessage } from "@/utils/ErrosApi";
import { useState } from "react";
import { toast } from "react-toastify";
import type { User } from "@shared/prisma";

type ApiUser = Omit<User, "password">;

async function fetchData(data: CreateUserInput) {
  const res = await api.post<ApiUser>("/users", data);

  return res.data;
}

export function useCreateRegister() {
  const [erroMsg, setErroMsg] = useState<null | string>(null);

  const mutation = useMutation({
    mutationFn: fetchData,

    onSuccess(data) {
      toast.success(
        `Seja bem-vindo, ${data.name}! Que comece os jogos `
      );
    },

    onError(errors) {
      const message = errosApiMessage(errors);
      setErroMsg(message);
    },
  });

  return { ...mutation, erroMsg };
}
