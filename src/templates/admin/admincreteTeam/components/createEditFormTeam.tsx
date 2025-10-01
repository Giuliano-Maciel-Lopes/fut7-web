import { Input } from "@/components/ui/input";
import { CreatEditLayout } from "@/templates/letterPlayerPage";
import { Button } from "@/components/ui/button";
import { FormTeamReturn } from "@/hooks/team/createEdit/form";
import { Uploadinput } from "@/hooks/uplods/uploads";

type Props = {
  editCreat: FormTeamReturn;
  uploadfile: Uploadinput;
  onConfirm: () => void;
  isAdm:boolean
};

export function CreatEditFormTeam({ editCreat, uploadfile, onConfirm , isAdm }: Props) {
 

  const {
    formState: { errors },
    register,
  } = editCreat;
  const { error, setFile } = uploadfile;

  return (
    <CreatEditLayout msg="Área de Times" className="w-full h-auto">
      <form className="flex flex-col gap-2 text-black">
        <Input
          legend="Nome do Time"
          error={errors.name?.message}
          {...register("name")}
        />

        {isAdm && (
          <>
            <Input
              legend="Id do Grupo"
              error={errors.groupId?.message}
              {...register("groupId")}
            />

            <Input
              legend="ID do Capitão"
              error={errors.captainId?.message}
              {...register("captainId")}
            />
          </>
        )}

        <Input
          className="h-48 text-center"
          type="file"
          legend="Imagem do Time"
          error={error}
          onChange={(e) => {
            const file = e.target.files?.[0] ?? null;
            setFile(file);
          }}
        />

        <Button type="button" onClick={onConfirm}>
          Salvar
        </Button>
      </form>
    </CreatEditLayout>
  );
}
