/* eslint-disable @typescript-eslint/ban-ts-comment */
import {
  Injectable,
  HttpModuleOptionsFactory,
  HttpModuleOptions,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class HttpConfigService implements HttpModuleOptionsFactory {
  constructor(private config: ConfigService) {}

  createHttpOptions(): HttpModuleOptions {
    return {
      baseURL: process.env.CONN_TIMEOUT,
      // @ts-ignore
      timeout: process.env.CONN_HOST,
    };
  }
}
