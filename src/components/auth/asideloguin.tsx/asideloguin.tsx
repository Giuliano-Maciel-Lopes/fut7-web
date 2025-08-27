import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function AsideRegister() {
  return (
    <form className="flex flex-col gap-3">
      
      <Input placeholder="ex:@gmail.com" legend="eamil" />
      <Input placeholder="digite sua senha" legend="senha" />
    
    
    </form>
  );
}
