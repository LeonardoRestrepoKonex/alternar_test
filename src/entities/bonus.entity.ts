import { User } from "./user.entity";
import { Operator } from "./operator.entity";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from "typeorm";
import { BonusType } from "./bonus-type.entity";
@Entity("bonus", { schema: "bets" })
export class Bonus {
  @PrimaryGeneratedColumn()
  id: number | undefined;
  @Column({ type: "varchar" })
  name: string;
  @Column({ type: "varchar" })
  status: string;
  @Column({
    type: "timestamptz",
  })
  startDate: Date;

  @Column({
    type: "timestamptz",
  })
  endDate: Date;
  @Column({ type: "int" })
  expirationDays: number;
  @Column({ type: "int" })
  value: number;
  @Column({ type: "int" })
  amountBonus: number;
  @Column({ type: "int" })
  totalValue: number;
  @Column({ type: "int" })
  minimumDeposit: number;
  @Column({ type: "int" })
  percentageDeposit: number;
  @Column({ type: "int" })
  maximunBonus: number;
  @Column({
    type: "timestamptz",
  })
  registrationDate: Date;

  @CreateDateColumn({
    type: "timestamptz",
  })
  createAt: Date;

  @UpdateDateColumn({
    type: "timestamptz",
  })
  updateAt: Date;

  @ManyToOne(() => Operator, (Operator) => Operator.bonus, {
    onDelete: "CASCADE",
    nullable: false,
  })
  operator: Operator | any;
  @ManyToOne(() => BonusType, (Bonus) => Bonus.bonus, {
    onDelete: "CASCADE",
    nullable: false,
  })
  bonusType: Bonus;
  @ManyToOne(() => User, (User) => User.bonus, {
    onDelete: "CASCADE",
    nullable: false,
  })
  createdUser: User;
}
