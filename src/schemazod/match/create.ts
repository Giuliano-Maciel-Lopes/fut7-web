import { z } from "zod";

export const MatchBodySchema = z.object({
  stage: z.enum(["GROUP", "QUARTAS", "SEMI", "FINAL"]),
  team1Id: z.uuid(),
  team2Id: z.uuid(),

 date: z.preprocess((val) => {
    if (typeof val === "string" || val instanceof Date) {
      const d = new Date(val);
      if (!isNaN(d.getTime())) return d;
    }
    return undefined;
  }, z.date()),
});
export type MatchBodyInput = z.infer<typeof MatchBodySchema>;
