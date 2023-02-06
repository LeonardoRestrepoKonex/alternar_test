// import { CountryGame } from './countryGame.entity';
import { Entity, PrimaryGeneratedColumn, ManyToOne, OneToMany } from "typeorm";
import { Brand } from "./brand.entity";
import { Country } from "./country.entity";
import { CountryCurrency } from "./country-currency.entity";
import { CountryGame } from "./country-game.entity";
import { CountryLanguage } from "./country-language.entity";
import { CountryPayment } from "./country-payment.entity";
import { CountrySolution } from "./country-solution.entity";
// import { CountryPayment } from './countryPayment.entity';

@Entity()
export class CountryBrand {
  @PrimaryGeneratedColumn()
  id: number | undefined;

  @ManyToOne(() => Brand, (brand) => brand.countryBrands, {
    onDelete: "CASCADE",
    nullable: false,
  })
  brand: Brand | undefined;

  @ManyToOne(() => Country, (country) => country.countryBrands, {
    onDelete: "CASCADE",
    nullable: false,
  })
  country: Country | undefined;

  @OneToMany(
    () => CountryLanguage,
    (countryLanguages) => countryLanguages.countryBrand,
    { cascade: true }
  )
  countryLanguages: CountryLanguage[] | undefined;

  @OneToMany(
    () => CountryCurrency,
    (countryCurrencies) => countryCurrencies.countryBrand,
    { cascade: true }
  )
  countryCurrencies: CountryCurrency[] | undefined;

  @OneToMany(
    () => CountryPayment,
    (countryPayments) => countryPayments.countryBrand,
    { cascade: true }
  )
  countryPayments: CountryPayment[] | undefined;

  @OneToMany(
    () => CountrySolution,
    (countrySolutions) => countrySolutions.countryBrand,
    { cascade: true }
  )
  countrySolutions: CountrySolution[] | undefined;

  @OneToMany(() => CountryGame, (countryGames) => countryGames.countryBrand, {
    cascade: true,
  })
  countryGames: CountryGame[] | undefined;
}
