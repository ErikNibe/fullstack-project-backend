import { z } from "zod";
import {
  clientContactsResponseSchema,
  clientResponseSchema,
  clientSchema,
  createClientSchema,
} from "../schemas/clients.schemas";
import { DeepPartial } from "typeorm";

type tClient = z.infer<typeof clientSchema>;
type tCreateClient = z.infer<typeof createClientSchema>;
type tClientResponse = z.infer<typeof clientResponseSchema>;
type tUpdateClient = DeepPartial<z.infer<typeof createClientSchema>>;
type tClientContactResponse = z.infer<typeof clientContactsResponseSchema>;

export {
  tClient,
  tCreateClient,
  tClientResponse,
  tUpdateClient,
  tClientContactResponse,
};
