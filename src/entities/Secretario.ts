import {
  BaseEntity,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
  Entity,
} from "typeorm";

import { Persona } from "./Persona";

@Entity()
export class Secretario extends BaseEntity {
  @PrimaryGeneratedColumn("increment")
  SecretarioId: string;

  @OneToOne(() => Persona)
  @JoinColumn({ name: "PersonaId" })
  Persona: Persona;

  @CreateDateColumn()
  CreatedAt: Date;

  @UpdateDateColumn()
  UpdatedAt: Date;
}
