import { Request, Response, NextFunction } from "express";
import { Repository } from "typeorm";
import Client from "../entities/client.entity";
import { AppDataSource } from "../data-source";
import { AppError } from "../errors/AppError";
import Contact from "../entities/contact.entity";

const verifyEmailExistsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const clientRepository: Repository<Client> =
    AppDataSource.getRepository(Client);
  const contactRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);

  const foundClient: Client | null = await clientRepository.findOne({
    where: {
      email: req.body.email,
    },
  });

  const foundContact: Contact | null = await contactRepository.findOne({
    where: {
      email: req.body.email,
    },
  });

  if (foundClient || foundContact) {
    throw new AppError("Email already exists", 409);
  }

  return next();
};

export default verifyEmailExistsMiddleware;
