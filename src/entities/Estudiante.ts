import {
  BaseEntity,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
  Entity,
  Column,
} from "typeorm";

import { Persona } from "./Persona";

@Entity()
export class Estudiante extends BaseEntity {
  @PrimaryGeneratedColumn("increment")
  EstudianteId: string;

  @OneToOne(() => Persona)
  @JoinColumn({ name: "PersonaId" })
  Persona: Persona;

  @Column({ default: false })
  Anulado: Boolean;

  @CreateDateColumn()
  CreatedAt: Date;

  @UpdateDateColumn({ nullable: true })
  UpdatedAt: Date;
}
