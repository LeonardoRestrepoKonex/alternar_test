import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from "typeorm";
import { Bet } from "./bet.entity";
import { Market } from "./market.entity";
@Entity("events", { schema: "bets" })
export class Event {
  @PrimaryGeneratedColumn()
  id: number | undefined;

  @Column({ type: "varchar", length: 100 })
  identifier: string;

  @Column({ type: "varchar", length: 100 })
  categoryId: string;

  @Column({ type: "varchar", length: 100 })
  championshipId: string;

  @Column({ type: "varchar", length: 100 })
  sportId: string;

  @Column({ type: "varchar", length: 100 })
  extEventId: string;

  @Column({ type: "timestamptz" })
  eventDate: Date;

  @CreateDateColumn({
    type: "timestamptz",
  })
  createAt: Date;

  @UpdateDateColumn({
    type: "timestamptz",
  })
  updateAt: Date;

  @ManyToOne(() => Bet, (bet) => bet.event, { onDelete: "CASCADE" })
  bet: Bet | any;

  @OneToMany(() => Market, (market) => market.event, { cascade: true })
  market: Market;
}
