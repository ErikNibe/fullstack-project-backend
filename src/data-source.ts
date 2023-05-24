import { DataSource, DataSourceOptions } from "typeorm";
import "dotenv/config";
import Client from "./entities/client.entity";
import Contact from "./entities/contact.entity";
import { CreateTables1684947377498 } from "./migrations/1684947377498-createTables";

const DataSourceConfig = (): DataSourceOptions => {
  if (!process.env.DATABASE_URL) {
    throw new Error("Env var DATABASE_URL does not exists");
  }

  return {
    type: "postgres",
    url: process.env.DATABASE_URL,
    synchronize: false,
    logging: true,
    entities: [Client, Contact],
    migrations: [CreateTables1684947377498],
  };
};

const AppDataSource: DataSource = new DataSource(DataSourceConfig());

export { AppDataSource };
