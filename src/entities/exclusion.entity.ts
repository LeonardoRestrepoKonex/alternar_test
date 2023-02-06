import { Player } from "./player.entity";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { Games } from "./game.entity";

@Entity("exclusions", { schema: "players" })
export class Exclusion {
  @PrimaryGeneratedColumn()
  id: number | undefined;

  @Column({
    type: "timestamptz",
  })
  startDate: Date | undefined;

  @Column({
    type: "timestamptz",
  })
  endDate: Date | undefined;

  @Column({ type: "integer" })
  state: number | undefined;

  @Column({ type: "integer" })
  totalExclusion: number | undefined;

  @CreateDateColumn({
    type: "timestamptz",
  })
  createAt: Date | undefined;

  @UpdateDateColumn({
    type: "timestamptz",
  })
  updateAt: Date | undefined;

  @ManyToOne(() => Player, (player) => player.exclusions, {
    onDelete: "CASCADE",
  })
  player: Player | any;

  @ManyToOne(() => Games, (game) => game.exclusions, { onDelete: "CASCADE" })
  game: Games | any;
}
