import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from "typeorm";
import { CountryBrand } from "./country-brand.entity";
import { ParamGame } from "./param-game.entity";

@Entity()
export class CountryGame {
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

  @ManyToOne(() => ParamGame, (paramGame) => paramGame.countryGames, {
    onDelete: "CASCADE",
    nullable: false,
  })
  paramGame: ParamGame | undefined;
}
