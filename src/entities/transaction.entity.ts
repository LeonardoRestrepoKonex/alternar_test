import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { Bet } from "./bet.entity";
@Entity("transactions", { schema: "bets" })
export class Transaction {
  @PrimaryGeneratedColumn()
  id: number | undefined;

  @Column({ type: "int" })
  amount: number;

  @Column({ type: "varchar", length: 100 })
  identifier: string;

  @CreateDateColumn({
    type: "timestamptz",
  })
  createAt: Date;

  @UpdateDateColumn({
    type: "timestamptz",
  })
  updateAt: Date;

  @ManyToOne(() => Bet, (bet) => bet.transaction, { onDelete: "CASCADE" })
  bet: Bet | any;
}
