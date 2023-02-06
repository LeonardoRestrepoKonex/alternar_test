import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { State } from "./state.entity";
import { User } from "./user.entity";
import { Operator } from "./operator.entity";
import { CountryBrand } from "./country-brand.entity";
import { ParamMethod } from "./param-method.entity";
import { ParamSolution } from "./param-solution.entity";
import { ParamGame } from "./param-game.entity";
import { Language } from "./language.entity";
import { Currencies } from "./currency.entity";
import { Associate } from "./associate.entity";
import { Bank } from "./bank.entity";
import { PointSale } from "./points-sale.entity";
import { Player } from "./player.entity";

@Entity("countries")
export class Country {
  @PrimaryGeneratedColumn()
  id: number | undefined;

  @Column({ type: "varchar", length: 100, unique: true })
  name: string | undefined;

  @Column({ type: "varchar", length: 20 })
  code: string | undefined;

  @Column({ type: "varchar", length: 200 })
  imgUrl: string | undefined;

  @Column({ type: "varchar", length: 20, default: "+57" })
  prefix: string | undefined;

  @OneToMany(() => State, (states) => states.country)
  states: State[] | any;

  @OneToMany(() => User, (users) => users.country)
  users: User[] | undefined;

  @OneToMany(() => Operator, (operators) => operators.country)
  operators: Operator[] | undefined;

  @OneToMany(() => CountryBrand, (countryBrands) => countryBrands.country)
  countryBrands: CountryBrand[] | undefined;

  @OneToMany(() => ParamMethod, (paramMethods) => paramMethods.country, {
    cascade: true,
  })
  paramMethods: ParamMethod[] | undefined;

  @OneToMany(() => ParamSolution, (paramSolutions) => paramSolutions.country, {
    cascade: true,
  })
  paramSolutions: ParamSolution[] | undefined;

  @OneToMany(() => ParamGame, (paramGames) => paramGames.country, {
    cascade: true,
  })
  paramGames: ParamGame[] | undefined;

  @OneToMany(() => Language, (languages) => languages.country, {
    cascade: true,
  })
  languages: Language[] | undefined;

  @OneToMany(() => Currencies, (currencies) => currencies.country, {
    cascade: true,
  })
  currencies: Currencies[] | undefined;

  @OneToMany(() => Associate, (associates) => associates.country)
  associates: Associate[] | undefined;

  @OneToMany(() => Bank, (banks) => banks.country, { cascade: true })
  banks: Bank[] | any;

  @OneToMany(() => PointSale, (pointSales) => pointSales.country)
  pointSales: PointSale[] | undefined;

  @OneToMany(() => Player, (players) => players.country, { cascade: true })
  players: Player[] | undefined;
}
