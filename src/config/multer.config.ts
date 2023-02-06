import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  MulterModuleOptions,
  MulterOptionsFactory,
} from '@nestjs/platform-express';
import CoreConfig from './types/core';

@Injectable()
export class CoreMulterConfigService implements MulterOptionsFactory {
  constructor(private config: ConfigService) {}
  createMulterOptions(): MulterModuleOptions {
    const core = this.config.get<CoreConfig>('core');
    return {
      dest: core.multer.dest,
    };
  }
}
