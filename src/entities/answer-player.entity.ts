import { Player } from "./player.entity";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Question } from "./question.entity";

@Entity("answer_players", { schema: "players" })
export class AnswerPlayer {
  @PrimaryGeneratedColumn()
  id: number | undefined;

  @Column({ type: "varchar", length: 500 })
  answer: string | undefined;

  @ManyToOne(() => Player, (player) => player.answerPlayers)
  player: Player | any;

  @ManyToOne(() => Question, (question) => question.answerPlayers)
  question: Question | any;
}
