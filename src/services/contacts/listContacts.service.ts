import { Repository } from "typeorm";
import Contact from "../../entities/contact.entity";
import { AppDataSource } from "../../data-source";
import { listContactsSchema } from "../../schemas/contacts.schemas";
import { tListContacts } from "../../interfaces/contacts.interfaces";

const listContactsService = async (id: string): Promise<tListContacts> => {
  const contactRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);

  const foundContacts: Contact[] = await contactRepository.find({
    where: {
      client: {
        id,
      },
    },
  });

  const contacts = listContactsSchema.parse(foundContacts);

  return contacts;
};

export default listContactsService;
