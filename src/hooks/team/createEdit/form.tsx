import { useForm } from "react-hook-form";
import { TeamBodySchema, TeamBodySchemaInput } from "@/schemazod/team/create";
import { TeamUpdateSchema, TeamUpdateInput } from "@/schemazod/team/update";
import { Team } from "@shared/prisma";
import { zodResolver } from "@hookform/resolvers/zod";
import { UseAuth } from "@/hooks/context/useAuth";

type Props = {
  team?: Team;
};

export function useCreateEditFormTeam({ team }: Props) {
  const { session } = UseAuth();
  const ADM = session?.datauser.role === "ADMIN";

  const isEdit = !!team;
  const schema = isEdit ? TeamUpdateSchema : TeamBodySchema;

  type SchemaInput = TeamBodySchemaInput | TeamUpdateInput;

  const form = useForm<SchemaInput>({
    resolver: zodResolver(schema),
     defaultValues: {
      captainId: team?.captainId ?? undefined,
      groupId: ADM ? team?.groupId ?? undefined : undefined, // só admins
      name: ADM ? team?.name ?? undefined : undefined,           // só admins
      photoUrl: team?.photoUrl ?? undefined,
    },
  });

  return form;
}

export type FormTeamReturn = ReturnType<typeof useCreateEditFormTeam>;