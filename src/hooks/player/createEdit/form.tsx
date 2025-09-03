import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { PlayerBodySchema } from "@/schemazod/player/create";
import { PlayerBodySchemaupdate } from "@/schemazod/player/update";
import { Player } from "@shared/prisma";
import z from "zod";

type Props = {
  player?: Player | null;
};

export function useCreateEditPlayerForm({ player }: Props) {
  const isEdit = !!player;
  const schema = isEdit ? PlayerBodySchemaupdate : PlayerBodySchema;

  type SchemaInput =
    | z.infer<typeof PlayerBodySchema>
    | z.infer<typeof PlayerBodySchemaupdate>;

  const getFormValues = () => ({
    nameCart: player?.nameCart ?? "",
    number: player?.number ?? undefined,  // ms coisa bunero 
    position: player?.position ?? undefined, // pq  e enum ai vai reclar 
    photoUrl: player?.photoUrl ?? "",
  });

  const { register, formState: { errors }, handleSubmit, setValue, reset } =
    useForm<SchemaInput>({
      resolver: zodResolver(schema),
      defaultValues: getFormValues(),
    });

  //  Atualiza inputs quando player muda
  useEffect(() => {
    if (player) reset(getFormValues());
  }, [player, reset]);

  return { register, errors, handleSubmit, setValue };
}

export type UseCreateEditPlayerFormReturn = ReturnType<
  typeof useCreateEditPlayerForm
>;
