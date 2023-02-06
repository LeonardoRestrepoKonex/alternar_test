import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  Unique,
} from "typeorm";
import { Associate } from "./associate.entity";
import { User } from "./user.entity";

@Entity()
@Unique("UQ_USER", ["user"])
export class AssociateUser {
  @PrimaryGeneratedColumn()
  id: number | undefined;

  @CreateDateColumn({
    type: "timestamptz",
  })
  createAt: Date | undefined;

  @UpdateDateColumn({
    type: "timestamptz",
  })
  updateAt: Date | undefined;

  @ManyToOne(() => User, (user) => user.associateUsers, {
    onDelete: "CASCADE",
    nullable: false,
  })
  user: User | any;

  @ManyToOne(() => Associate, (associate) => associate.associateUsers, {
    onDelete: "CASCADE",
    nullable: false,
  })
  associate: Associate | any;
}
