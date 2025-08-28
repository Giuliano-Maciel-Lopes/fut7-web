import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { LayoutAuth } from "../asidelayout";

type Props = {
  toggleButton: () => void;
   isOpen: boolean;
  onOpenChange: (open: boolean) => void;
};

export function AsideRegister({ toggleButton, isOpen ,onOpenChange}: Props) {
  return (
    <div>
      <LayoutAuth
        toggleButton={toggleButton}
        buttonText="ENTRAR NA CONTA"
        title="Preparado para um novo começo?"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
        <form className="flex flex-col gap-3">
          <Input placeholder="digite seu nome" legend="name" />
          <Input placeholder="digite seu email" legend="eamil" />
          <Input placeholder="digite sua senha" legend="senha" />
          <Input placeholder="confirme sua senha" legend="senha" />

          <Button size={"lg"} type="submit">CADASTRAR</Button>
        </form>
      </LayoutAuth>
    </div>
  );
}
