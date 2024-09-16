import { DataSource } from "typeorm";
import config from "../config";
import path from "path";
//import { Rol } from "../entities";

export const AppDataSoruce = new DataSource({
  type: "mssql",
  host: config.host,
  port: config.portDb,
  database: config.database,
  username: config.userDb,
  password: config.passwordDb,
  //entities: [Rol],
  entities: [path.join(__dirname, "../entities/index{.js,.ts}")],
  synchronize: true,
  options: {
    trustServerCertificate: true,
  },
});
