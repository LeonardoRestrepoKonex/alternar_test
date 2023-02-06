import { Entity, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Operator } from "./operator.entity";
import { Role } from "./role.entity";

@Entity()
export class RoleOperator {
  @PrimaryGeneratedColumn()
  id: number | undefined;

  @ManyToOne(() => Role, (roles) => roles.roleOperators, {
    onDelete: "CASCADE",
    nullable: false,
  })
  role: Role | any;

  @ManyToOne(() => Operator, (operator) => operator.rolesOperators, {
    onDelete: "CASCADE",
    nullable: false,
  })
  operator: Operator | any;
}
