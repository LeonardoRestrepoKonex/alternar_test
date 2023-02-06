import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  ManyToOne,
} from "typeorm";
import { CountryCurrency } from "./country-currency.entity";
import { Country } from "./country.entity";
import { Player } from "./player.entity";

@Entity()
export class Currencies {
  @PrimaryGeneratedColumn()
  id: number | undefined;

  @Column({ type: "varchar", length: 200 })
  imgUrl: string | undefined;

  @Column({ type: "varchar", length: 20 })
  currency: string | undefined;

  @Column({ type: "varchar", length: 20 })
  code: string | undefined;

  @Column({ type: "varchar", length: 50 })
  label: string | undefined;

  @CreateDateColumn({
    type: "timestamptz",
  })
  createAt: Date | undefined;

  @UpdateDateColumn({
    type: "timestamptz",
  })
  updateAt: Date | undefined;

  @OneToMany(
    () => CountryCurrency,
    (countryCurrency) => countryCurrency.currency,
    { cascade: true }
  )
  countryCurrency: CountryCurrency[] | undefined;

  @OneToMany(() => Player, (players) => players.currency, { cascade: true })
  player: Player[] | undefined;

  @ManyToOne(() => Country, (country) => country.currencies, {
    onDelete: "CASCADE",
    nullable: false,
  })
  country: Country | any;
}
