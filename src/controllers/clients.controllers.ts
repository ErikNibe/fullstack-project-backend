import { Request, Response } from "express";
import createClientService from "../services/clients/createClient.service";
import readClientService from "../services/clients/readClient.service";
import updateClientService from "../services/clients/updateClient.service";
import deleteClientService from "../services/clients/deleteClient.service";

const createClientController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const client = await createClientService(req.body);

  return res.status(201).json(client);
};

const readClientController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const client = await readClientService(res.locals.clientId);

  return res.status(200).json(client);
};

const updateClientController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const client = await updateClientService(req.body, res.locals.clientId);

  return res.json(client);
};

const deleteClientController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  await deleteClientService(res.locals.clientId);

  return res.status(204).send();
};

export {
  createClientController,
  readClientController,
  updateClientController,
  deleteClientController,
};
