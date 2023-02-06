import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  ManyToOne,
} from "typeorm";
import { MenuItem } from "./menu-item.entity";
import { ActionPermission } from "./action-permission.entity";
import { User } from "./user.entity";
import { Operator } from "./operator.entity";

@Entity()
export class Menu {
  @PrimaryGeneratedColumn()
  id: number | undefined;

  @Column({ type: "varchar", length: 50 })
  name: string | undefined;

  @Column({ type: "varchar", length: 50 })
  url: string | undefined;

  @Column({ type: "varchar", length: 50 })
  icon: string | undefined;

  @Column({ type: "integer" })
  order: number | undefined;

  @Column({ type: "varchar", length: 255 })
  description: string | undefined;

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

  @OneToMany(() => ActionPermission, (actions) => actions.menu)
  actions: ActionPermission[] | undefined;

  @OneToMany(() => MenuItem, (menuItems) => menuItems.menu, { cascade: true })
  menuItems: MenuItem[] | undefined;

  @ManyToOne(() => User, (user) => user.menu)
  createdUser: User | any;

  @ManyToOne(() => Operator, (operator) => operator.menus, {
    nullable: true,
    onDelete: "CASCADE",
  })
  operator: Operator | undefined;
}
