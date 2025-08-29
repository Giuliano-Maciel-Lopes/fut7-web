import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { LayoutAuth } from "../asidelayout";
import { useCreateRegister } from "@/hooks/auth/useregister/query";
import { useRegisterForm } from "@/hooks/auth/useregister/form";
import { ErrorAlert } from "@/components/erroAlert.tsx/erroalert";

type Props = {
  toggleButton: () => void;
   isOpen: boolean;
  onOpenChange: (open: boolean) => void;
};

export function AsideRegister({ toggleButton, isOpen ,onOpenChange}: Props) {
  const{mutate ,erroMsg , isPending} = useCreateRegister()
  const{errors ,handleSubmit ,register } =useRegisterForm()
  
  const submit = handleSubmit((data)=>{
    mutate(data)
  })

  return (
    <div className="h-screen overflow-y-auto">
      <LayoutAuth
        toggleButton={toggleButton}
        buttonText="ENTRAR NA CONTA"
        title="Preparado para um novo começo?"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
        <form className="flex flex-col gap-3 " onSubmit={submit}>
            <Input
            placeholder="digite seu nome"
            legend="Name"
            error={errors.name?.message}
            {...register("name")}
          />
          <Input
            placeholder="digite seu email"
            legend="Email"
            error={errors.email?.message}
            {...register("email")}
          />
          <Input
            placeholder="digite sua senha"
            legend="Senha"
            type="password"
            error={errors.password?.message}
            {...register("password")}
          />
          <Input
            placeholder="confirme sua senha"
            legend="Confirme a Senha"
            type="password"
            error={errors.confirmPassword?.message}
            {...register("confirmPassword")}
          />

          <Button isLoading={isPending} size={"lg"} type="submit" variant={"secundary"}>CADASTRAR</Button>

          {erroMsg && (<ErrorAlert message={erroMsg}/>)}
        </form>
      </LayoutAuth>
    </div>
  );
}
