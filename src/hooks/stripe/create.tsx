import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { api } from "@/services/axios";
import { errosApiMessage } from "@/utils/ErrosApi";
import { TeamBodySchemaInputStripe  } from "@/schemazod/team/createStripe";

type api = {
  url: string;
 
};

async function createCheckoutSession( data:TeamBodySchemaInputStripe) {
  const response = await api.post<api>("/stripe/payment", data) ;
  return response.data.url;
}

export function useStripeCheckout() {
  return useMutation({
    mutationFn: createCheckoutSession,
    onSuccess: (data) => {
      window.location.href = data;
    },
    onError: (error, ) => {
    const msg =  errosApiMessage(error)
    toast.error(msg)
    },
  });
}
