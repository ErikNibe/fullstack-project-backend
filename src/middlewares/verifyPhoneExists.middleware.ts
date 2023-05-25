import { Request, Response, NextFunction } from "express";
import { Repository } from "typeorm";
import Client from "../entities/client.entity";
import { AppDataSource } from "../data-source";
import { AppError } from "../errors/AppError";
import Contact from "../entities/contact.entity";

const verifyPhoneExistsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const clientRepository: Repository<Client> =
    AppDataSource.getRepository(Client);
  const contactRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);

  if (req.body.phone) {
    const foundClient = await clientRepository.findOne({
      where: {
        phone: req.body.phone,
      },
    });

    const foundContact: Contact | null = await contactRepository.findOne({
      where: {
        phone: req.body.phone,
      },
    });

    if (foundClient || foundContact) {
      throw new AppError("Phone already exists", 409);
    }
  }

  return next();
};

export default verifyPhoneExistsMiddleware;
