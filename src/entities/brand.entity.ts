import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { CountryBrand } from "./country-brand.entity";
import { Operator } from "./operator.entity";
import { User } from "./user.entity";
@Entity()
export class Brand {
  @PrimaryGeneratedColumn()
  id: number | undefined;

  @Column({ type: "varchar", length: 50 })
  name: string | undefined;

  @Column({ type: "integer" })
  state: number | undefined;

  @CreateDateColumn({
    type: "timestamptz",
    default: () => "CURRENT_TIMESTAMP",
  })
  createAt: Date | undefined;

  @UpdateDateColumn({
    type: "timestamptz",
    default: () => "CURRENT_TIMESTAMP",
  })
  updateAt: Date | undefined;

  @ManyToOne(() => Operator, (operator) => operator.brands)
  operator: Operator | undefined;

  @ManyToOne(() => User, (user) => user.brands)
  createdUser: User | undefined;

  @OneToMany(() => CountryBrand, (countryBrands) => countryBrands.brand, {
    cascade: true,
  })
  countryBrands: CountryBrand[] | undefined;
}
