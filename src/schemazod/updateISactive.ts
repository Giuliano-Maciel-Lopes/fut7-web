import z from "zod";

export const  schemazBOdyIsactiveUpdate = z.object({
    isActive: z.boolean(),
})
export type IsActiveUpdate = z.infer<typeof schemazBOdyIsactiveUpdate>;