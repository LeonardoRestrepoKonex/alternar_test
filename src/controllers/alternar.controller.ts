/* eslint-disable @typescript-eslint/no-var-requires */
import {
  CancelAllClientBonusesRepositoryResponseDTO,
  CancelAllClientBonusesServiceRequestDTO,
  CancelClientBonusRepositoryResponseDTO,
  CancelClientBonusServiceRequestDTO,
  CreateBonusByCodeRepositoryResultDTO,
  CreateBonusByCodeServiceRequestDTO,
  CreateBonusByDepositRepositoryResultDTO,
  CreateBonusByDepositServiceRequestDTO,
  CreateUserRepositoryResultDTO,
  CreateUserServiceRequestDTO,
  GetActiveBonusesByPlanIRepositoryResponseDTO,
  GetActiveBonusesByPlanIServiceRequestDTO,
  GetBonusPlansForClientRepositoryResponseDTO,
  GetBonusPlansForClientServiceRequestDTO,
  GetClientBonusHistoryRepositoryResultDTO,
  GetClientBonusHistoryServiceRequestDTO,
  GetClientBonusInfoRepositoryResultDTO,
  GetClientBonusInfoServiceRequestDTO,
  GetClientOpenBonusesRepositoryResultDTO,
  GetClientOpenBonusesServiceRequestDTO,
  GetCurrentBonusCampsByExtUserIdRepositoryeResponseDTO,
  GetCurrentBonusCampsByExtUserIdServiceRequestDTO,
} from '../dto/alternar.dto';
import {
  AlternarBadResponse,
  AlternarParseToSimpleJSON,
  AlternarSuccessResponse,
} from '../helpers/xmlResponse.helper';
import {
  Body,
  Controller,
  Get,
  Header,
  HttpCode,
  HttpStatus,
  Post,
  Res,
} from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AlternarService } from '../services/alternar.service';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const convert = require('xml-js');
import { Response } from 'express';

@ApiTags('alternar')
@Controller('alternar')
export class AlternarController {
  constructor(private readonly alternarService: AlternarService) {}

  @HttpCode(200)
  @ApiOperation({ summary: 'Test endpoint' })
  @ApiOkResponse({ type: String })
  @Get('/ping')
  ping(): string {
    return 'pong';
  }

  @HttpCode(200)
  @ApiOperation({ summary: 'Create user on alternar' })
  @ApiOkResponse({
    description: 'Result',
    type: CreateUserRepositoryResultDTO,
  })
  @Post('createUser')
  createUser(@Body() body: CreateUserServiceRequestDTO) {
    return this.alternarService.CreateUser(body);
  }

  @HttpCode(200)
  @ApiOperation({
    summary:
      'Used to create a bonus account for the user. Bonus amount and withdrawal requirements are established according to the bonus plan. The bonus plan is selected based on the code sent by. All amounts are in cents, i.e. 100.00 (USD) will be sent as 10000.',
  })
  @ApiOkResponse({
    description: 'Result',
    type: CreateBonusByCodeRepositoryResultDTO,
  })
  @Post('CreateBonusByCode')
  CreateBonusByCode(@Body() body: CreateBonusByCodeServiceRequestDTO) {
    return this.alternarService.CreateBonusByCode(body);
  }
  @HttpCode(200)
  @ApiOperation({
    summary:
      'Used to create a bonus account for the user. Bonus amount and withdrawal requirements are established according to the bonus plan. The bonus plan is selected based on the deposit sent by. All amounts are in cents, i.e. 100.00 (USD) will be sent as 10000.',
  })
  @ApiOkResponse({
    description: 'Result',
    type: CreateBonusByDepositRepositoryResultDTO,
  })
  @Post('CreateBonusByDeposit')
  CreateBonusByDeposit(@Body() body: CreateBonusByDepositServiceRequestDTO) {
    return this.alternarService.CreateBonusByDeposit(body);
  }
  @HttpCode(200)
  @ApiOperation({
    summary:
      'Returns the information about active user’s bonus account. All amounts are in cents, i.e. 100.00 (USD) will be sent as 10000.',
  })
  @ApiOkResponse({
    description: 'Result',
    type: GetClientBonusInfoRepositoryResultDTO,
  })
  @Post('GetClientBonusInfo')
  GetClientBonusInfo(@Body() body: GetClientBonusInfoServiceRequestDTO) {
    return this.alternarService.GetClientBonusInfo(body);
  }
  @HttpCode(200)
  @ApiOperation({
    summary:
      'Returns the information about all user’s bonuses starting from specific date. All amounts are in cents, i.e. 100.00 (USD) will be sent as 10000.',
  })
  @ApiOkResponse({
    description: 'Result',
    type: GetClientOpenBonusesRepositoryResultDTO,
  })
  @Post('GetClientOpenBonuses')
  GetClientOpenBonuses(@Body() body: GetClientOpenBonusesServiceRequestDTO) {
    return this.alternarService.GetClientOpenBonuses(body);
  }
  @HttpCode(200)
  @ApiOperation({
    summary:
      'Returns the information about client’s bonuses in active, init and waiting statuses (except Risk Free Bet bonus waiting status). All amounts are in cents, i.e. 100.00 (USD) will be sent as 10000.',
  })
  @ApiOkResponse({
    description: 'Result',
    type: GetClientBonusHistoryRepositoryResultDTO,
  })
  @Post('GetClientBonusHistory')
  GetClientBonusHistory(@Body() body: GetClientBonusHistoryServiceRequestDTO) {
    return this.alternarService.GetClientBonusHistory(body);
  }
  @HttpCode(200)
  @ApiOperation({
    summary: 'Cancel user’s active bonus if there is some.',
  })
  @ApiOkResponse({
    description: 'Result',
    type: CancelClientBonusRepositoryResponseDTO,
  })
  @Post('CancelClientBonus')
  CancelClientBonus(@Body() body: CancelClientBonusServiceRequestDTO) {
    return this.alternarService.CancelClientBonus(body);
  }
  @HttpCode(200)
  @ApiOperation({
    summary:
      'Cancel user’s bonuses in active, init and waiting (except Risk Free Bet bonus waiting status) statuses if there are some.',
  })
  @ApiOkResponse({
    description: 'Result',
    type: CancelAllClientBonusesRepositoryResponseDTO,
  })
  @Post('CancelAllClientBonuses')
  CancelAllClientBonuses(
    @Body() body: CancelAllClientBonusesServiceRequestDTO,
  ) {
    return this.alternarService.CancelAllClientBonuses(body);
  }
  @HttpCode(200)
  @ApiOperation({
    summary: 'Returns all active bonuses for a particular bonus plan.',
  })
  @ApiOkResponse({
    description: 'Result',
    type: GetActiveBonusesByPlanIRepositoryResponseDTO,
  })
  @Post('GetActiveBonusesByPlanId')
  GetActiveBonusesByPlanId(
    @Body() body: GetActiveBonusesByPlanIServiceRequestDTO,
  ) {
    return this.alternarService.GetActiveBonusesByPlanId(body);
  }
  @HttpCode(200)
  @ApiOperation({
    summary: 'Returns all client bonuses.',
  })
  @ApiOkResponse({
    description: 'Result',
    type: GetCurrentBonusCampsByExtUserIdRepositoryeResponseDTO,
  })
  @Post('GetCurrentBonusCampsByExtUserId')
  GetCurrentBonusCampsByExtUserId(
    @Body() body: GetCurrentBonusCampsByExtUserIdServiceRequestDTO,
  ) {
    return this.alternarService.GetCurrentBonusCampsByExtUserId(body);
  }
  @HttpCode(200)
  @ApiOperation({
    summary: 'Returns bonus companies that can be assigned to a client.',
  })
  @ApiOkResponse({
    description: 'Result',
    type: GetBonusPlansForClientRepositoryResponseDTO,
  })
  @Post('GetBonusPlansForClient')
  GetBonusPlansForClient(
    @Body() body: GetBonusPlansForClientServiceRequestDTO,
  ) {
    return this.alternarService.GetBonusPlansForClient(body);
  }

  @HttpCode(200)
  @Header('content-type', 'application/xml')
  @Post('xml/GetAccountDetails')
  async GetAccountDetails(@Body() body: any, @Res() response: Response) {
    const name = 'GetAccountDetails';
    const jsonBody = convert.xml2js(body, {
      compact: true,
    });
    const method = jsonBody.PKT.Method._attributes.Name;
    const token = jsonBody.PKT.Method.Params.Token._attributes.Value;
    const data = AlternarParseToSimpleJSON(jsonBody.PKT.Method.Params);

    let result: any;
    if (method === name) {
      result = await this.alternarService.GetAccountDetails(token);
    } else {
      return response
        .status(HttpStatus.BAD_REQUEST)
        .send(AlternarBadResponse(name, 'Bad Request', HttpStatus.BAD_REQUEST));
    }
    if (result.status !== 'ok') {
      return response
        .status(HttpStatus.BAD_REQUEST)
        .send(AlternarBadResponse(name, 'Bad Request', HttpStatus.BAD_REQUEST));
    }
    return response
      .status(HttpStatus.OK)
      .send(AlternarSuccessResponse(name, result.data));
  }

  @HttpCode(200)
  @Header('content-type', 'application/xml')
  @Post('xml/GetAccountByExternalID')
  async GetAccountByExternalID(@Body() body: any, @Res() response: Response) {
    const name = 'GetAccountByExternalID';
    const jsonBody = convert.xml2js(body, {
      compact: true,
    });
    const method = jsonBody.PKT.Method._attributes.Name;
    const data = AlternarParseToSimpleJSON(jsonBody.PKT.Method.Params);
    let result: any;
    if (method === name) {
      result = await this.alternarService.GetAccountByExternalID(
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        data.ExternalId,
      );
    } else {
      return response
        .status(HttpStatus.BAD_REQUEST)
        .send(AlternarBadResponse(name, 'Bad Request', HttpStatus.BAD_REQUEST));
    }
    if (result.status !== 'ok') {
      return response
        .status(HttpStatus.BAD_REQUEST)
        .send(AlternarBadResponse(name, 'Bad Request', HttpStatus.BAD_REQUEST));
    }
    return response
      .status(HttpStatus.OK)
      .send(AlternarSuccessResponse(name, result.data));
  }

  @HttpCode(200)
  @Header('content-type', 'application/xml')
  @Post('xml/PlaceBet')
  async PlaceBet(@Body() body: any, @Res() response: Response) {
    const name = 'PlaceBet';
    const jsonBody = convert.xml2js(body, {
      compact: true,
    });
    const method = jsonBody.PKT.Method._attributes.Name;
    const data: any = AlternarParseToSimpleJSON(jsonBody.PKT.Method.Params);
    const token = data.Token;
    const dataBet = {
      betData: {
        reference: data.BetReferenceNum,
        amount: data.BetAmount,
        gameReference: data.GameReference,
        description: data.Description,
        siteId: data.SiteId,
        frontendType: data.FrontendType,
        eventDescription: data.Bet.Events,
        status: data.BetStatus,
        sportId: data.SportIDs,
        clientIp: data.ClientIP,
        betMode: data.BetMode,
        isSystem: data.Bet.IsSystem,
        eventCount: data.Bet.EventCount,
        bankerCount: data.Bet.BankerCount,
        player: data.ExternalUserID,
      },
      transactions: [
        {
          identifier: data.TransactionID,
          amount: data.BetAmount,
        },
      ],
      betStakes: [
        {
          combLength: data.Bet.BetStake.CombLength,
          winnings: data.Bet.BetStake.Winnings,
          multipleBonus: data.Bet.BetStake.MultipleBonus,
          odds: data.Bet.BetStake.Odds,
        },
      ],
      events: data.Bet.EventList.Event.map((i) => ({
        identifier: i.EventID,
        categoryId: i.CategoryID,
        championshipId: i.ChampionshipID,
        sportId: i.SportID,
        extEventId: i.ExtEventID,
        eventDate: i.EventDate,
        markets: [
          {
            identifier: i.Market.MarketID,
            value: i.Market.Market,
            extType: i.Market.ExtType,
            outcome: i.Market.Outcome,
            odds: i.Market.Odds,
          },
        ],
      })),
    };
    let result: any;
    if (method === name) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      result = await this.alternarService.PlaceBet(dataBet, token);
    } else {
      return response
        .status(HttpStatus.BAD_REQUEST)
        .send(AlternarBadResponse(name, 'Bad Request', HttpStatus.BAD_REQUEST));
    }
    if (result.status !== 'ok') {
      return response
        .status(HttpStatus.BAD_REQUEST)
        .send(AlternarBadResponse(name, 'Bad Request', HttpStatus.BAD_REQUEST));
    }
    return response
      .status(HttpStatus.OK)
      .send(AlternarSuccessResponse(name, result.data));
  }
}
