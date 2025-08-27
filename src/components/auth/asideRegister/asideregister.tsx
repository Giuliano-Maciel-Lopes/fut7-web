import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function AsideRegister() {
  return (
    <div>
          <form className="flex flex-col gap-3">
      <Input placeholder="digite seu nome" legend="name"  />
      <Input placeholder="digite seu email" legend="eamil" />
      <Input placeholder="digite sua senha" legend="senha" />
      <Input placeholder="confirme sua senha" legend="senha" />

    <Button type="submit"></Button>
    </form>
      
    </div>
  );
}