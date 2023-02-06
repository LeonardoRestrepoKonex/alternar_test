import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from "typeorm";
import { Exclusion } from "./exclusion.entity";
import { GameSalePoint } from "./game-sale-point.entity";
import { ParamGame } from "./param-game.entity";

@Entity()
export class Games {
  @PrimaryGeneratedColumn()
  id: number | undefined;

  @Column({ type: "varchar", length: 50 })
  name: string | undefined;

  @CreateDateColumn({
    type: "timestamptz",
  })
  createAt: Date | undefined;

  @UpdateDateColumn({
    type: "timestamptz",
  })
  updateAt: Date | undefined;

  @OneToMany(() => ParamGame, (paramGames) => paramGames.game, {
    cascade: true,
  })
  paramGames: ParamGame[] | undefined;

  @OneToMany(() => GameSalePoint, (gameSalePoints) => gameSalePoints.game, {
    cascade: true,
  })
  gamePointSales: GameSalePoint[] | undefined;

  @OneToMany(() => Exclusion, (exclusions) => exclusions.game, {
    cascade: true,
  })
  exclusions: Exclusion[] | undefined;
}
