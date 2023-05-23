import { Router } from "express";
import loginController from "../controllers/login.controller";
import validateDataMiddleware from "../middlewares/validateData.middleware";
import { loginSchema } from "../schemas/login.schemas";

const loginRoute: Router = Router();

loginRoute.post("", validateDataMiddleware(loginSchema), loginController);

export default loginRoute;
