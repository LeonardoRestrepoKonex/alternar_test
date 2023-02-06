import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { Event } from "./event.entity";

@Entity("markets", { schema: "bets" })
export class Market {
  @PrimaryGeneratedColumn()
  id: number | undefined;

  @Column({ type: "varchar", length: 100 })
  identifier: string;

  @Column({ type: "varchar", length: 100 })
  value: string;

  @Column({ type: "varchar", length: 100 })
  extType: string;

  @Column({ type: "varchar", length: 100 })
  outcome: string;

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

  @ManyToOne(() => Event, (event) => event.market, { onDelete: "CASCADE" })
  event: Event | any;
}
