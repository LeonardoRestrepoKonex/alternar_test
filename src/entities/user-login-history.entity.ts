import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./user.entity";

@Entity()
export class UserLoginHistory {
  @PrimaryGeneratedColumn()
  id: number | undefined;

  @Column({ type: "varchar", length: 30 })
  ip: string | undefined;

  @Column({ type: "integer" })
  success: number | undefined;

  @CreateDateColumn({
    type: "timestamptz",
  })
  createAt: Date | undefined;

  @ManyToOne(() => User, (user) => user.userLoginHistories)
  User: User | undefined;
}
