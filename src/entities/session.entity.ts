import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  ManyToOne,
} from "typeorm";
import { Player } from "./index.entity";
import { User } from "./user.entity";

@Entity()
export class Session {
  @PrimaryGeneratedColumn()
  id: number | undefined;

  @Column({ type: "varchar", length: 50 })
  ip: string | undefined;

  @Column({ type: "varchar", length: 255 })
  token: string | undefined;

  @Column({ type: "boolean" })
  active: boolean;

  @CreateDateColumn({
    type: "timestamptz",
  })
  lastAt: Date | undefined;

  @CreateDateColumn({
    type: "timestamptz",
  })
  createAt: Date | undefined;

  @UpdateDateColumn({
    type: "timestamptz",
  })
  updateAt: Date | undefined;

  @ManyToOne(() => User, (user) => user.sessions)
  user: User;

  @ManyToOne(() => Player, (player) => player.sessions)
  player: Player;
}
