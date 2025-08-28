import { api } from "@/services/axios";
import { CreateUserInput } from "@/schemazod/user/creat";
import { useMutation } from "@tanstack/react-query";

async function fetchData(data: CreateUserInput) {
  const res = await api.post("/users", data);

  return res.data;
}

export function useCreateRegister() {
const mutation =   useMutation({
    mutationFn: fetchData,
    onSuccess(data) {
      console.log(data);
    },
    onError(errors) {
      console.log(errors);
    },
  });
  return {...mutation}
}
