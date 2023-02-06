import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { Bet } from "./bet.entity";
@Entity("bet_stake", { schema: "bets" })
export class BetStake {
  @PrimaryGeneratedColumn()
  id: number | undefined;

  @Column({ type: "int" })
  combLength: number;

  @Column({ type: "int" })
  winnings: number;

  @Column({ type: "int" })
  multipleBonus: number;

  @Column({ type: "double precision" })
  odds: number;

  @CreateDateColumn({
    type: "timestamptz",
  })
  createAt: Date;

  @UpdateDateColumn({
    type: "timestamptz",
  })
  updateAt: Date;

  @ManyToOne(() => Bet, (bet) => bet.betStake, { onDelete: "CASCADE" })
  bet: Bet | any;
}
