import { Player } from '../../entities/index.entity';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PlayerRepositoryService {
  constructor(
    private config: ConfigService,
    @InjectRepository(Player) private playerRepository: Repository<Player>,
  ) {}

  async getPlayerByEmail(email: string): Promise<any> {
    return await this.playerRepository
      .createQueryBuilder('player')
      .where('player.email = :email', { email })
      .leftJoinAndSelect('player.operator', 'operator')
      .leftJoinAndSelect('player.country', 'country')
      .leftJoinAndSelect('player.currency', 'currency')
      .leftJoinAndSelect('player.answerPlayers', 'answerPlayers')
      .getOne();
  }
  async getPlayerById(playerId: string | number): Promise<any> {
    return await this.playerRepository
      .createQueryBuilder('player')
      .where('player.id = :playerId', { playerId })
      .leftJoinAndSelect('player.country', 'country')
      .leftJoinAndSelect('player.currency', 'currency')
      .getOne();
  }
}
