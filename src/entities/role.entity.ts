import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from "typeorm";
import { User } from "./user.entity";
import { ActionPermission } from "./action-permission.entity";
import { RoleOperator } from "./role-operator.entity";

@Entity()
// @Unique('UQ_NAME_OPERATOR', ['name', 'operator'])
export class Role {
  @PrimaryGeneratedColumn()
  id: number | undefined;

  @Column({ type: "varchar", length: 45 })
  name: string | undefined;

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

  @OneToMany(() => User, (users) => users.role, { cascade: true })
  users: User[] | undefined;

  @OneToMany(
    () => ActionPermission,
    (actionPermissions) => actionPermissions.role,
    { cascade: true }
  )
  actionPermissions: ActionPermission[] | undefined;

  @OneToMany(() => RoleOperator, (roleOperators) => roleOperators.role, {
    cascade: true,
  })
  roleOperators: RoleOperator[] | any;
}
