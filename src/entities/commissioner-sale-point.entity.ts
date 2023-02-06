import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  Column,
} from "typeorm";
import { Commissioner } from "./commissioner.entity";
import { PointSale } from "./points-sale.entity";

@Entity()
export class CommissionerSalePoint {
  @PrimaryGeneratedColumn()
  id: number | undefined;

  @Column({ type: "integer" })
  percentage: number | undefined;

  @CreateDateColumn({
    type: "timestamptz",
  })
  createAt: Date | undefined;

  @UpdateDateColumn({
    type: "timestamptz",
  })
  updateAt: Date | undefined;

  @ManyToOne(() => PointSale, (pointSale) => pointSale.configCommissioners, {
    onDelete: "CASCADE",
    nullable: false,
  })
  pointSale: PointSale | any;

  @ManyToOne(
    () => Commissioner,
    (commissioner) => commissioner.commissionerSalePoints,
    { onDelete: "CASCADE", nullable: false }
  )
  commissioner: Commissioner | any;
}
