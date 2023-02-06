import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from "typeorm";
import { Operator } from "./operator.entity";
import { User } from "./user.entity";

@Entity("ads", { schema: "marketing" })
export class Ads {
  @PrimaryGeneratedColumn()
  id: number | undefined;

  @Column({ type: "varchar", length: 50 })
  name: string | undefined;

  @Column({ type: "integer" })
  state: number | undefined;

  @Column({
    type: "varchar",
    nullable: true,
  })
  image: string | undefined;

  @Column({ type: "varchar", length: 500 })
  message: string | undefined;

  @Column({
    type: "timestamptz",
  })
  startDate: Date | undefined;

  @Column({
    type: "timestamptz",
  })
  endDate: Date | undefined;

  @CreateDateColumn({
    type: "timestamptz",
  })
  createAt: Date | undefined;

  @UpdateDateColumn({
    type: "timestamptz",
  })
  updateAt: Date | undefined;

  @ManyToOne(() => Operator, (operator) => operator.ads, { nullable: false })
  operator: Operator | undefined | number;

  @ManyToOne(() => User, (user) => user.ads, { nullable: false })
  createdUser: User | undefined;
}
