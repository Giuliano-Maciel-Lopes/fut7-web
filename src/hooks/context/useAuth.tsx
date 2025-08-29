import { useContext } from "react";
import { AuthContext } from "@/context/auth";

export function UseAuth(){
 const  context =  useContext(AuthContext)

  if (!context) {
  throw new Error("erro no context useAuth");
}

return context
}