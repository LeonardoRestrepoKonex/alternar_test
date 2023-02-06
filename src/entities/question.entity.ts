import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { AnswerPlayer } from "./answer-player.entity";

@Entity("questions", { schema: "players" })
export class Question {
  @PrimaryGeneratedColumn()
  id: number | undefined;

  @Column({ type: "varchar", length: 500 })
  question: string | undefined;

  @OneToMany(() => AnswerPlayer, (answers) => answers.question)
  answerPlayers: AnswerPlayer[] | undefined;
}
