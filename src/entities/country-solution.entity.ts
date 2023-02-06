import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from "typeorm";
import { CountryBrand } from "./country-brand.entity";
import { ParamSolution } from "./param-solution.entity";

@Entity()
export class CountrySolution {
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

  @ManyToOne(
    () => ParamSolution,
    (paramSolution) => paramSolution.countrySolutions,
    { onDelete: "CASCADE", nullable: false }
  )
  paramSolution: ParamSolution | undefined;
}
