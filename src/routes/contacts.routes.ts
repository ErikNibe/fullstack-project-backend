import { Router } from "express";
import validateDataMiddleware from "../middlewares/validateData.middleware";
import {
  createContactSchema,
  updateContactSchema,
} from "../schemas/contacts.schemas";
import {
  createContactController,
  deleteContactController,
  listContactsController,
  updateContactController,
} from "../controllers/contacts.controller";
import verifyTokenIsValidMiddleware from "../middlewares/login/verifyTokenIsValid.middleware";
import verifyEmailExistsMiddleware from "../middlewares/verifyEmailExists.middleware";
import verifyContactExistsMiddleware from "../middlewares/contacts/verifyContactExists.middleware";

const contactsRoutes: Router = Router();

contactsRoutes.post(
  "",
  verifyTokenIsValidMiddleware,
  validateDataMiddleware(createContactSchema),
  verifyEmailExistsMiddleware,
  createContactController
);
contactsRoutes.get("", verifyTokenIsValidMiddleware, listContactsController);
contactsRoutes.patch(
  "/:id",
  verifyTokenIsValidMiddleware,
  verifyContactExistsMiddleware,
  validateDataMiddleware(updateContactSchema),
  verifyEmailExistsMiddleware,
  updateContactController
);
contactsRoutes.delete(
  "/:id",
  verifyTokenIsValidMiddleware,
  verifyContactExistsMiddleware,
  deleteContactController
);

export default contactsRoutes;
