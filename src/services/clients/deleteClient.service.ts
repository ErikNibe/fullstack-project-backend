import { Repository } from "typeorm";
import Client from "../../entities/client.entity";
import { AppDataSource } from "../../data-source";
import deleteContactService from "../contacts/deleteContact.service";

const deleteClientService = async (id: string): Promise<void> => {
  const clientRepository: Repository<Client> =
    AppDataSource.getRepository(Client);

  const foundClient: Client | null = await clientRepository.findOne({
    relations: {
      contacts: true,
    },
    where: {
      id,
    },
  });

  if (foundClient) {
    foundClient.contacts.forEach(async (contact) => {
      await deleteContactService(contact.id);
    });
  }

  await clientRepository.remove(foundClient!);
};

export default deleteClientService;
