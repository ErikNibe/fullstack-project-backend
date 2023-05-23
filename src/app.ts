import "reflect-metadata";
import "express-async-errors";
import express from "express";
import cors from "cors";
import { handleAppErrorMiddleware } from "./middlewares/handleAppError.middleware";
import clientsRoutes from "./routes/clients.routes";
import loginRoute from "./routes/login.routes";
import contactsRoutes from "./routes/contacts.routes";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/clients", clientsRoutes);
app.use("/login", loginRoute);
app.use("/contacts", contactsRoutes);

app.use(handleAppErrorMiddleware);

export default app;
