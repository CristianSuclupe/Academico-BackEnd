import { DataSource } from "typeorm";
import config from "../config";

export const AppDataSoruce = new DataSource({
  type: "mssql",
  host: config.host,
  port: config.portDb,
  database: config.database,
  username: config.userDb,
  password: config.passwordDb,
  entities: [],
  synchronize: true,
  options: {
    trustServerCertificate: true,
  },
});
