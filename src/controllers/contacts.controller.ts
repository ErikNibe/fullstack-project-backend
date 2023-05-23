import { Request, Response } from "express";
import createContactService from "../services/contacts/createContact.service";
import listContactsService from "../services/contacts/listContacts.service";
import updateContactService from "../services/contacts/updateContact.service";
import deleteContactService from "../services/contacts/deleteContact.service";

const createContactController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const contact = await createContactService(req.body, res.locals.clientId);

  return res.status(201).json(contact);
};

const listContactsController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const contacts = await listContactsService(res.locals.clientId);
  return res.status(200).json(contacts);
};

const updateContactController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const contact = await updateContactService(
    req.body,
    req.params.id,
    res.locals.clientId
  );

  return res.json(contact);
};

const deleteContactController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  await deleteContactService(req.params.id);

  return res.status(200);
};

export {
  createContactController,
  listContactsController,
  updateContactController,
  deleteContactController,
};
