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
export class Estudiante extends BaseEntity {
  @PrimaryGeneratedColumn("increment")
  EstudianteId: string;

  @OneToOne(() => Persona)
  @JoinColumn({ name: "PersonaId" })
  Persona: Persona;

  @CreateDateColumn()
  CreatedAt: Date;

  @UpdateDateColumn()
  UpdatedAt: Date;
}
