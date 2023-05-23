import { z } from "zod";
import {
  contactSchema,
  createContactSchema,
  listContactsSchema,
} from "../schemas/contacts.schemas";
import { DeepPartial } from "typeorm";

type tContact = z.infer<typeof contactSchema>;
type tCreateContact = z.infer<typeof createContactSchema>;
type tListContacts = z.infer<typeof listContactsSchema>;
type tUpdateContact = DeepPartial<z.infer<typeof createContactSchema>>;

export { tContact, tCreateContact, tListContacts, tUpdateContact };
