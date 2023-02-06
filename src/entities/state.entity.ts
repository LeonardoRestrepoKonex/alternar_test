import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Country } from "./country.entity";
import { City } from "./city";
import { User } from "./user.entity";
import { Operator } from "./operator.entity";
import { Associate } from "./associate.entity";
import { PointSale } from "./points-sale.entity";

@Entity()
export class State {
  @PrimaryGeneratedColumn()
  id: number | undefined;

  @Column({ type: "varchar", length: 70 })
  names: string | undefined;

  @ManyToOne(() => Country, (country) => country.states)
  country: Country | any;

  @OneToMany(() => City, (cities) => cities.states)
  cities: City[] | undefined;

  @OneToMany(() => User, (users) => users.state)
  users: User[] | undefined;

  @OneToMany(() => PointSale, (pointSales) => pointSales.state)
  pointSales: PointSale[] | undefined;

  @OneToMany(() => Operator, (operators) => operators.country)
  operators: Operator[] | undefined;

  @OneToMany(() => Associate, (associates) => associates.state)
  associates: Associate[] | undefined;
}
