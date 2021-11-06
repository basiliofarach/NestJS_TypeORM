import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Color } from "./cats.models";

@Entity()
export class Cats extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  title: string;
  @Column()
  description: string;
  @Column()
  color: Color;
}
