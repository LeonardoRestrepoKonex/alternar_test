import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { State } from "./state.entity";
import { User } from "./user.entity";
import { Operator } from "./operator.entity";
import { Associate } from "./associate.entity";
import { PointSale } from "./points-sale.entity";

@Entity()
export class City {
  @PrimaryGeneratedColumn()
  id: number | undefined;

  @Column({ type: "varchar", length: 70 })
  name: string | undefined;

  @ManyToOne(() => State, (states) => states.cities)
  states: State | any;

  @OneToMany(() => User, (users) => users.city)
  users: User[] | undefined;

  @OneToMany(() => PointSale, (pointSales) => pointSales.city)
  pointSales: PointSale[] | undefined;

  @OneToMany(() => Operator, (operators) => operators.city)
  operators: Operator[] | undefined;

  @OneToMany(() => Associate, (associates) => associates.city)
  associates: Associate[] | undefined;
}
