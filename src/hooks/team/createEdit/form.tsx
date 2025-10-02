import { useForm , Resolver } from "react-hook-form";
import { TeamBodySchema } from "@/schemazod/team/create";
import { TeamUpdateSchema } from "@/schemazod/team/update";
import { Team } from "@shared/prisma";
import { zodResolver ,  } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import z from "zod";

type Props = {
  team?: Team;
  isAdm:boolean
};

export function useCreateEditFormTeam({ team , isAdm }: Props) {
 

  const isEdit = !!team;

  const schema = isEdit ? TeamUpdateSchema : TeamBodySchema;

  type TeamFormInput = z.infer<typeof schema>;

  const getFormValues = (): TeamFormInput => ({
    name: team?.name ?? "",
    photoUrl: team?.photoUrl ?? "",
    captainId: isAdm ? team?.captainId ?? undefined : undefined,
    groupId: isAdm ? team?.groupId ?? undefined : undefined,
  });

  const form = useForm<TeamFormInput>({
    resolver: zodResolver(schema) as Resolver<TeamFormInput>,
    defaultValues: getFormValues(),
  });

  // Atualiza inputs quando team muda
  useEffect(() => {
    if (team) form.reset(getFormValues());
  }, [team, form.reset]);

  return form;
}

export type FormTeamReturn = ReturnType<typeof useCreateEditFormTeam>;
