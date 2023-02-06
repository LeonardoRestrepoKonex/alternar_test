import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Menu } from "./menu.entity";
import { ActionPermission } from "./action-permission.entity";
import { User } from "./user.entity";

@Entity()
export class MenuItem {
  @PrimaryGeneratedColumn()
  id: number | undefined;

  @Column({ type: "varchar", length: 50 })
  name: string | undefined;

  @Column({ type: "varchar", length: 50 })
  url: string | undefined;

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

  @OneToMany(() => ActionPermission, (actions) => actions.role)
  actions: ActionPermission[] | undefined;

  @ManyToOne(() => Menu, (menu) => menu.menuItems, {
    onDelete: "CASCADE",
    nullable: false,
  })
  menu: Menu | any;

  @ManyToOne(() => User, (user) => user.menuItems)
  createdUser: User | any;
}
