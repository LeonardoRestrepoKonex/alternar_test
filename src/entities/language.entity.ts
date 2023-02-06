import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  ManyToOne,
} from "typeorm";
import { CountryLanguage } from "./country-language.entity";
import { Country } from "./country.entity";

@Entity()
export class Language {
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

  @OneToMany(() => CountryLanguage, (countryGames) => countryGames.language, {
    cascade: true,
  })
  countryLanguages: CountryLanguage[] | undefined;

  @ManyToOne(() => Country, (country) => country.languages, {
    onDelete: "CASCADE",
    nullable: false,
  })
  country: Country | any;
}
