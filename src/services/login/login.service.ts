import { Repository } from "typeorm";
import { tLogin } from "../../interfaces/login.interfaces";
import Client from "../../entities/client.entity";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors/AppError";
import { compare } from "bcryptjs";
import jwt from "jsonwebtoken";
import "dotenv/config";

const loginService = async (data: tLogin): Promise<string> => {
  const clientRepository: Repository<Client> =
    AppDataSource.getRepository(Client);

  const foundClient: Client | null = await clientRepository.findOneBy({
    email: data.email,
  });

  if (!foundClient) throw new AppError("Invalid credentials", 401);

  const pwdMatches = await compare(data.password, foundClient.password);

  if (!pwdMatches) throw new AppError("Invalid credentials", 401);

  const token: string = jwt.sign(
    { email: data.email },
    String(process.env.SECRET_KEY),
    {
      expiresIn: "24h",
      subject: String(foundClient.id),
    }
  );

  return token;
};

export default loginService;
