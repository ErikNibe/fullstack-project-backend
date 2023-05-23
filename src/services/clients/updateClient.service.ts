import { Repository } from "typeorm";
import {
  tClientResponse,
  tUpdateClient,
} from "../../interfaces/clients.interfaces";
import Client from "../../entities/client.entity";
import { AppDataSource } from "../../data-source";
import { clientResponseSchema } from "../../schemas/clients.schemas";

const updateClientService = async (
  data: tUpdateClient,
  id: string
): Promise<tClientResponse> => {
  const clientRepository: Repository<Client> =
    AppDataSource.getRepository(Client);

  const foundClient: Client | null = await clientRepository.findOneBy({
    id,
  });

  const client = clientRepository.create({
    ...foundClient,
    ...data,
  });
  await clientRepository.save(client);

  const updatedClient = clientResponseSchema.parse(client);

  return updatedClient;
};

export default updateClientService;
