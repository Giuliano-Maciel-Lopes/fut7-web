import z from "zod";

export const ParamsSchemaMatch = z.object({
  stage: z.enum(["GROUP", "SEMI", "FINAL" , "QUARTAS"]).optional(),       
  status: z.enum(["SCHEDULED", "ONGOING", "FINISHED"  ]).optional(),
  timeName: z.string().min(1, "O nome do time é obrigatório").optional(),
});

// Tipo inferido do Zod
export type ParamsMatch = z.infer<typeof ParamsSchemaMatch>;
