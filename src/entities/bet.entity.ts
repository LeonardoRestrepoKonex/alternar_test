import { Player } from "./player.entity";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from "typeorm";
import { Transaction } from "./transaction.entity";
import { Event } from "./event.entity";
import { BetStake } from "./bet-stake.entity";
@Entity("bets", { schema: "bets" })
export class Bet {
  @PrimaryGeneratedColumn()
  id: number | undefined;

  @Column({ type: "varchar", length: 100 })
  reference: string;

  @Column({ type: "int" })
  amount: number;

  @Column({ type: "varchar", length: 100 })
  gameReference: string;

  @Column({ type: "varchar" })
  description: string;

  @Column({ type: "varchar", length: 100 })
  siteId: string;

  @Column({ type: "int" })
  frontendType: number;

  @Column({ type: "varchar" })
  eventDescription: string;

  @Column({ type: "varchar" })
  status: string;

  @Column({ type: "varchar" })
  sportId: string;

  @Column({ type: "varchar" })
  clientIp: string;

  @Column({ type: "varchar" })
  betMode: string;

  @Column({ type: "boolean" })
  isSystem: boolean;

  @Column({ type: "int" })
  eventCount: number;

  @Column({ type: "int" })
  bankerCount: number;

  @CreateDateColumn({
    type: "timestamptz",
  })
  createAt: Date;

  @UpdateDateColumn({
    type: "timestamptz",
  })
  updateAt: Date;

  @ManyToOne(() => Player, (player) => player.bet)
  player: Player | any;

  @OneToMany(() => Transaction, (transaction) => transaction.bet, {
    cascade: true,
  })
  transaction: Transaction;

  @OneToMany(() => Event, (event) => event.bet, { cascade: true })
  event: Event;

  @OneToMany(() => BetStake, (stake) => stake.bet, { cascade: true })
  betStake: BetStake;
}
