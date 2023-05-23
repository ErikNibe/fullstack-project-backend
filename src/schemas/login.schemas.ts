import { z } from "zod";

const loginSchema = z.object({
  email: z.string().email().max(50),
  password: z.string().max(100),
});

export { loginSchema };
