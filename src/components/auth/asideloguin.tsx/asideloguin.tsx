import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useLoguinForm } from "@/hooks/auth/useloguin/form";
import { UseLoguin } from "@/hooks/auth/useloguin/query";
import { LayoutAuth } from "../asidelayout";
import { useToggle } from "@/hooks/usetoggle";

type Props = {
  toggleButton: () => void;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
};

export function Asideloguin({ toggleButton, isOpen, onOpenChange }: Props) {
  const { errors, handleSubmit, register } = useLoguinForm();
  const { data } = UseLoguin();

  return (
    <LayoutAuth
        toggleButton={toggleButton}
        buttonText="Criar uma conta"
        title="Preparado para entrar em campo?"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
    
    <form className="flex flex-col gap-4">
      
        <Input
          placeholder="ex: @gmail.com"
          legend="email"
          {...register("email")}
        />
        <Input
          placeholder="digite sua senha"
          legend="senha"
          {...register("password")}
        />
        <Button type="submit" size={"lg"} variant={"secundary"} className=" w-full">
          ENTRAR
        </Button>

      
    </form>
    </LayoutAuth>
  );
}
