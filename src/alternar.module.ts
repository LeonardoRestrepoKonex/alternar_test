import { XMLMiddleware } from './middlewares/xml.middleware';
import { RepositoryModule } from './repositories/repository.module';
import {
  BetRepositoryService,
  PlayerRepositoryService,
  SessionRepositoryService,
} from './repositories/services';
import {
  HttpModule,
  MiddlewareConsumer,
  Module,
  RequestMethod,
} from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { HttpConfigService } from './services/http.service';
import { AlternarController } from './controllers/alternar.controller';
import { AlternarService } from './services/alternar.service';
import { BetService } from './services/bet.service';
import { CoreTypeOrmConfigService } from './config';
import { TypeOrmModule } from '@nestjs/typeorm';
import Configuration from './config/configuration';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [Configuration],
    }),

    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useClass: CoreTypeOrmConfigService,
    }),

    RepositoryModule.forFeature([
      SessionRepositoryService,
      PlayerRepositoryService,
      BetRepositoryService,
    ]),
    HttpModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useClass: HttpConfigService,
    }),
  ],
  controllers: [AlternarController],
  providers: [AlternarService, BetService],
})
export class AlternarModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(XMLMiddleware).forRoutes({
      path: 'alternar/xml/*',
      method: RequestMethod.POST,
    });
  }
}
