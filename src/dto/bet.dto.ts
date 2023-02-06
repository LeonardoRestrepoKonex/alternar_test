import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsArray,
  IsInt,
  IsNotEmpty,
  IsNumberString,
  IsOptional,
  Min,
  ValidateNested,
} from 'class-validator';

export class BetsDTO {}

export class GetAllBetsControllerParamDTO {
  @ApiProperty({
    description: 'Player id',
  })
  @IsNotEmpty()
  @IsNumberString()
  playerId: string;
  @ApiProperty({
    description: 'Page',
    required: false,
  })
  @IsOptional()
  page?: string;
  @ApiProperty({
    description: 'Items per page',
    required: false,
  })
  @IsOptional()
  perPage?: string;
}
export class GetAllBetsControllerResponseDTO {
  @ApiProperty({
    description: 'Bets list',
    isArray: true,
  })
  @IsArray()
  @ValidateNested({ each: true })
  data: any[];
  @ApiProperty({
    description: 'Total records',
  })
  @IsInt()
  @Min(0)
  total: number;
  @ApiProperty({
    description: 'Current page',
  })
  @IsInt()
  @Min(0)
  page: number;
  @ApiProperty({
    description: 'Last page',
  })
  @IsInt()
  @Min(0)
  last_page: number;
}

export class GetAllBetsServiceRequestDTO {
  playerId: number;
  page?: number;
  perPage?: number;
}
export class GetAllBetsServiceResponseDTO {
  data: any[];
  total: number;
  page: number;
  last_page: number;
}

export class GetBetByIdControllerQueryDTO {
  @ApiProperty({
    description: 'Bet ref',
  })
  @IsNotEmpty()
  ref: string;
}
export class GetBetByIdControllerParamDTO {
  @ApiProperty({
    description: 'Bet id',
  })
  @IsNotEmpty()
  @IsInt()
  @Min(0)
  id: number;
}
export class GetBetByIdServiceRequestDTO {
  ref?: string;
  id: number;
}

export class CreateBetTransactionItemDTO {
  @ApiProperty({
    description: 'A unique identifier for this transaction',
  })
  @IsNotEmpty()
  identifier: string;
  @ApiProperty({
    description: 'Amount of the bet',
  })
  @IsNotEmpty()
  @IsInt()
  @Min(0)
  amount: number;
}
export class CreateBetStakeItemDTO {
  @ApiProperty({
    description: 'Combination length of BetStake',
  })
  @IsNotEmpty()
  @IsInt()
  @Min(0)
  combLength: number;
  @ApiProperty({
    description: 'Potential winnings',
  })
  @IsNotEmpty()
  @IsInt()
  @Min(0)
  winnings: number;
  @ApiProperty({
    description: 'Bonus which is charged for a combination',
  })
  @IsNotEmpty()
  @IsInt()
  @Min(0)
  multipleBonus: number;
  @ApiProperty({
    description: 'Total odds per combination',
  })
  @IsNotEmpty()
  odds: number;
}
export class CreateBetMarketItemDTO {
  @ApiProperty({
    description: 'Market identifier in internal system',
  })
  @IsNotEmpty()
  identifier: string;
  @ApiProperty({
    description: '',
  })
  @IsNotEmpty()
  value: string;
  @ApiProperty({
    description: 'Market identifier in external data provider ',
  })
  @IsNotEmpty()
  extType: string;
  @ApiProperty({
    description: 'Selected odd’s name',
  })
  @IsNotEmpty()
  outcome: string;
  @ApiProperty({
    description: 'Selected odd’s price',
  })
  @IsNotEmpty()
  odds: number;
}
export class CreateBetEventItemDTO {
  @ApiProperty({
    description: 'Event id',
  })
  @IsNotEmpty()
  identifier: string;
  @ApiProperty({
    description: 'Category identifier in internal system',
  })
  @IsNotEmpty()
  categoryId: string;
  @ApiProperty({
    description: 'Championship identifier in internal system',
  })
  @IsNotEmpty()
  championshipId: string;
  @ApiProperty({
    description: 'Sport identifier in internal system',
  })
  @IsNotEmpty()
  sportId: string;
  @ApiProperty({
    description: 'Event identifier in external data provider',
  })
  @IsNotEmpty()
  extEventId: string;
  @ApiProperty({
    description: 'Start date of the event',
  })
  @IsNotEmpty()
  eventDate: string;
  @ApiProperty({
    description: 'Market list',
    type: CreateBetMarketItemDTO,
    isArray: true,
  })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateBetMarketItemDTO)
  markets: CreateBetMarketItemDTO[];
}
export class CreateBetControllerRequestDTO {
  @ApiProperty({
    description: 'Bet reference',
  })
  @IsNotEmpty()
  reference: string;
  @ApiProperty({
    description: 'Bet amount',
  })
  @IsNotEmpty()
  @IsInt()
  @Min(0)
  amount: number;
  @ApiProperty({
    description: 'Identifier of the Sportsbook product (=SPORTSBOOK2.0)',
  })
  @IsNotEmpty()
  gameReference: string;
  @ApiProperty({
    description: 'Textual description of the bet being placed',
  })
  @IsNotEmpty()
  description: string;
  @ApiProperty({
    description:
      'A 1-digit number that uniquely identifies the calling system. On Prod environment: 7; On Stage: 5',
  })
  @IsNotEmpty()
  siteId: string;
  @ApiProperty({
    description:
      'Identifier of the Frontend Type through which the request is sent (int): 0-Desktop, 1-Mobile, 2-Terminal',
  })
  @IsNotEmpty()
  @IsInt()
  @Min(0)
  frontendType: number;
  @ApiProperty({
    description: 'Event description',
  })
  @IsNotEmpty()
  eventDescription: string;
  @ApiProperty({
    description: 'Bet status',
  })
  @IsNotEmpty()
  status: string;
  @ApiProperty({
    description: 'Sport ids list in internal system',
  })
  @IsNotEmpty()
  sportId: string;
  @ApiProperty({
    description:
      'IP address of a client’s device which was used to access to system',
  })
  @IsNotEmpty()
  clientIp: string;
  @ApiProperty({
    description: 'Mode of bet being placed. Possible values are in Appendix F',
  })
  @IsNotEmpty()
  betMode: string;
  @ApiProperty({
    description: 'If Bet type is Combinations',
  })
  @IsNotEmpty()
  isSystem: boolean;
  @ApiProperty({
    description: 'Number of events in the Bet',
  })
  @IsNotEmpty()
  @IsInt()
  @Min(0)
  eventCount: number;
  @ApiProperty({
    description: 'Number of Bankers in the Bet',
  })
  @IsNotEmpty()
  @IsInt()
  @Min(0)
  bankerCount: number;
  @ApiProperty({
    description: 'User id',
  })
  @IsNotEmpty()
  @IsInt()
  @Min(0)
  player: number;
  @ApiProperty({
    description: 'Transacction list',
    type: CreateBetTransactionItemDTO,
    isArray: true,
  })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateBetTransactionItemDTO)
  transactions: CreateBetTransactionItemDTO[];
  @ApiProperty({
    description: 'Stakes list',
    type: CreateBetStakeItemDTO,
    isArray: true,
  })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateBetStakeItemDTO)
  betStakes: CreateBetStakeItemDTO[];
  @ApiProperty({
    description: 'Events list',
    type: CreateBetEventItemDTO,
    isArray: true,
  })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateBetEventItemDTO)
  events: CreateBetEventItemDTO[];
}

export class CreateBetDataDTO {
  @ApiProperty({
    description: 'Bet reference',
  })
  @IsNotEmpty()
  reference: string;
  @ApiProperty({
    description: 'Bet amount',
  })
  @IsNotEmpty()
  @IsInt()
  @Min(0)
  amount: number;
  @ApiProperty({
    description: 'Identifier of the Sportsbook product (=SPORTSBOOK2.0)',
  })
  @IsNotEmpty()
  gameReference: string;
  @ApiProperty({
    description: 'Textual description of the bet being placed',
  })
  @IsNotEmpty()
  description: string;
  @ApiProperty({
    description:
      'A 1-digit number that uniquely identifies the calling system. On Prod environment: 7; On Stage: 5',
  })
  @IsNotEmpty()
  siteId: string;
  @ApiProperty({
    description:
      'Identifier of the Frontend Type through which the request is sent (int): 0-Desktop, 1-Mobile, 2-Terminal',
  })
  @IsNotEmpty()
  @IsInt()
  @Min(0)
  frontendType: number;
  @ApiProperty({
    description: 'Event description',
  })
  @IsNotEmpty()
  eventDescription: string;
  @ApiProperty({
    description: 'Bet status',
  })
  @IsNotEmpty()
  status: string;
  @ApiProperty({
    description: 'Sport ids list in internal system',
  })
  @IsNotEmpty()
  sportId: string;
  @ApiProperty({
    description:
      'IP address of a client’s device which was used to access to system',
  })
  @IsNotEmpty()
  clientIp: string;
  @ApiProperty({
    description: 'Mode of bet being placed. Possible values are in Appendix F',
  })
  @IsNotEmpty()
  betMode: string;
  @ApiProperty({
    description: 'If Bet type is Combinations',
  })
  @IsNotEmpty()
  isSystem: boolean;
  @ApiProperty({
    description: 'Number of events in the Bet',
  })
  @IsNotEmpty()
  @IsInt()
  @Min(0)
  eventCount: number;
  @ApiProperty({
    description: 'Number of Bankers in the Bet',
  })
  @IsNotEmpty()
  @IsInt()
  @Min(0)
  bankerCount: number;
  @ApiProperty({
    description: 'User id',
  })
  @IsNotEmpty()
  @IsInt()
  @Min(0)
  player: number;
}
export class CreateBetServiceRequestDTO {
  @ApiProperty({
    description: 'Bet data',
  })
  @Type(() => CreateBetDataDTO)
  betData: CreateBetDataDTO;
  @ApiProperty({
    description: 'Transacction list',
    type: CreateBetTransactionItemDTO,
    isArray: true,
  })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateBetTransactionItemDTO)
  transactions: CreateBetTransactionItemDTO[];
  @ApiProperty({
    description: 'Stakes list',
    type: CreateBetStakeItemDTO,
    isArray: true,
  })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateBetStakeItemDTO)
  betStakes: CreateBetStakeItemDTO[];
  @ApiProperty({
    description: 'Events list',
    type: CreateBetEventItemDTO,
    isArray: true,
  })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateBetEventItemDTO)
  events: CreateBetEventItemDTO[];
}

export class UpdateBetTransactionItemDTO {
  @ApiProperty({
    description: 'Transaction id',
    required: false,
  })
  id: number;
  @ApiProperty({
    description: 'Bet id',
  })
  bet: number;
  @ApiProperty({
    description: 'A unique identifier for this transaction',
  })
  @IsNotEmpty()
  identifier: string;
  @ApiProperty({
    description: 'Amount of the bet',
  })
  @IsNotEmpty()
  @IsInt()
  @Min(0)
  amount: number;
}
export class UpdateBetStakeItemDTO {
  @ApiProperty({
    description: 'Stake id',
    required: false,
  })
  id: number;
  @ApiProperty({
    description: 'Bet id',
  })
  bet: number;
  @ApiProperty({
    description: 'Combination length of BetStake',
  })
  @IsNotEmpty()
  @IsInt()
  @Min(0)
  combLength: number;
  @ApiProperty({
    description: 'Potential winnings',
  })
  @IsNotEmpty()
  @IsInt()
  @Min(0)
  winnings: number;
  @ApiProperty({
    description: 'Bonus which is charged for a combination',
  })
  @IsNotEmpty()
  @IsInt()
  @Min(0)
  multipleBonus: number;
  @ApiProperty({
    description: 'Total odds per combination',
  })
  @IsNotEmpty()
  odds: number;
}
export class UpdateBetMarketItemDTO {
  @ApiProperty({
    description: 'Market id',
    required: false,
  })
  id: number;
  @ApiProperty({
    description: 'Event id',
  })
  event: number;
  @ApiProperty({
    description: 'Market identifier in internal system',
  })
  @IsNotEmpty()
  identifier: string;
  @ApiProperty({
    description: '',
  })
  @IsNotEmpty()
  value: string;
  @ApiProperty({
    description: 'Market identifier in external data provider ',
  })
  @IsNotEmpty()
  extType: string;
  @ApiProperty({
    description: 'Selected odd’s name',
  })
  @IsNotEmpty()
  outcome: string;
  @ApiProperty({
    description: 'Selected odd’s price',
  })
  @IsNotEmpty()
  odds: number;
}
export class UpdateBetEventItemDTO {
  @ApiProperty({
    description: 'Event id',
    required: false,
  })
  @IsNotEmpty()
  id: string;
  @ApiProperty({
    description: 'Bet id',
  })
  @IsNotEmpty()
  bet: string;
  @ApiProperty({
    description: 'Event identifier',
  })
  @IsNotEmpty()
  identifier: string;
  @ApiProperty({
    description: 'Category identifier in internal system',
  })
  @IsNotEmpty()
  categoryId: string;
  @ApiProperty({
    description: 'Championship identifier in internal system',
  })
  @IsNotEmpty()
  championshipId: string;
  @ApiProperty({
    description: 'Sport identifier in internal system',
  })
  @IsNotEmpty()
  sportId: string;
  @ApiProperty({
    description: 'Event identifier in external data provider',
  })
  @IsNotEmpty()
  extEventId: string;
  @ApiProperty({
    description: 'Start date of the event',
  })
  @IsNotEmpty()
  eventDate: string;
  @ApiProperty({
    description: 'Market list',
    type: UpdateBetMarketItemDTO,
    isArray: true,
  })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => UpdateBetMarketItemDTO)
  markets: UpdateBetMarketItemDTO[];
}
export class UpdateBetControllerRequestDTO {
  @ApiProperty({
    description: 'Bet reference',
  })
  @IsNotEmpty()
  reference: string;
  @ApiProperty({
    description: 'Bet amount',
  })
  @IsNotEmpty()
  @IsInt()
  @Min(0)
  amount: number;
  @ApiProperty({
    description: 'Identifier of the Sportsbook product (=SPORTSBOOK2.0)',
  })
  @IsNotEmpty()
  gameReference: string;
  @ApiProperty({
    description: 'Textual description of the bet being placed',
  })
  @IsNotEmpty()
  description: string;
  @ApiProperty({
    description:
      'A 1-digit number that uniquely identifies the calling system. On Prod environment: 7; On Stage: 5',
  })
  @IsNotEmpty()
  siteId: string;
  @ApiProperty({
    description:
      'Identifier of the Frontend Type through which the request is sent (int): 0-Desktop, 1-Mobile, 2-Terminal',
  })
  @IsNotEmpty()
  @IsInt()
  @Min(0)
  frontendType: number;
  @ApiProperty({
    description: 'Event description',
  })
  @IsNotEmpty()
  eventDescription: string;
  @ApiProperty({
    description: 'Bet status',
  })
  @IsNotEmpty()
  status: string;
  @ApiProperty({
    description: 'Sport ids list in internal system',
  })
  @IsNotEmpty()
  sportId: string;
  @ApiProperty({
    description:
      'IP address of a client’s device which was used to access to system',
  })
  @IsNotEmpty()
  clientIp: string;
  @ApiProperty({
    description: 'Mode of bet being placed. Possible values are in Appendix F',
  })
  @IsNotEmpty()
  betMode: string;
  @ApiProperty({
    description: 'If Bet type is Combinations',
  })
  @IsNotEmpty()
  isSystem: boolean;
  @ApiProperty({
    description: 'Number of events in the Bet',
  })
  @IsNotEmpty()
  @IsInt()
  @Min(0)
  eventCount: number;
  @ApiProperty({
    description: 'Number of Bankers in the Bet',
  })
  @IsNotEmpty()
  @IsInt()
  @Min(0)
  bankerCount: number;
  @ApiProperty({
    description: 'User id',
  })
  @IsNotEmpty()
  @IsInt()
  @Min(0)
  player: number;
  @ApiProperty({
    description: 'Transacction list',
    type: UpdateBetTransactionItemDTO,
    isArray: true,
  })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => UpdateBetTransactionItemDTO)
  transactions: UpdateBetTransactionItemDTO[];
  @ApiProperty({
    description: 'Stakes list',
    type: UpdateBetStakeItemDTO,
    isArray: true,
  })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => UpdateBetStakeItemDTO)
  betStakes: UpdateBetStakeItemDTO[];
  @ApiProperty({
    description: 'Events list',
    type: UpdateBetEventItemDTO,
    isArray: true,
  })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => UpdateBetEventItemDTO)
  events: UpdateBetEventItemDTO[];
}
export class UpdateBetControllerParamDTO {
  @ApiProperty({
    description: 'Bet id',
  })
  @IsNotEmpty()
  id: string;
}
export class DeleteBetControllerParamDTO {
  @ApiProperty({
    description: 'Bet id',
  })
  @IsNotEmpty()
  id: number;
}
