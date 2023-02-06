import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { ParamMethod } from "./param-method.entity";
import { CountryBrand } from "./country-brand.entity";

@Entity()
export class CountryPayment {
  @PrimaryGeneratedColumn()
  id: number | undefined;

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

  @ManyToOne(
    () => CountryBrand,
    (countryBrand) => countryBrand.countryPayments,
    { onDelete: "CASCADE", nullable: false }
  )
  countryBrand: CountryBrand | undefined;

  @ManyToOne(() => ParamMethod, (paramMethod) => paramMethod.countryPayment, {
    onDelete: "CASCADE",
    nullable: false,
  })
  paramMethod: ParamMethod | undefined;
}
