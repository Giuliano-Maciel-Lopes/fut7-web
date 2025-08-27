import { api } from "@/services/axios";
import { useMutation } from "@tanstack/react-query";

async function FetchData() {
  const res = await api.get("/session");

  res.data;
}

function UseLoguin() {
  const mutation = useMutation({
    mutationFn:FetchData,
    onSuccess(data,) {
        
    },


  });
  return {mutation}
}
