import { z } from "zod";

const testRequestSchema = z.object({
    status: z.string()
})

export type TestResponse = z.infer<typeof testRequestSchema>;
