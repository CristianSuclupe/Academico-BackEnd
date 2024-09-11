import "reflect-metadata";
import app from "./app";
import { AppDataSoruce } from "./database/connection";
import config from "./config";

const main = async () => {
  try {
    await AppDataSoruce.initialize();
    app.listen(config.port, () => {
      console.log(
        `⚡️[server]: Server running correctly at ${config.host}:${config.port}`
      );
    });
  } catch (error) {
    console.log(error);
  }
};

main();
