import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Usuario } from "./Usuario";

@Entity()
export class Rol extends BaseEntity {
  @PrimaryGeneratedColumn("increment")
  RolId: number;

  @Column()
  NombreRol: string;

  @OneToMany(() => Usuario, (usuario) => usuario.Rol)
  Usuario: Usuario[];

  @CreateDateColumn()
  CreatedAt: Date;

  @UpdateDateColumn({ nullable: true })
  UpdatedAt: Date;
}
