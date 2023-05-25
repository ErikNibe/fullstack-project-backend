import { Router } from "express";
import {
  createClientController,
  deleteClientController,
  readClientController,
  updateClientController,
} from "../controllers/clients.controllers";
import validateDataMiddleware from "../middlewares/validateData.middleware";
import {
  createClientSchema,
  updateClientSchema,
} from "../schemas/clients.schemas";
import verifyEmailExistsMiddleware from "../middlewares/verifyEmailExists.middleware";
import verifyTokenIsValidMiddleware from "../middlewares/login/verifyTokenIsValid.middleware";
import verifyPhoneExistsMiddleware from "../middlewares/verifyPhoneExists.middleware";

const clientsRoutes = Router();

clientsRoutes.post(
  "",
  validateDataMiddleware(createClientSchema),
  verifyEmailExistsMiddleware,
  verifyPhoneExistsMiddleware,
  createClientController
);
clientsRoutes.get("", verifyTokenIsValidMiddleware, readClientController);
clientsRoutes.patch(
  "",
  verifyTokenIsValidMiddleware,
  validateDataMiddleware(updateClientSchema),
  verifyEmailExistsMiddleware,
  verifyPhoneExistsMiddleware,
  updateClientController
);
clientsRoutes.delete("", verifyTokenIsValidMiddleware, deleteClientController);

export default clientsRoutes;
