import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { PlayerBodySchema, PlayerInput } from "@/schemazod/player/create";
import {
  PlayerBodySchemaupdate,
  updatePlayerInput,
} from "@/schemazod/player/update";
import { Player } from "@shared/prisma";

type Props = {
  player?: Player;
};

export function useCreateEditPlayerForm({ player }: Props) {
  const isEdit = !!player;

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<PlayerInput | updatePlayerInput>({
    resolver: zodResolver(isEdit ? PlayerBodySchemaupdate : PlayerBodySchema),
    defaultValues: {
      nameCart: player?.nameCart ?? undefined,
      number: player?.number ?? undefined,
      position: player?.position ?? undefined,
      photoUrl: player?.photoUrl ?? undefined,
      role: player?.role ?? undefined,
    },
  });

  return { register, errors, handleSubmit };
}
export type UseCreateEditPlayerFormReturn = ReturnType<typeof useCreateEditPlayerForm>;
