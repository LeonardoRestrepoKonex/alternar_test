import { ApiProperty } from "@nestjs/swagger";

export class CreateUserServiceRequestDTO {
  @ApiProperty({
    description: "User username",
  })
  username: string;

  @ApiProperty({
    description: "User currency",
  })
  currency: string;

  @ApiProperty({
    description: "User country",
  })
  country: string;

  @ApiProperty({
    description: "User Id",
  })
  userId: string;

  @ApiProperty({
    description: "",
  })
  path: string;

  @ApiProperty({
    description: "User document number",
  })
  docNumber: string;

  @ApiProperty({
    description: "User name",
  })
  name: string;

  @ApiProperty({
    description: "User last name",
  })
  lastName: string;

  @ApiProperty({
    description: "User balance",
  })
  balance: string;
}
export class CreateUserRepositoryRequestDTO {
  ExtUser: {
    LoginName: string;
    Currency: string;
    Country: string;
    ExternalUserId: string;
    AffiliationPath: string;
    UserCode: string;
    FirstName: string;
    LastName: string;
    UserBalance: string;
  };
  WalletCode: string;
}
export class CreateUserRepositoryResultDTO {
  CreateUserMessageResult: string;
}

export class CreateBonusByCodeServiceRequestDTO {
  @ApiProperty({
    description: "User Id",
  })
  userId: string;
  @ApiProperty({
    description: "Bonus Id",
  })
  bonusId: string;
  @ApiProperty({
    description: "Amount",
  })
  amount: string;
}
export class CreateBonusByCodeRespositoryRequestDTO {
  @ApiProperty({
    description: "User Id",
  })
  ExtUserId: string;
  @ApiProperty({
    description: "Bonus Id",
  })
  BonusCode: string;
  @ApiProperty({
    description: "Amount",
  })
  Deposit: string;
  @ApiProperty({
    description: "Our walle code",
  })
  WalletCode: string;
}
export class CreateBonusByCodeRepositoryResultDTO {
  @ApiProperty({
    description: "Amount",
  })
  Bonus: string;
  @ApiProperty({
    description: "Alternar Id",
  })
  BonusAccountId: string;
  @ApiProperty({
    description: "Bonus Plan Id",
  })
  BonusPlanId: string;
  @ApiProperty({
    description: "The status of the Bonus account",
  })
  Status: string;
  @ApiProperty({
    description: "Field type of BonusError",
  })
  Error: string;
}

export class CreateBonusByDepositServiceRequestDTO {
  @ApiProperty({
    description: "User Id",
  })
  userId: string;

  @ApiProperty({
    description: "Bonus Plan Id",
  })
  bonusPlanId: string;

  @ApiProperty({
    description: "Amount",
  })
  amount: string;
}
export class CreateBonusByDepositRepositoryRequestDTO {
  @ApiProperty({
    description: "User Id",
  })
  ExtUserId: string;

  @ApiProperty({
    description: "Bonus Plan Id",
  })
  BonusPlanId: string;

  @ApiProperty({
    description: "Amount",
  })
  Deposit: string;
  @ApiProperty({
    description: "Wallet Code",
  })
  WalletCode: string;
}
export class CreateBonusByDepositRepositoryResultDTO {
  @ApiProperty({
    description: "Amount",
  })
  Bonus: string;
  @ApiProperty({
    description: "Alternar Id",
  })
  BonusAccountId: string;
  @ApiProperty({
    description: "Bonus Plan Id",
  })
  BonusPlanId: string;
  @ApiProperty({
    description: "The status of the Bonus account",
  })
  Status: string;
  @ApiProperty({
    description: "Field type of BonusError",
  })
  Error: string;
}

export class GetClientBonusInfoServiceRequestDTO {
  @ApiProperty({
    description: "User Id",
  })
  userId: string;
}
export class GetClientBonusInfoRepositoryRequestDTO {
  @ApiProperty({
    description: "User Id",
  })
  ExtUserId: string;
  @ApiProperty({
    description: "Wallet Code",
  })
  WalletCode: string;
}
export class GetClientBonusInfoRepositoryResultDTO {
  GetClientBonusInfoMessageResult: {
    ExtUserId: string;
    CreatedDate: string;
    UpdatedDate: string;
    ExpiredDate: string;
    Amount: number;
    InitialBonus: number;
    RolloverRequired: number;
    RolloverRemain: number;
    BonusStatus: string;
    BonusAccountId: number;
    BonusPlanId: number;
  };
}

export class GetClientOpenBonusesServiceRequestDTO {
  @ApiProperty({
    description: "User Id",
  })
  userId: string;
}
export class GetClientOpenBonusesRepositoryRequestDTO {
  @ApiProperty({
    description: "User Id",
  })
  ExtUserId: string;
  @ApiProperty({
    description: "Wallet Code",
  })
  WalletCode: string;
}
export class GetClientOpenBonusesRepositoryResultDTO {
  GetClientOpenBonusesMessageResult: {
    ExtUserId: string;
    CreatedDate: string;
    UpdatedDate: string;
    ExpiredDate: string;
    Amount: number;
    InitialBonus: number;
    RolloverRequired: number;
    RolloverRemain: number;
    BonusStatus: string;
    BonusAccountId: number;
    BonusPlanId: number;
  };
}

export class GetClientBonusHistoryServiceRequestDTO {
  @ApiProperty({
    description: "User Id",
  })
  userId: string;
  @ApiProperty({
    description: "Date records",
  })
  date: string;
}
export class GetClientBonusHistoryRepositoryRequestDTO {
  @ApiProperty({
    description: "User Id",
  })
  ExtUserId: string;
  @ApiProperty({
    description: "Date",
  })
  DateFrom: string;
  @ApiProperty({
    description: "Wallet Code",
  })
  WalletCode: string;
}
export class GetClientBonusHistoryItemDTO {
  ExtUserId: string;
  CreatedDate: string;
  UpdatedDate: string;
  ExpiredDate: string;
  Amount: number;
  InitialBonus: number;
  RolloverRequired: number;
  RolloverRemain: number;
  BonusStatus: string;
  BonusAccountId: number;
  BonusPlanId: number;
}
export class GetClientBonusHistoryRepositoryResultDTO {
  GetClientBonusHistoryMessageResult: {
    GetClientBonusInfoMessageResult: GetClientBonusHistoryItemDTO[];
  };
}

export class CancelClientBonusServiceRequestDTO {
  @ApiProperty({
    description: "User Id",
  })
  userId: string;
  @ApiProperty({
    description: "Date records",
  })
  date: string;
}
export class CancelClientBonusRepositoryRequestDTO {
  @ApiProperty({
    description: "User Id",
  })
  ExtUserId: string;
  @ApiProperty({
    description: "Date",
  })
  DateFrom: string;
  @ApiProperty({
    description: "Wallet Code",
  })
  WalletCode: string;
}
export class CancelClientBonusRepositoryResponseDTO {
  CancelClientBonusMessageResult: {
    ExtUserId: string;
    CreatedDate: string;
    UpdatedDate: string;
    ExpiredDate: string;
    Amount: number;
    InitialBonus: number;
    RolloverRequired: number;
    RolloverRemain: number;
    BonusStatus: string;
    BonusAccountId: number;
    BonusPlanId: number;
  };
}

export class CancelAllClientBonusesServiceRequestDTO {
  @ApiProperty({
    description: "User Id",
  })
  userId: string;
}
export class CancelAllClientBonusesRepositoryRequestDTO {
  @ApiProperty({
    description: "User Id",
  })
  ExtUserId: string;
  @ApiProperty({
    description: "Wallet Code",
  })
  WalletCode: string;
}
export class CancelAllClientBonusesItemDTO {
  ExtUserId: string;
  CreatedDate: string;
  UpdatedDate: string;
  ExpiredDate: string;
  Amount: number;
  InitialBonus: number;
  RolloverRequired: number;
  RolloverRemain: number;
  BonusStatus: string;
  BonusAccountId: number;
  BonusPlanId: number;
}
export class CancelAllClientBonusesRepositoryResponseDTO {
  CancelClientBonusMessageResult: CancelAllClientBonusesItemDTO[];
}

export class GetActiveBonusesByPlanIServiceRequestDTO {
  @ApiProperty({
    description: "Bonus Plan Id",
  })
  bonusPlanId: string;
}
export class GetActiveBonusesByPlanIRepositoryRequestDTO {
  @ApiProperty({
    description: "User Id",
  })
  ExtUserId: string;
  @ApiProperty({
    description: "Wallet Code",
  })
  WalletCode: string;
}
export class GetActiveBonusesByPlanIRepositoryResponseDTO {
  GetActiveBonusesByPlanIdResult: {
    PlanName: string;
    PlanId: number;
    SDate: string;
    EDate: string;
    BonusCode: string;
    BonusTypeId: number;
    BonusCount: number;
  };
}

export class GetCurrentBonusCampsByExtUserIdServiceRequestDTO {
  @ApiProperty({
    description: "User Id",
  })
  userId: string;
}
export class GetCurrentBonusCampsByExtUserIdRepositoryeRequestDTO {
  @ApiProperty({
    description: "User Id",
  })
  ExtUserId: string;
  @ApiProperty({
    description: "Wallet Code",
  })
  WalletCode: string;
}
export class SaveRuleItemDTO {
  BonusPlanId: number;
  SRType: string;
  Include: true;
  MinOdds: number;
  PersonId: number;
  BonusInfoPart: string;
}
export class GetCurrentBonusCampsByExtUserIdItemDTO {
  BonusPlanId: number;
  Name: string;
  Description: string;
  BonusType: string;
  IsEnabled: true;
  BonusCode: string;
  StartDate: string;
  EndDate: string;
  ExpirationPeriod: number;
  MinDeposit: number;
  MaxBonus: number;
  BonusPercentage: number;
  RolloverFactor: number;
  IsRolloverRealFunds: false;
  UserRegDate: string;
  TotalPlanAmount: number;
  TotalPlanCount: number;
  TotalAmount: number;
  TotalCount: number;
  PlayersCnt: number;
  SaveRules: SaveRuleItemDTO[];
}
export class GetCurrentBonusCampsByExtUserIdRepositoryeResponseDTO {
  GetCurrentBonusCampsByExtUserIdResult: GetCurrentBonusCampsByExtUserIdItemDTO[];
}

export class GetBonusPlansForClientServiceRequestDTO {
  @ApiProperty({
    description: "User Id",
  })
  userId: string;
  @ApiProperty({
    description: "Array of bonusTypeIds values",
  })
  types: number[];
}
export class GetBonusPlansForClientRepositoryRequestDTO {
  @ApiProperty({
    description: "User Id",
  })
  ExtUserId: string;
  @ApiProperty({
    description: "Bonus type Id",
  })
  BonusTypeIds: number;
  @ApiProperty({
    description: "Wallet Code",
  })
  WalletCode: string;
}
export class GetBonusPlansForClientRepositoryResponseDTO {
  GetBonusPlansForClientResult: GetCurrentBonusCampsByExtUserIdItemDTO;
}
