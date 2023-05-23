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

const clientsRoutes = Router();

clientsRoutes.post(
  "",
  validateDataMiddleware(createClientSchema),
  verifyEmailExistsMiddleware,
  createClientController
);
clientsRoutes.get("", verifyTokenIsValidMiddleware, readClientController);
clientsRoutes.patch(
  "",
  verifyTokenIsValidMiddleware,
  validateDataMiddleware(updateClientSchema),
  verifyEmailExistsMiddleware,
  updateClientController
);
clientsRoutes.delete("", verifyTokenIsValidMiddleware, deleteClientController);

export default clientsRoutes;
