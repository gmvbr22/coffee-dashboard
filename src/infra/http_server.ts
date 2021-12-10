import {Service} from 'typedi';
import fastify, {FastifyLoggerInstance} from 'fastify';
import {FastifyInstance} from 'fastify/types/instance';

@Service()
export class HttpServer {
  private _fastify?: FastifyInstance;

  /**
   * Inicializa o Http Server
   *
   * @param logger Logger compativel com fastify
   */
  public initialize(logger: FastifyLoggerInstance) {
    this._fastify = fastify({logger});
  }

  /**
   * Inicializa o servidor HTTP
   *
   * @param port exemplo 3000
   * @param host exemplo: 0.0.0.0
   */
  public async listen(port: string, host: string) {
    await this._fastify?.listen(port, host);
  }
}
