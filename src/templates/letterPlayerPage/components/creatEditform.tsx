import { Input } from "@/components/ui/input";
import { CreatEditLayout } from "../layouts";
import { Button } from "@/components/ui/button";
import { UseCreateEditPlayerFormReturn } from "@/hooks/player/createEdit/form";
import { Uploadinput } from "@/hooks/uplods/uploads";
import { Controller } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { positions } from "@/utils/players";
import { Player } from "@shared/prisma";

type Props = {
  editCreat: UseCreateEditPlayerFormReturn;
  uploadfile: Uploadinput;
  onConfirm: () => void;
    playerPosition?: "GOLEIRO" | "DEFENSOR" | "MEIOCAMPO" | "ATACANTE"; 
};

export function CreateEditForm({ editCreat, uploadfile, onConfirm  ,playerPosition}: Props) {
  const {
    formState: { errors },
    register,
    control,
  } = editCreat;
  const { error, setFile } = uploadfile;
  return (
    <CreatEditLayout
      msg=" FALA JOGADOR! AQUI VOCÊ PODE CRIAR E EDITAR SUAS CARTAS"
      className="w-full h-auto"
    >
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
        <Controller
          name="position"
          control={control}
          defaultValue={playerPosition ?? undefined} 
          render={({ field }) => (
            <Select
              value={field.value || ""} 
              onValueChange={field.onChange}
            >
              <SelectTrigger>
                <SelectValue placeholder="Selecione a posição" />
              </SelectTrigger>
              <SelectContent className="bg-white">
                {positions.map((pos) => (
                  <SelectItem key={pos} value={pos}>
                    {pos}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        />

        {errors.position && (
          <p className="text-red-500 text-sm mt-1">{errors.position.message}</p>
        )}
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
