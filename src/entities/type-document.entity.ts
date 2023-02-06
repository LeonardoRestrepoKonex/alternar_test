import { Player } from "./player.entity";
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { User } from "./user.entity";
import { Associate } from "./associate.entity";

@Entity()
export class TypeDocument {
  @PrimaryGeneratedColumn()
  id: number | undefined;

  @Column({ type: "varchar", length: 85 })
  name: string | undefined;

  @Column({ type: "varchar", length: 255 })
  observation: string | undefined;

  @OneToMany(() => User, (users) => users.role)
  users: User[] | undefined;

  @OneToMany(() => Player, (players) => players.typeDocument)
  players: User[] | undefined;

  @OneToMany(() => Associate, (associates) => associates.documentType)
  associates: Associate[] | undefined;
}
