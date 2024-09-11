import { config } from "dotenv";
config();

export default {
  host: process.env.HOST || "127.0.0.1",
  port: process.env.PORT || 4000,
  portDb: process.env.PORTDB ? parseInt(process.env.PORTDB) : 1433,
  userDb: process.env.USERDB || "",
  passwordDb: process.env.PASSWORDDB || "",
  database: process.env.DATABASE || "",
  secret: process.env.SECRET || "",
};
