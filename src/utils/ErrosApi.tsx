import { AxiosError } from "axios";


export function errosApiMessage(error: unknown): string {
  if (error instanceof AxiosError) {
   
    return error.response?.data?.message || "Erro desconhecido da API";
  }
  
  if (error instanceof Error) {
    return error.message;
  }

  return "Ocorreu um erro inesperado";
}