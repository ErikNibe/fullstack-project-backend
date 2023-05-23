import { z } from "zod";

const contactSchema = z.object({
  id: z.string(),
  fullName: z.string().max(200),
  email: z.string().email().max(50),
  phone: z.string().max(20),
  createdAt: z.string(),
});

const createContactSchema = contactSchema.omit({
  id: true,
  createdAt: true,
});

const listContactsSchema = z.array(contactSchema);

const updateContactSchema = createContactSchema.partial();

export {
  contactSchema,
  createContactSchema,
  listContactsSchema,
  updateContactSchema,
};
