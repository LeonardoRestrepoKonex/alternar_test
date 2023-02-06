import {
  CancelAllClientBonusesRepositoryRequestDTO,
  CancelAllClientBonusesRepositoryResponseDTO,
  CancelAllClientBonusesServiceRequestDTO,
  CancelClientBonusRepositoryRequestDTO,
  CancelClientBonusRepositoryResponseDTO,
  CancelClientBonusServiceRequestDTO,
  CreateBonusByCodeRepositoryResultDTO,
  CreateBonusByCodeRespositoryRequestDTO,
  CreateBonusByCodeServiceRequestDTO,
  CreateBonusByDepositRepositoryRequestDTO,
  CreateBonusByDepositRepositoryResultDTO,
  CreateBonusByDepositServiceRequestDTO,
  CreateUserRepositoryRequestDTO,
  CreateUserRepositoryResultDTO,
  CreateUserServiceRequestDTO,
  GetActiveBonusesByPlanIServiceRequestDTO,
  GetActiveBonusesByPlanIRepositoryRequestDTO,
  GetActiveBonusesByPlanIRepositoryResponseDTO,
  GetBonusPlansForClientServiceRequestDTO,
  GetClientBonusHistoryRepositoryRequestDTO,
  GetClientBonusHistoryRepositoryResultDTO,
  GetClientBonusHistoryServiceRequestDTO,
  GetClientBonusInfoRepositoryRequestDTO,
  GetClientBonusInfoRepositoryResultDTO,
  GetClientBonusInfoServiceRequestDTO,
  GetClientOpenBonusesRepositoryRequestDTO,
  GetClientOpenBonusesRepositoryResultDTO,
  GetClientOpenBonusesServiceRequestDTO,
  GetCurrentBonusCampsByExtUserIdServiceRequestDTO,
  GetCurrentBonusCampsByExtUserIdRepositoryeResponseDTO,
  GetCurrentBonusCampsByExtUserIdRepositoryeRequestDTO,
  GetBonusPlansForClientRepositoryResponseDTO,
  GetBonusPlansForClientRepositoryRequestDTO,
} from '../dto/alternar.dto';

import { CreateBetServiceRequestDTO } from '../dto/bet.dto';
import {
  BetRepositoryService,
  PlayerRepositoryService,
  SessionRepositoryService,
} from '../repositories/services';
import { HttpService, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AxiosResponse } from 'axios';
import { lastValueFrom } from 'rxjs';
@Injectable()
export class AlternarService {
  constructor(
    private config: ConfigService,
    private http: HttpService,
    private sessionRepositoryService: SessionRepositoryService,
    private playerRepositoryService: PlayerRepositoryService,
    private betRepositoryService: BetRepositoryService,
  ) {
    this.http.axiosRef.interceptors.request.use(
      (request) => {
        return request;
      },
      (err) => {
        return err;
      },
    );
    this.http.axiosRef.interceptors.response.use(
      (response) => {
        if (response.status !== 200) {
          console.log('se callo');
        }
        return response;
      },
      (err) => {
        return err;
      },
    );
  }
  async GetBetExtra(): Promise<any> {
    const body = {
      betId: 26297,
    };
    const result = this.http.post('/api/Reports/GetBetExtra/json', body);
    let response: AxiosResponse<any>;
    try {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      response = (await lastValueFrom(result)).data;
    } catch (err) {
      console.log(err);
    }
    return response;
  }
  async CreateUser(data: CreateUserServiceRequestDTO): Promise<any> {
    const body = {
      ExtUser: {
        LoginName: data.username,
        Currency: data.currency,
        Country: data.country,
        ExternalUserId: data.userId,
        AffiliationPath: data.path,
        UserCode: data.docNumber,
        FirstName: data.name,
        LastName: data.lastName,
        UserBalance: data.balance,
      },
      WalletCode: process.env.WALLET_CODE,
    };
    const result = this.http.post<CreateUserRepositoryRequestDTO>(
      '/api/Bonus/CreateUser/json',
      body,
    );
    let response: AxiosResponse<CreateUserRepositoryResultDTO>;
    try {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      response = (await lastValueFrom(result)).data;
    } catch (err) {
      console.log(err);
    }
    return response;
  }
  async CreateBonusByCode(
    data: CreateBonusByCodeServiceRequestDTO,
  ): Promise<any> {
    const body = {
      ExtUserId: data.userId,
      BonusCode: data.bonusId,
      Deposit: data.amount,
      WalletCode: process.env.WALLET_CODE,
    };
    const result = this.http.post<CreateBonusByCodeRespositoryRequestDTO>(
      '/api/Bonus/CreateBonusByCode/json',
      body,
    );
    let response: AxiosResponse<CreateBonusByCodeRepositoryResultDTO>;
    try {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      response = (await lastValueFrom(result)).data;
    } catch (err) {
      console.log(err);
    }
    return response;
  }
  async CreateBonusByDeposit(
    data: CreateBonusByDepositServiceRequestDTO,
  ): Promise<any> {
    const body = {
      ExtUserId: data.userId,
      BonusPlanId: data.bonusPlanId,
      Deposit: data.amount,
      WalletCode: process.env.WALLET_CODE,
    };
    const result = this.http.post<CreateBonusByDepositRepositoryRequestDTO>(
      '/api/Bonus/CreateBonusByCode/json',
      body,
    );
    let response: AxiosResponse<CreateBonusByDepositRepositoryResultDTO>;
    try {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      response = (await lastValueFrom(result)).data;
    } catch (err) {
      console.log(err);
    }
    return response;
  }
  async GetClientBonusInfo(
    data: GetClientBonusInfoServiceRequestDTO,
  ): Promise<any> {
    const body = {
      ExtUserId: data.userId,
      WalletCode: process.env.WALLET_CODE,
    };
    const result = this.http.post<GetClientBonusInfoRepositoryRequestDTO>(
      '/api/Bonus/GetClientBonusInfo/json',
      body,
    );
    let response: AxiosResponse<GetClientBonusInfoRepositoryResultDTO>;
    try {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      response = (await lastValueFrom(result)).data;
    } catch (err) {
      console.log(err);
    }
    return response;
  }
  async GetClientOpenBonuses(
    data: GetClientOpenBonusesServiceRequestDTO,
  ): Promise<any> {
    const body = {
      ExtUserId: data.userId,
      WalletCode: process.env.WALLET_CODE,
    };
    const result = this.http.post<GetClientOpenBonusesRepositoryRequestDTO>(
      '/api/Bonus/GetClientOpenBonuses/json',
      body,
    );
    let response: AxiosResponse<GetClientOpenBonusesRepositoryResultDTO>;
    try {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      response = (await lastValueFrom(result)).data;
    } catch (err) {
      console.log(err);
    }
    return response;
  }
  async GetClientBonusHistory(
    data: GetClientBonusHistoryServiceRequestDTO,
  ): Promise<any> {
    const body = {
      ExtUserId: data.userId,
      DateFrom: data.date,
      WalletCode: process.env.WALLET_CODE,
    };
    const result = this.http.post<GetClientBonusHistoryRepositoryRequestDTO>(
      '/api/Bonus/GetClientBonusHistory/json',
      body,
    );
    let response: AxiosResponse<GetClientBonusHistoryRepositoryResultDTO>;
    try {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      response = (await lastValueFrom(result)).data;
    } catch (err) {
      console.log(err);
    }
    return response;
  }
  async CancelClientBonus(
    data: CancelClientBonusServiceRequestDTO,
  ): Promise<any> {
    const body = {
      ExtUserId: data.userId,
      DateFrom: data.date,
      WalletCode: process.env.WALLET_CODE,
    };
    const result = this.http.post<CancelClientBonusRepositoryRequestDTO>(
      '/api/Bonus/CancelClientBonus/json',
      body,
    );
    let response: AxiosResponse<CancelClientBonusRepositoryResponseDTO>;
    try {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      response = (await lastValueFrom(result)).data;
    } catch (err) {
      console.log(err);
    }
    return response;
  }
  async CancelAllClientBonuses(
    data: CancelAllClientBonusesServiceRequestDTO,
  ): Promise<any> {
    const body = {
      ExtUserId: data.userId,
      WalletCode: process.env.WALLET_CODE,
    };
    const result = this.http.post<CancelAllClientBonusesRepositoryRequestDTO>(
      '/api/Bonus/CancelAllClientBonuses/json',
      body,
    );
    let response: AxiosResponse<CancelAllClientBonusesRepositoryResponseDTO>;
    try {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      response = (await lastValueFrom(result)).data;
    } catch (err) {
      console.log(err);
    }
    return response;
  }
  async GetActiveBonusesByPlanId(
    data: GetActiveBonusesByPlanIServiceRequestDTO,
  ): Promise<any> {
    const body = {
      bonusPlanId: data.bonusPlanId,
    };
    const result = this.http.post<GetActiveBonusesByPlanIRepositoryRequestDTO>(
      '/api/Bonus/GetActiveBonusesByPlanId/json',
      body,
    );
    let response: AxiosResponse<GetActiveBonusesByPlanIRepositoryResponseDTO>;
    try {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      response = (await lastValueFrom(result)).data;
    } catch (err) {
      console.log(err);
    }
    return response;
  }
  async GetCurrentBonusCampsByExtUserId(
    data: GetCurrentBonusCampsByExtUserIdServiceRequestDTO,
  ): Promise<any> {
    const body = {
      ExtUserId: data.userId,
      WalletCode: process.env.WALLET_CODE,
    };
    const result =
      this.http.post<GetCurrentBonusCampsByExtUserIdRepositoryeRequestDTO>(
        '/api/Bonus/GetCurrentBonusCampsByExtUserId/json',
        body,
      );
    let response: AxiosResponse<GetCurrentBonusCampsByExtUserIdRepositoryeResponseDTO>;
    try {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      response = (await lastValueFrom(result)).data;
    } catch (err) {
      console.log(err);
    }
    return response;
  }
  async GetBonusPlansForClient(
    data: GetBonusPlansForClientServiceRequestDTO,
  ): Promise<any> {
    const body = {
      ExtUserId: data.userId,
      BonusTypeIds: data.types,
      WalletCode: process.env.WALLET_CODE,
    };
    const result = this.http.post<GetBonusPlansForClientRepositoryRequestDTO>(
      '/api/Bonus/GetBonusPlansForClient/json',
      body,
    );
    let response: AxiosResponse<GetBonusPlansForClientRepositoryResponseDTO>;
    try {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      response = (await lastValueFrom(result)).data;
    } catch (err) {
      console.log(err);
    }
    return response;
  }

  async GetAccountDetails(token: string) {
    const result = {
      status: 'error',
      data: {},
    };
    const session = await this.sessionRepositoryService.getPlayerSessionByToken(
      token,
    );

    if (!session || !session.player) {
      return result;
    }
    const player = session.player;

    result.status = 'ok';
    result.data = {
      Token: token,
      Currency: player.currency.code,
      Country: player.country.code,
      ExternalUserID: player.id,
      ExternalUserType: 3,
      AffiliationPath: '0:RedCap,L1|1:Neat,Neat',
      FirstName: player.firstName,
      LastName: player.lastName,
    };
    return result;
  }
  async GetAccountByExternalID(playerId: string) {
    const result = {
      status: 'error',
      data: {},
    };
    const player = await this.playerRepositoryService.getPlayerById(playerId);
    if (!player.id) {
      return result;
    }
    const session =
      await this.sessionRepositoryService.getPlayerSessionByPlayerId(player.id);
    if (!session) {
      return result;
    }
    result.status = 'ok';
    result.data = {
      Token: session.token,
      Currency: player.currency.code,
      Country: player.country.code,
      ExternalUserID: player.id,
      ExternalUserType: 3,
      AffiliationPath: '0:RedCap,L1|1:Neat,Neat',
      FirstName: player.firstName,
      LastName: player.lastName,
    };
    return result;
  }
  async PlaceBet(data: CreateBetServiceRequestDTO, token: string) {
    const result = {
      status: 'error',
      data: {},
    };
    try {
      const { betStakes, events, betData, transactions } = data;
      const newBet = await this.betRepositoryService.createBet(betData);
      const betId = newBet.identifiers[0].id;
      const player = await this.playerRepositoryService.getPlayerById(
        betData.player,
      );

      const transacctionsWhitBetId = [];
      const betStakesWhitBetId = [];
      const marketsWhitEventId = [];

      betStakes.forEach((i) => {
        betStakesWhitBetId.push({
          ...i,
          bet: betId,
        });
      });

      transactions.forEach((i) => {
        transacctionsWhitBetId.push({
          ...i,
          bet: betId,
        });
      });

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
      await this.betRepositoryService.createBetTransactions(
        transacctionsWhitBetId,
      );
      result.status = 'ok';
      result.data = {
        Token: token,
        Balance: player.balance,
        ExtTransactionID: betId,
        AlreadyProcessed: 'true',
      };
      return result;
    } catch (err) {
      console.log(
        '🚀 ~ file: alternar.service.ts:439 ~ AlternarService ~ PlaceBet ~ err',
        err,
      );
      return result;
    }
  }
}
