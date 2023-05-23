import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import Client from "../../entities/client.entity";
import {
  tClientResponse,
  tCreateClient,
} from "../../interfaces/clients.interfaces";
import { clientResponseSchema } from "../../schemas/clients.schemas";

const createClientService = async (
  data: tCreateClient
): Promise<tClientResponse> => {
  const clientRepository: Repository<Client> =
    AppDataSource.getRepository(Client);

  const client: Client = clientRepository.create(data);
  await clientRepository.save(client);

  const newClient = clientResponseSchema.parse(client);

  return newClient;
};

export default createClientService;
