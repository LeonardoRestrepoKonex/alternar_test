import { Operator } from "./operator.entity";
import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToMany,
  Unique,
  Column,
} from "typeorm";
import { Country } from "./country.entity";
import { PaymentMethod } from "./payment-method.entity";
import { CountryPayment } from "./country-payment.entity";

@Entity()
@Unique("UQ_OPERATOR_COUNTRY_METHOD", ["country", "paymentMethod", "operator"])
export class ParamMethod {
  @PrimaryGeneratedColumn()
  id: number | undefined;

  @Column({ type: "integer" })
  active: number | undefined;

  @Column({ type: "integer", default: 0 })
  state: number | undefined;

  @CreateDateColumn({
    type: "timestamptz",
  })
  createAt: Date | undefined;

  @UpdateDateColumn({
    type: "timestamptz",
  })
  updateAt: Date | undefined;

  @ManyToOne(() => Country, (country) => country.paramMethods, {
    onDelete: "CASCADE",
    nullable: false,
  })
  country: Country | any;

  @ManyToOne(
    () => PaymentMethod,
    (paymentMethod) => paymentMethod.paramMethods,
    { onDelete: "CASCADE", nullable: false }
  )
  paymentMethod: PaymentMethod | any;

  @OneToMany(
    () => CountryPayment,
    (countryPayment) => countryPayment.paramMethod,
    { cascade: true }
  )
  countryPayment: CountryPayment[] | undefined;

  @ManyToOne(() => Operator, (Operator) => Operator.paramMethods, {
    onDelete: "CASCADE",
    nullable: true,
  })
  operator: Operator | any;
}
