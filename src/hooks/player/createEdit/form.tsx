import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { PlayerBodySchema,  } from "@/schemazod/player/create";
import { PlayerBodySchemaupdate } from "@/schemazod/player/update";
import { Player } from "@shared/prisma";
import z from "zod";

type Props = {
  player?: Player;
};

export function useCreateEditPlayerForm({ player }: Props) {
  const isEdit = !!player;

  const schema = isEdit ? PlayerBodySchemaupdate : PlayerBodySchema;

   type SchemaInput =
    | z.infer<typeof PlayerBodySchema>
    | z.infer<typeof PlayerBodySchemaupdate>;

  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue
  } = useForm< SchemaInput>({
    resolver: zodResolver(schema),
    defaultValues: {
      nameCart: player?.nameCart ?? undefined,
      number: player?.number ?? undefined,
      position: player?.position ?? undefined,
      photoUrl: player?.photoUrl ?? undefined,
    },
  });

  return { register, errors, handleSubmit ,setValue};
}
export type UseCreateEditPlayerFormReturn = ReturnType<
  typeof useCreateEditPlayerForm
>;
