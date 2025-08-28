import { api } from "@/services/axios";
import { CreateUserInput } from "@/schemazod/user/creat";
import { useMutation } from "@tanstack/react-query";
import { errosApiMessage } from "@/utils/ErrosApi";
import { useState } from "react";

async function fetchData(data: CreateUserInput) {
  const res = await api.post("/users", data);

  return res.data;
}

export function useCreateRegister() {
  const [erroMsg, setErroMsg] = useState<null | string>(null);

  const mutation = useMutation({
    mutationFn: fetchData,

    onSuccess(data) {
      console.log(data);
    },

    onError(errors) {
      const message = errosApiMessage(errors);
      setErroMsg(message);
    },
  });
  
  return { ...mutation, erroMsg };
}
