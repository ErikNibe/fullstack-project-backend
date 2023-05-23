import { Repository } from "typeorm";
import { tClientContactResponse } from "../../interfaces/clients.interfaces";
import Client from "../../entities/client.entity";
import { AppDataSource } from "../../data-source";
import { clientContactsResponseSchema } from "../../schemas/clients.schemas";

const readClientService = async (
  id: string
): Promise<tClientContactResponse> => {
  const clientRepository: Repository<Client> =
    AppDataSource.getRepository(Client);

  const foundClient = await clientRepository.findOne({
    relations: {
      contacts: true,
    },
    where: {
      id,
    },
  });

  const client = clientContactsResponseSchema.parse(foundClient);

  return client;
};

export default readClientService;
