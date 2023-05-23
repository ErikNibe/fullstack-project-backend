import { z } from "zod";
import { listContactsSchema } from "./contacts.schemas";

const clientSchema = z.object({
  id: z.string(),
  fullName: z.string().max(200),
  email: z.string().email().max(50),
  password: z.string().max(100),
  phone: z.string().max(20),
  createdAt: z.string(),
});

const createClientSchema = clientSchema.omit({
  id: true,
  createdAt: true,
});

const clientResponseSchema = clientSchema.omit({ password: true });

const clientContactsResponseSchema = clientResponseSchema.extend({
  contacts: listContactsSchema,
});

const updateClientSchema = createClientSchema.partial();

export {
  clientSchema,
  createClientSchema,
  clientResponseSchema,
  updateClientSchema,
  clientContactsResponseSchema,
};
