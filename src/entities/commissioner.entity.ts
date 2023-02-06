import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from "typeorm";
import { CommissionerSalePoint } from "./commissioner-sale-point.entity";

@Entity()
export class Commissioner {
  @PrimaryGeneratedColumn()
  id: number | undefined;

  @Column({ type: "varchar", length: 50 })
  name: string | undefined;

  @CreateDateColumn({
    type: "timestamptz",
  })
  createAt: Date | undefined;

  @UpdateDateColumn({
    type: "timestamptz",
  })
  updateAt: Date | undefined;

  @OneToMany(
    () => CommissionerSalePoint,
    (commissionerSalePoints) => commissionerSalePoints.commissioner,
    { cascade: true }
  )
  commissionerSalePoints: CommissionerSalePoint[] | undefined;
}
