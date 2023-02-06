import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from "typeorm";
import { PointSale } from "./points-sale.entity";
import { User } from "./user.entity";

@Entity()
export class Box {
  @PrimaryGeneratedColumn()
  id: number | undefined;

  @Column({ type: "varchar", length: 50 })
  boxId: string | undefined;

  @Column({ type: "varchar", length: 255 })
  name: string | undefined;

  @Column({ type: "varchar", length: 255 })
  ip: string | undefined;

  @Column({ type: "integer" })
  state: number | undefined;

  @CreateDateColumn({
    type: "timestamptz",
  })
  createAt: Date | undefined;

  @UpdateDateColumn({
    type: "timestamptz",
  })
  updateAt: Date | undefined;

  @ManyToOne(() => User, (user) => user.boxes)
  cashier: User | any;

  @ManyToOne(() => PointSale, (point) => point.configBoxes, {
    onDelete: "CASCADE",
    nullable: false,
  })
  pointSale: PointSale | any;
}
