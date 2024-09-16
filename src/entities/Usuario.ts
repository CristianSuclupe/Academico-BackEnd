import {
  BaseEntity,
  Column,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
  Entity,
} from "typeorm";
import { Rol } from "./Rol";
import { Persona } from "./Persona";

@Entity()
export class Usuario extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  UsuarioId: string;

  @Column({ nullable: false })
  Email: string;

  @Column({ nullable: false })
  Contrasena: string;

  @OneToOne(() => Rol)
  @JoinColumn({ name: "RolId" })
  Rol: Rol;

  @OneToOne(() => Persona)
  @JoinColumn({ name: "PersonaId" })
  Persona: Persona;

  @CreateDateColumn()
  CreatedAt: Date;

  @UpdateDateColumn()
  UpdatedAt: Date;
}
