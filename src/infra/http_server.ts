import {Service} from 'typedi';

import fastify from 'fastify';
import {FastifyInstance} from 'fastify/types/instance';

@Service()
export class HttpServer {
  private _fastify?: FastifyInstance;

  /**
   * Inicializa o Http Server
   */
  public constructor() {
    this._fastify = fastify({logger: {}});
  }

  /**
   * Inicializa o servidor HTTP
   *
   * @param port exemplo 3000
   * @param host exemplo: 0.0.0.0
   */
  public async listen(port: number, host: string) {
    await this._fastify?.listen(port, host);
  }
}
