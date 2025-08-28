import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { UsercreateUserSchema ,CreateUserInput } from "@/schemazod/user/creat";

export function useRegisterForm(){
   const {register , formState:{errors} , handleSubmit   }= useForm<CreateUserInput>({
    resolver:zodResolver(UsercreateUserSchema)

   })
   return{register , errors , handleSubmit}

}