import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';
import { Role } from './role.entity';
import { Menu } from './menu.entity';
import { MenuItem } from './menu-item.entity';

@Entity('actions_permissions')
export class ActionPermission {
  @PrimaryGeneratedColumn()
  id: number | undefined;

  @Column({ type: 'integer' })
  created: number | undefined;

  @Column({ type: 'integer' })
  updated: number | undefined;

  @Column({ type: 'integer' })
  readed: number | undefined;

  @Column({ type: 'integer' })
  deleted: number | undefined;

  @CreateDateColumn({
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createAt: Date | undefined;

  @UpdateDateColumn({
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  updateAt: Date | undefined;

  @ManyToOne(() => Role, (roles) => roles.actionPermissions, {
    onDelete: 'CASCADE',
    nullable: false,
  })
  role: Role | any;

  @ManyToOne(() => Menu, (menu) => menu.actions)
  menu: Menu | any;

  @ManyToOne(() => MenuItem, (menuItem) => menuItem.actions, { nullable: true })
  menuItem: MenuItem | any;
}
