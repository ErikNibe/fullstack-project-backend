import { Repository } from "typeorm";
import { tContact, tUpdateContact } from "../../interfaces/contacts.interfaces";
import Contact from "../../entities/contact.entity";
import { AppDataSource } from "../../data-source";
import { contactSchema } from "../../schemas/contacts.schemas";

const updateContactService = async (
  data: tUpdateContact,
  contactId: string,
  clientId: string
): Promise<tContact> => {
  const contactRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);

  const foundContact: Contact | null = await contactRepository.findOneBy({
    id: contactId,
    client: {
      id: clientId,
    },
  });

  const contact = contactRepository.create({
    ...foundContact,
    ...data,
  });
  await contactRepository.save(contact);

  const updatedContact = contactSchema.parse(contact);

  return updatedContact;
};

export default updateContactService;
