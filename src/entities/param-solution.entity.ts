import { Operator } from "./operator.entity";
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
import { Solution } from "./solution.entity";
import { CountrySolution } from "./country-solution.entity";

@Entity()
@Unique("UQ_OPERATOR_COUNTRY_SOLUTION", ["country", "solution", "operator"])
export class ParamSolution {
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

  @ManyToOne(() => Country, (country) => country.paramSolutions, {
    onDelete: "CASCADE",
    nullable: false,
  })
  country: Country | undefined;

  @ManyToOne(() => Solution, (solution) => solution.paramSolutions, {
    onDelete: "CASCADE",
    nullable: false,
  })
  solution: Solution | undefined;

  @OneToMany(
    () => CountrySolution,
    (countrySolutions) => countrySolutions.paramSolution,
    { cascade: true }
  )
  countrySolutions: CountrySolution[] | undefined;

  @ManyToOne(() => Operator, (Operator) => Operator.paramSolutions, {
    onDelete: "CASCADE",
    nullable: false,
  })
  operator: Operator | any;
}
