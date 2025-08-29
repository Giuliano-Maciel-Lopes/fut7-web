import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useLoguinForm } from "@/hooks/auth/useloguin/form";
import { UseLoguin } from "@/hooks/auth/useloguin/query";
import { LayoutAuth } from "../asidelayout";
import { ErrorAlert } from "@/components/erroAlert.tsx/erroalert";



type Props = {
  toggleButton: () => void;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  closedAside?:() =>void
};

export function Asideloguin({ toggleButton, isOpen, onOpenChange ,closedAside }: Props) {
  const { errors, handleSubmit, register   } = useLoguinForm();
  const {  mutate , erroMsg , isPending} = UseLoguin(closedAside );

   const submit = handleSubmit((data)=>{

    mutate(data)
    console.log("teste")

  })

  return (
    <LayoutAuth
        toggleButton={toggleButton}
        buttonText="Criar uma conta"
        title="Preparado para entrar em campo?"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
    
    <form className="flex flex-col gap-4" onSubmit={submit}>
      
        <Input
          placeholder="ex: @gmail.com"
          legend="email"
          {...register("email")}
          error={errors.email?.message}
        />
        <Input
          placeholder="digite sua senha"
          legend="senha"
          {...register("password")}
          error={errors.password?.message}
          
        />
        <Button isLoading={isPending}  type="submit" size={"lg"} variant={"secundary"} className=" w-full">
          ENTRAR
        </Button>

{erroMsg && (<ErrorAlert message={erroMsg}/>)}
      
    </form>
    </LayoutAuth>
  );
}
