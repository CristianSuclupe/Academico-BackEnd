import {
  BaseEntity,
  Column,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
  Entity,
  ManyToOne,
  BeforeInsert,
  BeforeUpdate,
} from "typeorm";
import { Rol } from "./Rol";
import { Persona } from "./Persona";
import bcrypt from "bcrypt";

@Entity()
export class Usuario extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  UsuarioId: string;

  @Column()
  Email: string;

  @Column()
  Contrasena: string;

  @ManyToOne(() => Rol, (rol) => rol.Usuario)
  @JoinColumn({ name: "RolId" })
  Rol: Rol;

  @OneToOne(() => Persona)
  @JoinColumn({ name: "PersonaId" })
  Persona: Persona;

  @Column({ default: false })
  Anulado: Boolean;

  @CreateDateColumn()
  CreatedAt: Date;

  @UpdateDateColumn({ nullable: true })
  UpdatedAt: Date;

  @BeforeInsert()
  @BeforeUpdate()
  async hashPassword() {
    if (this.Contrasena) {
      this.Contrasena = await bcrypt.hash(this.Contrasena, 10);
    }
  }
}
