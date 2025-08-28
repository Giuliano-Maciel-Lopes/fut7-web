import { api } from "@/services/axios";
import { useMutation } from "@tanstack/react-query";
import { CreateSessionInput } from "@/schemazod/session/creat";
import { errosApiMessage } from "@/utils/ErrosApi";
import { useState } from "react";

async function FetchData(data: CreateSessionInput) {
  const res = await api.post("/session", data);

  return res.data;
}

export function UseLoguin() {
  const [erroMsg , setErroMsg] = useState<null|string>(null)


  const mutation = useMutation({
    mutationFn: FetchData,
    onSuccess(data) {
      console.log(data);
    },

    onError(error) {
     const message =  errosApiMessage(error);
     setErroMsg(message)
    },
  });
  return { ...mutation , erroMsg };
}
