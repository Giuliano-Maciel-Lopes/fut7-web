import { Input } from "@/components/ui/input";
import { CreatEditLayout } from "../layouts";
import { Button } from "@/components/ui/button";
import { UseCreateEditPlayerFormReturn } from "@/hooks/player/createEdit/form";

export function CreateEditForm(editCreat: UseCreateEditPlayerFormReturn) {
  const { errors, handleSubmit, register } = editCreat;
  return (
    <CreatEditLayout className="w-full h-auto">
      <form>
        <Input
          legend="Nome do Jogador"
          error={errors.nameCart?.message}
          {...register("nameCart")}

        />
        <Input   {...register("number")}/>
        <Input    {...register("photoUrl")}/>
        <Input   {...register("position")} />

        <Button />
      </form>
    </CreatEditLayout>
  );
}
