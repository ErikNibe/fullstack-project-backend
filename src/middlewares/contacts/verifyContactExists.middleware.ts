import { Request, Response, NextFunction } from "express";
import { Repository } from "typeorm";
import Contact from "../../entities/contact.entity";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors/AppError";

const verifyContactExistsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const contactRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);

  const foundContact: Contact | null = await contactRepository.findOneBy({
    id: req.params.id,
  });

  if (!foundContact) throw new AppError("Contact not found", 404);

  return next();
};

export default verifyContactExistsMiddleware;
