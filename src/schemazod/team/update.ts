import { z } from "zod";

export const TeamUpdateSchema = z.object({
  name: z.string().min(1, "Nome do time é obrigatório"),
  photoUrl: z.string().optional(),
 captainId: z.preprocess(
    (v) => (v === "" ? undefined : v),
    z.string().uuid({ message: "ID do capitão inválido" }).optional()
  ),
  groupId: z.preprocess(
    (v) => (v === "" ? undefined : v),
    z.string().uuid({ message: "ID do grupo inválido" }).optional()
  ),
});


export type TeamUpdateInput = z.infer<typeof TeamUpdateSchema>;

