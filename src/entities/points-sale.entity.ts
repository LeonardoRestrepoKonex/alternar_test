import { CommissionerSalePoint } from "./commissioner-sale-point.entity";
import { Refills } from "./refills.entity";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Operator } from "./operator.entity";
import { Country } from "./country.entity";
import { State } from "./state.entity";
import { City } from "./city";
import { GameSalePoint } from "./game-sale-point.entity";
import { User } from "./user.entity";
import { AssociateSalePoint } from "./associate-sale-point.entity";
import { Box } from "./box.entity";

@Entity()
export class PointSale {
  @PrimaryGeneratedColumn()
  id: number | undefined;

  @Column({ type: "varchar", length: 85 })
  name: string | undefined;

  @Column({ type: "varchar", length: 150 })
  address: string | undefined;

  @Column({ type: "varchar", length: 150 })
  phone: string | undefined;

  @Column({ type: "varchar", length: 150 })
  email: string | undefined;

  @Column({ type: "integer" })
  ntc: number | undefined;

  @Column({ type: "integer" })
  allowsTransfer: number | undefined;

  @Column({ type: "varchar", length: 150 })
  maximumTransfers: string | undefined;

  @Column({ type: "varchar", length: 150 })
  minimumTransfers: string | undefined;

  @Column({ type: "integer" })
  stateSalesPoint: number | undefined;

  @CreateDateColumn({
    type: "timestamptz",
  })
  createAt: Date | undefined;

  @UpdateDateColumn({
    type: "timestamptz",
  })
  updateAt: Date | undefined;

  @ManyToOne(() => Country, (country) => country.pointSales)
  country: Country | any;

  @ManyToOne(() => State, (state) => state.pointSales)
  state: State | any;

  @ManyToOne(() => City, (city) => city.pointSales)
  city: City | any;

  @ManyToOne(() => Operator, (operator) => operator.pointSales)
  operator: Operator | any;

  @ManyToOne(() => User, (user) => user.pointSales)
  createdUser: User | any;

  @OneToMany(() => Refills, (refills) => refills.pointSale)
  refills: Refills[] | undefined;

  @OneToMany(() => GameSalePoint, (gameSalePoint) => gameSalePoint.pointSale, {
    cascade: true,
  })
  configGames: GameSalePoint[] | undefined;

  @OneToMany(
    () => CommissionerSalePoint,
    (commissionalSalePoints) => commissionalSalePoints.pointSale,
    { cascade: true }
  )
  configCommissioners: CommissionerSalePoint[] | undefined;

  @OneToMany(() => AssociateSalePoint, (associates) => associates.pointSale, {
    cascade: true,
  })
  associates: AssociateSalePoint[] | undefined;

  @OneToMany(() => Box, (box) => box.pointSale, { cascade: true })
  configBoxes: Box[] | undefined;
}
