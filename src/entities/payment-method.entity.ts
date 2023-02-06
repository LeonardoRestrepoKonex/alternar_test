import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from "typeorm";
import { ParamMethod } from "./param-method.entity";

@Entity()
export class PaymentMethod {
  @PrimaryGeneratedColumn()
  id: number | undefined;

  @Column({ type: "varchar", length: 50 })
  name: string | undefined;

  @Column({ type: "varchar", length: 50 })
  type: string | undefined;

  @CreateDateColumn({
    type: "timestamptz",
  })
  createAt: Date | undefined;

  @UpdateDateColumn({
    type: "timestamptz",
  })
  updateAt: Date | undefined;

  @OneToMany(() => ParamMethod, (paramMethods) => paramMethods.paymentMethod, {
    cascade: true,
  })
  paramMethods: ParamMethod[] | undefined;
}
