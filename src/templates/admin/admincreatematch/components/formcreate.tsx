import { CreatEditLayout } from "@/templates/letterPlayerPage";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { UseCreateMatch } from "@/hooks/match/create/query";
import { useCreateMatchForm } from "@/hooks/match/create/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Stage } from "../utils/selectStage";
import { Controller } from "react-hook-form";


export function FormCreateMatch() {
  const {
    handleSubmit,
    formState: { errors },
    register,
    control,
  } = useCreateMatchForm();
  const { mutate, isPending } = UseCreateMatch();

  const onsubmit = handleSubmit((data) => {
    mutate(data);
  });

  return (
    <CreatEditLayout
      msg="Crie uma partida entre 2 times"
      className="text-black text-heading-sm uppercase"
    >
      <form onSubmit={onsubmit} className="flex flex-col gap-3">
        
        <Controller
      
          name="stage"   
          control={control} // o objeto control vindo do useForm()
          render={(
            { field } // field tem value, onChange, onBlur...
          ) => (
            <Select
              onValueChange={field.onChange} // conecta o select com o RHF
              value={field.value} // mantém o valor selecionado
            >
              <SelectTrigger>
                <SelectValue placeholder="Selecione a fase" />
              </SelectTrigger>
              <SelectContent className="bg-white">
                {Stage.map((s) => (
                  <SelectItem className="border" key={s} value={s}>
                    {s}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        />

        <Input
          legend="ID do time 1"
          {...register("team1Id")}
          error={errors.team1Id?.message}
        />
        <Input
          legend="ID do time 2"
          {...register("team2Id")}
          error={errors.team2Id?.message}
        />
        <Input
          legend="Data"
          type="date"
          {...register("date")}
          error={errors.date?.message}
        />
        <Button type="submit" isLoading={isPending}>
          Criar Partida
        </Button>
      </form>
    </CreatEditLayout>
  );
}
