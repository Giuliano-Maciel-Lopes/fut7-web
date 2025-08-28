import { api } from "@/services/axios";
import { useMutation } from "@tanstack/react-query";

async function FetchData() {
  const res = await api.get("/session");

 return  res.data;
}

export function UseLoguin() {
  const mutation = useMutation({
    mutationFn:FetchData,
    onSuccess(data,) {
        console.log(data)
        
    },onError(error, variables, context) {
        
    },


  });
  return {...mutation}
}
