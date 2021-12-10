import 'reflect-metadata';

import Container from 'typedi';

import {Config} from './infra/config';
import {HttpServer} from './infra/http_server';

async function main() {
  const config = Container.get(Config);
  await config.loadEnv();

  const server = Container.get(HttpServer);
  await server.listen(config.env!.port!, config.env!.host!);
}

main();
