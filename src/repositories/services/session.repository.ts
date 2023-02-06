import { Session } from '../../entities/index.entity';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class SessionRepositoryService {
  constructor(
    private config: ConfigService,
    @InjectRepository(Session) private sessionRepository: Repository<Session>,
  ) {}

  async getPlayerSessionByToken(token: string): Promise<any> {
    return await this.sessionRepository
      .createQueryBuilder('session')
      .where('session.token = :token', { token })
      .leftJoinAndSelect('session.player', 'player')
      .leftJoinAndSelect('player.currency', 'currency')
      .leftJoinAndSelect('player.country', 'country')
      .getOne();
  }
  async getPlayerSessionByPlayerId(playerId: string): Promise<any> {
    return await this.sessionRepository
      .createQueryBuilder('session')
      .where('session.player = :playerId', { playerId })
      .andWhere('session.active = true')
      .getOne();
  }
}
