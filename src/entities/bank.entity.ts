import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { Associate } from "./associate.entity";
import { Country } from "./country.entity";

@Entity("banks", { schema: "banks" })
export class Bank {
  @PrimaryGeneratedColumn()
  id: number | undefined;

  @Column({ type: "varchar", length: 100, unique: true })
  name: string | undefined;

  @CreateDateColumn({
    type: "timestamptz",
  })
  createAt: Date | undefined;

  @UpdateDateColumn({
    type: "timestamptz",
  })
  updateAt: Date | undefined;

  @ManyToOne(() => Country, (country) => country.banks)
  country: Country | any;

  @OneToMany(() => Associate, (associates) => associates.bank)
  associates: Associate[] | undefined;
}
