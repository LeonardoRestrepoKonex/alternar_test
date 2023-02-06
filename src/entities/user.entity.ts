import { Bonus } from "./bonus.entity";
import { PointSale } from "./points-sale.entity";
import { Refills } from "./refills.entity";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Role } from "./role.entity";
import { TypeDocument } from "./type-document.entity";
import { City } from "./city";
import { Country } from "./country.entity";
import { State } from "./state.entity";
import { Operator } from "./operator.entity";
import { Menu } from "./menu.entity";
import { MenuItem } from "./menu-item.entity";
import { Brand } from "./brand.entity";
import { UserLoginHistory } from "./user-login-history.entity";
import { Associate } from "./associate.entity";
import { Ads } from "./ads.entity";
import { AssociateUser } from "./associate-user.entity";
import { Box } from "./box.entity";
import { Session } from "./session.entity";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn()
  id: number | undefined;

  @Column({ type: "varchar", length: 250 })
  nameComplete: string | undefined;

  @Column({ type: "varchar", length: 15 })
  numberDocument: string | undefined;

  @CreateDateColumn({
    type: "timestamptz",
  })
  expeditionDate: Date | undefined;

  @Column({ type: "varchar", length: 20 })
  phone: string | undefined;

  @Column({ type: "varchar", length: 150 })
  address: string | undefined;

  @Column({ type: "varchar", length: 50, unique: true })
  username: string | undefined;

  @Column({ type: "varchar", length: 100, unique: true })
  email: string | undefined;

  @Column({ type: "varchar", length: 255 })
  password: string | any;

  @Column({ type: "integer" })
  verificationTwoStep: number | undefined;

  @Column({ type: "varchar", length: 255 })
  observation: string | undefined;

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

  @ManyToOne(() => Role, (role) => role.users, {
    onDelete: "CASCADE",
    nullable: false,
  })
  role: Role | any;

  @ManyToOne(() => TypeDocument, (type) => type.users)
  typeDocument: TypeDocument | any;

  @ManyToOne(() => City, (city) => city.users)
  city: City | any;

  @ManyToOne(() => Country, (country) => country.users)
  country: Country | any;

  @ManyToOne(() => State, (state) => state.users)
  state: State | any;

  @ManyToOne(() => Operator, (operator) => operator.users, { nullable: true })
  operator: Operator | any;

  @OneToMany(() => Menu, (menu) => menu.createdUser, { cascade: true })
  menu: Menu[] | undefined;

  @OneToMany(() => MenuItem, (menuItems) => menuItems.createdUser, {
    cascade: true,
  })
  menuItems: MenuItem[] | undefined;

  @OneToMany(() => Refills, (refills) => refills.createdUser, { cascade: true })
  refills: Refills[] | undefined;

  @ManyToOne(() => User, (user) => user.childs)
  createdUser: User | any;

  @OneToMany(() => User, (users) => users.createdUser)
  childs: User[] | undefined;

  @OneToMany(() => Operator, (operatorCreated) => operatorCreated.createdUser)
  operatorCreated: Operator[] | undefined;

  @OneToMany(() => Brand, (brands) => brands.createdUser, { cascade: true })
  brands: Brand[] | undefined;

  @OneToMany(
    () => UserLoginHistory,
    (userLoginHistories) => userLoginHistories.User,
    { cascade: true }
  )
  userLoginHistories: UserLoginHistory[] | undefined;

  @OneToMany(() => Associate, (associates) => associates.createdUser, {
    cascade: true,
  })
  associates: Associate[] | undefined;

  @OneToMany(() => AssociateUser, (associateUsers) => associateUsers.user, {
    cascade: true,
  })
  associateUsers: AssociateUser[] | undefined;

  @OneToMany(() => PointSale, (pointSales) => pointSales.createdUser, {
    cascade: true,
  })
  pointSales: PointSale[] | undefined;

  @OneToMany(() => Ads, (ads) => ads.createdUser, { cascade: true })
  ads: Ads[] | undefined;

  @OneToMany(() => Box, (boxes) => boxes.cashier, { cascade: true })
  boxes: Box[] | undefined;

  @OneToMany(() => Bonus, (bonus) => bonus.createdUser, { cascade: true })
  bonus: Bonus[] | undefined;

  @OneToMany(() => Session, (sessions) => sessions.user, {
    cascade: true,
  })
  sessions: Session[];
}
