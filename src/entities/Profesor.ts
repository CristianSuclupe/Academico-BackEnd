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
export class Profesor extends BaseEntity {
  @PrimaryGeneratedColumn("increment")
  ProfesorId: string;

  @OneToOne(() => Persona)
  @JoinColumn({ name: "PersonaId" })
  Persona: Persona;

  @Column()
  Especialidad: string;

  @Column({ default: false })
  Anulado: Boolean;

  @CreateDateColumn()
  CreatedAt: Date;

  @UpdateDateColumn({ nullable: true })
  UpdatedAt: Date;
}
