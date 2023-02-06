import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import CoreConfig from './types/core';
import * as entities from '../entities/index.entity';

@Injectable()
export class CoreTypeOrmConfigService implements TypeOrmOptionsFactory {
  constructor(private config: ConfigService) {}

  createTypeOrmOptions(): TypeOrmModuleOptions {
    const core = this.config.get<CoreConfig>('core');
    return {
      type: 'postgres',
      host: core.database.host,
      port: core.database.port,
      username: core.database.username,
      password: core.database.password,
      database: core.database.database,
      synchronize: false,
      entities: Object.values(entities),
      // logging: true,
    };
  }
}
