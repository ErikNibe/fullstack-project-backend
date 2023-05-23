import { Repository } from "typeorm";
import { tContact, tCreateContact } from "../../interfaces/contacts.interfaces";
import Contact from "../../entities/contact.entity";
import { AppDataSource } from "../../data-source";
import Client from "../../entities/client.entity";
import { contactSchema } from "../../schemas/contacts.schemas";

const createContactService = async (
  data: tCreateContact,
  id: string
): Promise<tContact> => {
  const contactRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);
  const clientRepository: Repository<Client> =
    AppDataSource.getRepository(Client);

  const foundClient: Client | null = await clientRepository.findOneBy({
    id,
  });

  const contact = contactRepository.create({
    ...data,
    client: foundClient!,
  });
  await contactRepository.save(contact);

  const newContact = contactSchema.parse(contact);

  return newContact;
};

export default createContactService;
