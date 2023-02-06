import { ParamSolution } from "./param-solution.entity";
import { ParamMethod } from "./param-method.entity";
import { ParamGame } from "./param-game.entity";
import { Refills } from "./refills.entity";
import { Player } from "./player.entity";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  ManyToOne,
} from "typeorm";
import { User } from "./user.entity";
import { Country } from "./country.entity";
import { State } from "./state.entity";
import { City } from "./city";
import { PointSale } from "./points-sale.entity";
import { Brand } from "./brand.entity";
import { Ads } from "./ads.entity";
import { RoleOperator } from "./role-operator.entity";
import { Associate } from "./associate.entity";
import { Menu } from "./menu.entity";
import { Bonus } from "./bonus.entity";

@Entity('operators')
export class Operator {
  @PrimaryGeneratedColumn()
  id: number | undefined;

  @Column({ type: "varchar", length: 155 })
  name: string | undefined;

  @Column({ type: "varchar", length: 155, unique: true })
  nit: string | undefined;

  @Column({ type: "varchar", length: 100, unique: true })
  email: string | undefined;

  @Column({ type: "varchar", length: 255 })
  legalRepresentative: string | undefined;

  @Column({ type: "varchar", length: 20 })
  phone: string | undefined;

  @Column({ type: "integer" })
  stateOperator: number | undefined;

  @CreateDateColumn({
    type: "timestamptz",
  })
  createAt: Date | undefined;

  @UpdateDateColumn({
    type: "timestamptz",
  })
  updateAt: Date | undefined;

  @ManyToOne(() => Country, (country) => country.users)
  country: Country | undefined;

  @ManyToOne(() => State, (state) => state.users)
  state: State | undefined;

  @ManyToOne(() => City, (city) => city.users)
  city: City | undefined;

  @OneToMany(() => User, (users) => users.operator, { cascade: true })
  users: User[] | undefined;

  @OneToMany(() => Player, (players) => players.operator, { cascade: true })
  players: User[] | undefined;

  @OneToMany(() => Refills, (refills) => refills.operator, { cascade: true })
  refills: Refills[] | undefined;

  @OneToMany(() => PointSale, (pointSales) => pointSales.operator, {
    cascade: true,
  })
  pointSales: PointSale[] | undefined;

  @OneToMany(() => Brand, (brands) => brands.operator, { cascade: true })
  brands: Brand[] | undefined;

  @OneToMany(() => Ads, (ads) => ads.operator, { cascade: true })
  ads: Ads[] | undefined;

  @ManyToOne(() => User, (user) => user.operatorCreated)
  createdUser: User | any;

  @OneToMany(() => RoleOperator, (rolesOperators) => rolesOperators.operator)
  rolesOperators: RoleOperator[] | undefined;

  @OneToMany(() => Associate, (associates) => associates.operator)
  associates: Associate[] | undefined;

  @OneToMany(() => ParamGame, (paramGames) => paramGames.operator, {
    cascade: true,
  })
  paramGames: ParamGame[] | undefined;

  @OneToMany(() => ParamMethod, (paramMethods) => paramMethods.operator, {
    cascade: true,
  })
  paramMethods: ParamMethod[] | undefined;

  @OneToMany(() => ParamSolution, (paramMethods) => paramMethods.operator, {
    cascade: true,
  })
  paramSolutions: ParamSolution[] | undefined;

  @OneToMany(() => Menu, (menus) => menus.operator)
  menus: Menu[] | undefined;

  @OneToMany(() => Bonus, (bonus) => bonus.operator, {
    cascade: true,
  })
  bonus: Bonus[] | undefined;
}
