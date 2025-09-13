import { useForm } from "react-hook-form";
import { TeamBodySchema } from "@/schemazod/team/create";
import { TeamUpdateSchema } from "@/schemazod/team/update";
import { Team } from "@shared/prisma";
import { zodResolver } from "@hookform/resolvers/zod";
import { UseAuth } from "@/hooks/context/useAuth";
import { useEffect } from "react";
import z from "zod";

type Props = {
  team?: Team;
};

export function useCreateEditFormTeam({ team }: Props) {
  const { session } = UseAuth();
  const ADM = session?.datauser.role === "ADMIN";

  const isEdit = !!team;

  const schema = isEdit ? TeamUpdateSchema : TeamBodySchema;

  type TeamFormInput = z.infer<typeof schema>;

  const getFormValues = (): TeamFormInput => ({
    name: team?.name ?? "",
    photoUrl: team?.photoUrl ?? "",
    captainId: ADM ? team?.captainId ?? undefined : undefined,
    groupId: ADM ? team?.groupId ?? undefined : undefined,
  });

  const form = useForm<TeamFormInput>({
    resolver: zodResolver(schema),
    defaultValues: getFormValues(),
  });

  // Atualiza inputs quando team muda
  useEffect(() => {
    if (team) form.reset(getFormValues());
  }, [team, form.reset]);

  return form;
}

export type FormTeamReturn = ReturnType<typeof useCreateEditFormTeam>;
