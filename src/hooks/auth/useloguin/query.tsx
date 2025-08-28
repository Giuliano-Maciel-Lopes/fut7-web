import { api } from "@/services/axios";
import { useMutation } from "@tanstack/react-query";
import { CreateSessionInput } from "@/schemazod/session/creat";


async function FetchData(data:CreateSessionInput) {
  const res = await api.post("/session" ,data );

 return  res.data;
}

export function UseLoguin() {
  const mutation = useMutation({
    mutationFn:FetchData,
    onSuccess(data,) {
        console.log(data)
        
    },onError(error, variables, context) {
        console.log(error)
    },


  });
  return {...mutation}
}
