import { useContext } from "react";
import { AuthAsideContext } from "@/context/authaside";

export function useAsideAuth() {
  const context = useContext(AuthAsideContext)
  
   if (!context) {
  throw new Error("erro no context useauthmodal");
}
  return context
  
}