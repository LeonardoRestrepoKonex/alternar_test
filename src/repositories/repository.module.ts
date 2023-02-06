import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as entities from '../entities/index.entity';
@Module({
  imports: [
    TypeOrmModule.forFeature(Object.keys(entities).map((i) => entities[i])),
  ],
})
export class RepositoryModule {
  static forFeature(services: any[]) {
    return {
      module: RepositoryModule,
      providers: services,
      exports: services,
    };
  }
}
