import { Input } from "@/components/ui/input";
import { CreatEditLayout } from "../layouts";
import { Button } from "@/components/ui/button";
import { UseCreateEditPlayerFormReturn } from "@/hooks/player/createEdit/form";
import { Uploadinput } from "@/hooks/uplods/uploads";

type Props = {
  editCreat: UseCreateEditPlayerFormReturn;
  uploadfile: Uploadinput;
  onConfirm:()=>void
};

export function CreateEditForm({ editCreat, uploadfile ,onConfirm }: Props) {
  const { errors, register } = editCreat;
  const { error, file, setFile } = uploadfile;
  return (
    <CreatEditLayout className="w-full h-auto">
      <h1 className="text-blue-600 font">
        FALA JOGADOR! AQUI VOCE PDE CRIAR E EDITAR SUAS CARTA{" "}
      </h1>
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
          className="h-52 text-center "
          type="file"
          legend="Imagem"
          error={error}
          onChange={(e) => {
            const file = e.target.files?.[0] ?? null;
            setFile(file);
          }}
        />

        <Button onClick={onConfirm} >Salvar</Button>
      </form>
    </CreatEditLayout>
  );
}
