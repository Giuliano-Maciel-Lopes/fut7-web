import { Input } from "@/components/ui/input";
import { CreatEditLayout } from "../layouts";
import { Button } from "@/components/ui/button";
import { UseCreateEditPlayerFormReturn } from "@/hooks/player/createEdit/form";
import { Uploadinput } from "@/hooks/uplods/uploads";

type Props = {
  editCreat: UseCreateEditPlayerFormReturn;
  uploadfile: Uploadinput;
  onConfirm: () => void;
};

export function CreateEditForm({ editCreat, uploadfile, onConfirm }: Props) {
  const { formState:{errors}, register } = editCreat;
  const { error,  setFile } = uploadfile;
  return (
    <CreatEditLayout  msg=" FALA JOGADOR! AQUI VOCÊ PODE CRIAR E EDITAR SUAS CARTAS" className="w-full h-auto">
     
      <form className="flex flex-col gap-2 text-black">
        <Input
          legend="Nome do Jogador"
          error={errors.nameCart?.message}
          {...register("nameCart")}
        />
        <Input
          legend="Número"
          error={errors.number?.message}
          {...register("number")}
        />

        <Input
          legend="Posição"
          error={errors.position?.message}
          {...register("position")}
        />
        <Input
          className="h-48 text-center "
          type="file"
          legend="Imagem"
          error={error}
          onChange={(e) => {
            const file = e.target.files?.[0] ?? null;
            setFile(file);
          }}
        />

        <Button onClick={onConfirm}>Salvar</Button>
      </form>
    </CreatEditLayout>
  );
}
