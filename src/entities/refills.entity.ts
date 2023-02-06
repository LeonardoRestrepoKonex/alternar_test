import { Player } from "./player.entity";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from "typeorm";
import { PointSale } from "./points-sale.entity";
import { Operator } from "./operator.entity";
import { User } from "./user.entity";

@Entity()
export class Refills {
  @PrimaryGeneratedColumn()
  id: number | undefined;

  @Column({ type: "varchar", length: 85 })
  value: string | undefined;

  @Column({ type: "varchar", length: 255 })
  description: string | undefined;

  @CreateDateColumn({
    type: "timestamptz",
  })
  createAt: Date | undefined;

  @UpdateDateColumn({
    type: "timestamptz",
  })
  updateAt: Date | undefined;

  @ManyToOne(() => Player, (players) => players.refills)
  players: Player[] | undefined;

  @ManyToOne(() => Operator, (operator) => operator.refills)
  operator: Operator | undefined;

  @ManyToOne(() => PointSale, (pointSale) => pointSale.refills)
  pointSale: PointSale | undefined;

  @ManyToOne(() => User, (user) => user.refills)
  createdUser: User | undefined;
}
