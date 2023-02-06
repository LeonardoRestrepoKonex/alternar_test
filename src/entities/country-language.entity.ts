import { Language } from "./language.entity";
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
export class CountryLanguage {
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
    (countryBrand) => countryBrand.countryLanguages,
    { onDelete: "CASCADE", nullable: false }
  )
  countryBrand: CountryBrand | undefined;

  @ManyToOne(() => Language, (language) => language.countryLanguages, {
    onDelete: "CASCADE",
    nullable: false,
  })
  language: Language | undefined;
}
