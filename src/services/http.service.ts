import {
  Injectable,
  HttpModuleOptionsFactory,
  HttpModuleOptions,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import CorerConfig from '../config/types/core';

@Injectable()
export class HttpConfigService implements HttpModuleOptionsFactory {
  constructor(private config: ConfigService) {}

  createHttpOptions(): HttpModuleOptions {
    const config = this.config.get<CorerConfig>('core');
    return {
      baseURL: config.connection.host,
      timeout: config.connection.timeout,
    };
  }
}
