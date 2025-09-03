import { z } from "zod";

export const PlayerBodySchema = z.object({
  nameCart: z.string().trim().min(1, "O nome é obrigatório"),
  position: z.enum(
    ["GOLEIRO", "DEFENSOR", "MEIOCAMPO", "ATACANTE"],
    "escolha uma opçao"
  ),
number: z.coerce.number().int().positive("O número deve ser positivo").optional() as z.ZodOptional<z.ZodNumber>,

  photoUrl: z.string().optional(),

});

export type PlayerInput = z.infer<typeof PlayerBodySchema>;
