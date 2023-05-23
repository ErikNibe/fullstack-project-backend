import { Repository } from "typeorm";
import Contact from "../../entities/contact.entity";
import { AppDataSource } from "../../data-source";

const deleteContactService = async (id: string): Promise<void> => {
  const contactRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);

  const foundContact: Contact | null = await contactRepository.findOneBy({
    id,
  });

  await contactRepository.remove(foundContact!);
};

export default deleteContactService;
