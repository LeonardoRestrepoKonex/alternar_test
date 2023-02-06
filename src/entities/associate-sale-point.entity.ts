import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from "typeorm";
import { Associate } from "./associate.entity";
import { PointSale } from "./points-sale.entity";

@Entity()
export class AssociateSalePoint {
  @PrimaryGeneratedColumn()
  id: number | undefined;

  @CreateDateColumn({
    type: "timestamptz",
  })
  createAt: Date | undefined;

  @UpdateDateColumn({
    type: "timestamptz",
  })
  updateAt: Date | undefined;

  @ManyToOne(() => PointSale, (pointSale) => pointSale.associates, {
    onDelete: "CASCADE",
    nullable: false,
  })
  pointSale: PointSale | any;

  @ManyToOne(() => Associate, (associate) => associate.associates, {
    onDelete: "CASCADE",
    nullable: false,
  })
  associate: Associate | any;
}
