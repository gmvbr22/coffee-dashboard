import {Service} from 'typedi';

import S from 'fluent-json-schema';
import envSchema from 'env-schema';

export interface Env {
  port: number;
  host: string;
}

@Service()
export class Config {
  public env?: Env;

  /**
   * Carrega as variáveis de ambiente
   */
  public async loadEnv() {
    this.env = envSchema({
      dotenv: true,
      schema: S.object()
        .prop('port', S.string().default('3000').required())
        .prop('host', S.string().default('0.0.0.0').required()),
    });
  }
}
