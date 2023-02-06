import { PointSale } from "./points-sale.entity";
import { Games } from "./game.entity";
import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from "typeorm";

@Entity()
export class GameSalePoint {
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

  @ManyToOne(() => PointSale, (pointSale) => pointSale.configGames, {
    onDelete: "CASCADE",
    nullable: false,
  })
  pointSale: PointSale | any;

  @ManyToOne(() => Games, (game) => game.gamePointSales, {
    onDelete: "CASCADE",
    nullable: false,
  })
  game: Games | any;
}
