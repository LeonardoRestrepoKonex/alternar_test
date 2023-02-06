import { Injectable } from '@nestjs/common';
import {
  CreateBetServiceRequestDTO,
  GetAllBetsServiceRequestDTO,
  GetAllBetsServiceResponseDTO,
  GetBetByIdServiceRequestDTO,
} from 'src/dto/bet.dto';
import { BetRepositoryService } from 'src/repositories/services';

@Injectable()
export class BetService {
  constructor(private betRepositoryService: BetRepositoryService) {}

  async getAllBets(
    data: GetAllBetsServiceRequestDTO,
  ): Promise<GetAllBetsServiceResponseDTO> {
    const { playerId, page, perPage } = data;
    let records = [];
    if (playerId) {
      records = await this.betRepositoryService.getAllBetsByPlayerId(
        playerId,
        page,
        perPage,
      );
    } else {
      records = records = await this.betRepositoryService.getAllBets(
        page,
        perPage,
      );
    }
    const total = records.length;
    return {
      data: records,
      total,
      page: page,
      last_page: Math.ceil(total / perPage),
    };
  }

  async getBetById(data: GetBetByIdServiceRequestDTO): Promise<any> {
    const { ref, id } = data;
    if (ref && ref === 'true') {
      return await this.betRepositoryService.getBetByRef(id);
    }
    return await this.betRepositoryService.getBetById(id);
  }

  async createBet(data: CreateBetServiceRequestDTO): Promise<any> {
    const {
      // transactions,
      betStakes,
      events,
      betData,
    } = data;
    const newBet = await this.betRepositoryService.createBet(betData);
    const betId = newBet.identifiers[0].id;

    // const transacctionsWhitBetId = [];
    const betStakesWhitBetId = [];
    const marketsWhitEventId = [];

    betStakes.forEach((i) => {
      betStakesWhitBetId.push({
        ...i,
        bet: betId,
      });
    });
    // transactions.forEach((i) => {
    //   transacctionsWhitBetId.push({
    //     ...i,
    //     bet: betId,
    //   });
    // });

    for await (const i of events) {
      const auxEvent = {
        identifier: i.identifier,
        categoryId: i.categoryId,
        championshipId: i.championshipId,
        sportId: i.sportId,
        extEventId: i.extEventId,
        eventDate: i.eventDate,
        bet: betId,
      };
      const markets = i.markets;
      const event = await this.betRepositoryService.createEvents(auxEvent);
      const eventId = event.identifiers[0].id;

      markets.forEach((j) => {
        marketsWhitEventId.push({
          ...j,
          event: eventId,
        });
      });
    }
    await this.betRepositoryService.createBetMarkets(marketsWhitEventId);
    await this.betRepositoryService.createBetStakes(betStakesWhitBetId);
    // await this.betRepositoryService.createBetTransactions(
    //   transacctionsWhitBetId
    // );
  }

  async updateBet(data: any): Promise<any> {
    const { transactions, betStakes, events, betData } = data;
    const bet = await this.betRepositoryService.getBetByIdOnlyBet(betData.id);
    if (!bet) {
      return { message: 'Apuesta no encontrada' };
    }

    const oldTransactions = transactions.filter((i) => i.id && i.bet);
    const oldStakes = betStakes.filter((i) => i.id && i.bet);
    const oldEvents = events.filter((i) => i.id && i.bet);

    const newTransactions = transactions.filter((i) => !i.id && !i.bet);
    const newStakes = betStakes.filter((i) => !i.id && !i.bet);
    const newEvents = events.filter((i) => !i.id && !i.bet);

    newTransactions.map((i) => (i.bet = bet.id));
    newStakes.map((i) => (i.bet = bet.id));
    newEvents.map((i) => (i.bet = bet.id));

    const newMarkers = [];
    const oldMarkers = [];

    oldEvents.forEach((i) => {
      i.markets.forEach((j) => {
        if (j.id && j.event) {
          oldMarkers.push(j);
        } else {
          newMarkers.push({
            identifier: j.identifier,
            value: j.value,
            extType: j.extType,
            outcome: j.outcome,
            odds: j.odds,
            event: i.id,
          });
        }
      });
    });

    for await (const i of newEvents) {
      const event = await this.betRepositoryService.createEvents(i);
      const eventId = event.identifiers[0].id;
      i.markets.forEach((j) => {
        newMarkers.push({
          identifier: j.identifier,
          value: j.value,
          extType: j.extType,
          outcome: j.outcome,
          odds: j.odds,
          event: eventId,
        });
      });
    }

    await this.betRepositoryService.createBetMarkets(newMarkers);
    await this.betRepositoryService.createBetStakes(newStakes);
    await this.betRepositoryService.createBetTransactions(newTransactions);

    for await (const i of oldTransactions) {
      await this.betRepositoryService.updateTransaction(i.id, i);
    }
    for await (const i of oldEvents) {
      await this.betRepositoryService.updateEvent(i.id, {
        identifier: i.identifier,
        categoryId: i.categoryId,
        championshipId: i.championshipId,
        sportId: i.sportId,
        extEventId: i.extEventId,
        eventDate: i.eventDate,
      });
    }
    for await (const i of oldStakes) {
      await this.betRepositoryService.updateStake(i.id, i);
    }
    await this.betRepositoryService.updateBet(bet.id, betData);
    return bet;
  }
  // async deleteBet(betId: number): Promise<any> {}
}
