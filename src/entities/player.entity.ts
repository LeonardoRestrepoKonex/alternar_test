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
import { Operator } from "./operator.entity";
import { Refills } from "./refills.entity";
import { Currencies } from "./currency.entity";
import { Country } from "./country.entity";
import { Bet } from "./bet.entity";
import { AnswerPlayer } from "./answer-player.entity";
import { Exclusion } from "./exclusion.entity";
import { Session } from "./index.entity";

@Entity("players", { schema: "players" })
export class Player {
  @PrimaryGeneratedColumn()
  id: number | undefined;

  @Column({ type: "varchar", length: 15, unique: true })
  numberDocument: string | undefined;

  @Column({ type: "varchar", length: 150 })
  firstName: string | undefined;

  @Column({ type: "varchar", length: 150, nullable: true })
  secondName: string | undefined;

  @Column({ type: "varchar", length: 150 })
  lastName: string | undefined;

  @CreateDateColumn({
    type: "timestamptz",
  })
  birthDate: Date | undefined;

  @Column({ type: "varchar", length: 150 })
  address: string | undefined;

  @Column({ type: "varchar", length: 100, unique: true })
  email: string | undefined;

  @Column({ type: "varchar", length: 100 })
  gender: string | undefined;

  @Column({ type: "varchar", length: 20 })
  phone: string | undefined;

  @Column({ type: "varchar", length: 150 })
  nationality: string | undefined;

  @Column({ type: "varchar", length: 150, nullable: true })
  referencedCode: string | undefined;

  @Column({ type: "varchar", length: 255 })
  password: string | undefined;

  @Column({ type: "integer" })
  stateUser: number | undefined;

  @Column({ type: "varchar", length: 30, nullable: true })
  balance: string | undefined;

  @Column({ type: "varchar", length: 500, nullable: true })
  observation: string | undefined;

  @Column({ type: "integer", nullable: true })
  status: number | undefined;

  @CreateDateColumn({
    type: "timestamptz",
  })
  createAt: Date | undefined;

  @UpdateDateColumn({
    type: "timestamptz",
  })
  updateAt: Date | undefined;

  @ManyToOne(() => TypeDocument, (type) => type.players)
  typeDocument: TypeDocument | undefined;

  @ManyToOne(() => Operator, (operator) => operator.players)
  operator: Operator | undefined;

  @ManyToOne(() => Currencies, (currency) => currency.player)
  currency: Currencies | undefined;

  @ManyToOne(() => Country, (country) => country.players, { nullable: true })
  country: Country | undefined;

  @OneToMany(() => Refills, (refills) => refills.players)
  refills: Refills | undefined;

  @OneToMany(() => Bet, (bet) => bet.player)
  bet: Bet | undefined;

  @OneToMany(() => AnswerPlayer, (answerPlayers) => answerPlayers.player)
  answerPlayers: AnswerPlayer[] | undefined;

  @OneToMany(() => Exclusion, (exclusions) => exclusions.player, {
    cascade: true,
  })
  exclusions: Exclusion[] | undefined;

  @OneToMany(() => Session, (sessions) => sessions.player, {
    cascade: true,
  })
  sessions: Session[];
}
