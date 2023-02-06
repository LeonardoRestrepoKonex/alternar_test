import {
  CreateBetStakeItemDTO,
  CreateBetTransactionItemDTO,
} from '../../dto/bet.dto';

import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {
  Bet,
  BetStake,
  Market,
  Transaction,
  Event,
} from 'src/entities/index.entity';

@Injectable()
export class BetRepositoryService {
  constructor(
    private config: ConfigService,
    @InjectRepository(Bet) private betRepository: Repository<Bet>,
    @InjectRepository(Transaction)
    private transactionRepository: Repository<Transaction>,
    @InjectRepository(BetStake)
    private betStakeRepository: Repository<BetStake>,
    @InjectRepository(Event)
    private eventRepository: Repository<Event>,
    @InjectRepository(Market)
    private marketRepository: Repository<Market>,
  ) {}

  async getAllBets(page: number, perPage: number): Promise<any[]> {
    return await this.betRepository
      .createQueryBuilder('bet')
      .leftJoinAndSelect('bet.player', 'player')
      .leftJoinAndSelect('bet.transaction', 'transaction')
      .leftJoinAndSelect('bet.betStake', 'betStake')
      .leftJoinAndSelect('bet.event', 'event')
      .leftJoinAndSelect('event.market', 'market')
      .limit(perPage)
      .offset(page)
      .orderBy('bet.id', 'ASC')
      .getMany();
  }

  async getAllBetsByPlayerId(
    playerId: number,
    page: number,
    perPage: number,
  ): Promise<any[]> {
    return await this.betRepository
      .createQueryBuilder('bet')
      .where('bet.player.id = :playerId', { playerId })
      .leftJoinAndSelect('bet.player', 'player')
      .leftJoinAndSelect('bet.transaction', 'transaction')
      .leftJoinAndSelect('bet.betStake', 'betStake')
      .leftJoinAndSelect('bet.event', 'event')
      .leftJoinAndSelect('event.market', 'market')
      .limit(perPage)
      .offset(page)
      .orderBy('bet.id', 'ASC')
      .getMany();
  }

  async getBetById(betId: number): Promise<any> {
    return await this.betRepository
      .createQueryBuilder('bet')
      .where('bet.id = :betId', { betId })
      .leftJoinAndSelect('bet.player', 'player')
      .leftJoinAndSelect('bet.transaction', 'transaction')
      .leftJoinAndSelect('bet.betStake', 'betStake')
      .leftJoinAndSelect('bet.event', 'event')
      .leftJoinAndSelect('event.market', 'market')
      .getOne();
  }

  async getBetByIdOnlyBet(betId: number): Promise<any> {
    return await this.betRepository
      .createQueryBuilder('bet')
      .where('bet.id = :betId', { betId })
      .getOne();
  }

  async getBetByRef(betId: number): Promise<any> {
    return await this.betRepository
      .createQueryBuilder('bet')
      .where('reference = :betId', { betId })
      .leftJoinAndSelect('bet.player', 'player')
      .leftJoinAndSelect('bet.transaction', 'transaction')
      .leftJoinAndSelect('bet.betStake', 'betStake')
      .leftJoinAndSelect('bet.event', 'event')
      .leftJoinAndSelect('event.market', 'market')
      .getOne();
  }

  async createBetTransactions(transactionList: CreateBetTransactionItemDTO[]) {
    return await this.transactionRepository
      .createQueryBuilder()
      .insert()
      .values(transactionList)
      .execute();
  }

  async createBetStakes(stakesList: CreateBetStakeItemDTO[]) {
    return await this.betStakeRepository
      .createQueryBuilder()
      .insert()
      .values(stakesList)
      .execute();
  }

  async createEvents(event: any) {
    return await this.eventRepository
      .createQueryBuilder()
      .insert()
      .values(event)
      .execute();
  }

  async createBetMarkets(markets: any) {
    return await this.marketRepository
      .createQueryBuilder()
      .insert()
      .values(markets)
      .execute();
  }

  async createBet(betData) {
    return await this.betRepository
      .createQueryBuilder()
      .insert()
      .values(betData)
      .execute();
  }

  async updateEvent(id: number, data: any): Promise<any> {
    return await this.eventRepository.update(id, data);
  }
  async updateMarket(id: number, data: any): Promise<any> {
    return await this.marketRepository.update(id, data);
  }
  async updateStake(id: number, data: any): Promise<any> {
    return await this.betStakeRepository.update(id, data);
  }
  async updateTransaction(id: number, data: any): Promise<any> {
    return await this.transactionRepository.update(id, data);
  }
  async updateBet(id: number, data: any): Promise<any> {
    return await this.betRepository.update(id, data);
  }
}
