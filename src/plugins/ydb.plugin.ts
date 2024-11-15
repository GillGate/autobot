import {Driver, getCredentialsFromEnv, getLogger, getSACredentialsFromJson, IamAuthService } from 'ydb-sdk';
import "dotenv/config";

const logger = getLogger();
const endpoint = process.env.YDB_ENDPOINT;
const database = process.env.YDB_URL;
const saCredentials = getSACredentialsFromJson("../../yandex.dev.serviceAccount.json");
const authService = new IamAuthService(saCredentials);
const driver = new Driver({endpoint, database, authService});

async function run() { 
  if (!await driver.ready(10000)) {
      logger.fatal(`Driver has not become ready in 10 seconds!`);
      process.exit(1);
  }

  await driver.tableClient.withSession(async (session) => {
      // executing requests in a specific session
  });
}

run();