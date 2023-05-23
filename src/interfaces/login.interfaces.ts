import { z } from "zod";
import { loginSchema } from "../schemas/login.schemas";

type tLogin = z.infer<typeof loginSchema>;

export { tLogin };
