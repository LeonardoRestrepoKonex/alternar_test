import { Currencies } from "./currency.entity";
import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { CountryBrand } from "./country-brand.entity";

@Entity()
export class CountryCurrency {
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
    (countryBrand) => countryBrand.countryCurrencies,
    { onDelete: "CASCADE", nullable: false }
  )
  countryBrand: CountryBrand | undefined;

  @ManyToOne(() => Currencies, (currency) => currency.countryCurrency, {
    onDelete: "CASCADE",
    nullable: false,
  })
  currency: Currencies | undefined;
}
