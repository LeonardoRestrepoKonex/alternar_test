import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { TypeDocument } from "./type-document.entity";
import { City } from "./city";
import { Country } from "./country.entity";
import { State } from "./state.entity";
import { Operator } from "./operator.entity";
import { User } from "./user.entity";
import { Bank } from "./bank.entity";
import { AssociateSalePoint } from "./associate-sale-point.entity";
import { AssociateUser } from "./associate-user.entity";

@Entity()
export class Associate {
  @PrimaryGeneratedColumn()
  id: number | undefined;

  @Column({ type: "varchar", length: 250, unique: true })
  name: string | undefined;

  @Column({ type: "varchar", length: 150 })
  address: string | undefined;

  @Column({ type: "varchar", length: 20 })
  phone: string | undefined;

  @Column({ type: "varchar", length: 15, unique: true })
  documentNumber: string | undefined;

  @Column({ type: "varchar", length: 100, unique: true })
  email: string | undefined;

  @Column({ type: "integer" })
  accountType: number | undefined;

  @Column({ type: "varchar", length: 20 })
  accountNumber: string | undefined;

  @Column({ type: "integer" })
  transferMoney: number | undefined;

  @Column({ type: "varchar", length: 30 })
  maximumValue: string | undefined;

  @Column({ type: "varchar", length: 30 })
  minimumValue: string | undefined;

  @Column({ type: "varchar", length: 30 })
  refillBalance: string | undefined;

  @Column({ type: "integer" })
  stateUser: number | undefined;

  @CreateDateColumn({
    type: "timestamptz",
  })
  createAt: Date | undefined;

  @UpdateDateColumn({
    type: "timestamptz",
  })
  updateAt: Date | undefined;

  @ManyToOne(() => TypeDocument, (type) => type.associates, {
    nullable: false,
  })
  documentType: TypeDocument | undefined;

  @ManyToOne(() => Country, (country) => country.associates, {
    nullable: false,
  })
  country: Country | undefined;

  @ManyToOne(() => State, (state) => state.associates, { nullable: false })
  state: State | undefined;

  @ManyToOne(() => City, (city) => city.associates, { nullable: false })
  city: City | undefined;

  @ManyToOne(() => Operator, (operator) => operator.associates, {
    nullable: false,
  })
  operator: Operator | undefined;

  @ManyToOne(() => User, (user) => user.associates, { nullable: false })
  createdUser: User | undefined;

  @ManyToOne(() => Bank, (bank) => bank.associates, { nullable: false })
  bank: Bank | undefined;

  @OneToMany(() => AssociateSalePoint, (associates) => associates.associate, {
    cascade: true,
  })
  associates: AssociateSalePoint[] | undefined;

  @OneToMany(
    () => AssociateUser,
    (associateUsers) => associateUsers.associate,
    {
      cascade: true,
    }
  )
  associateUsers: AssociateUser[] | undefined;
}
