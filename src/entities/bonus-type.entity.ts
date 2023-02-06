import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from "typeorm";
import { Bonus } from "./bonus.entity";
@Entity("bonus_type", { schema: "bets" })
export class BonusType {
  @PrimaryGeneratedColumn()
  id: number | undefined;
  @Column({ type: "varchar" })
  name: string;
  @Column({ type: "varchar" })
  value: string;
  @CreateDateColumn({
    type: "timestamptz",
  })
  createAt: Date;

  @UpdateDateColumn({
    type: "timestamptz",
  })
  updateAt: Date;
  @OneToMany(() => Bonus, (bonus) => bonus.bonusType, {
    cascade: true,
  })
  bonus: Bonus[] | undefined;
}
