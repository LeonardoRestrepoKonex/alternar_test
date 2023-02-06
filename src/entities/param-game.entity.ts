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
import { CountryGame } from "./country-game.entity";
import { Games } from "./game.entity";
import { Operator } from "./operator.entity";

@Entity()
@Unique("UQ_OPERATOR_COUNTRY_GAME", ["country", "game", "operator"])
export class ParamGame {
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

  @ManyToOne(() => Country, (country) => country.paramGames, {
    onDelete: "CASCADE",
    nullable: false,
  })
  country: Country | any;

  @ManyToOne(() => Games, (game) => game.paramGames, {
    onDelete: "CASCADE",
    nullable: false,
  })
  game: Games | any;

  @OneToMany(() => CountryGame, (countryGames) => countryGames.paramGame, {
    cascade: true,
  })
  countryGames: CountryGame[] | undefined;

  @ManyToOne(() => Operator, (Operator) => Operator.paramGames, {
    onDelete: "CASCADE",
    nullable: false,
  })
  operator: Operator | any;
}
