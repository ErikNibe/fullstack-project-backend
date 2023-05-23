import { Repository } from "typeorm";
import Client from "../../entities/client.entity";
import { AppDataSource } from "../../data-source";

const deleteClientService = async (id: string): Promise<void> => {
  const clientRepository: Repository<Client> =
    AppDataSource.getRepository(Client);

  const foundClient: Client | null = await clientRepository.findOneBy({
    id,
  });

  await clientRepository.remove(foundClient!);
};

export default deleteClientService;
