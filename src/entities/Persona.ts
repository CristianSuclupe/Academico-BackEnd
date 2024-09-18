import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity()
export class Persona extends BaseEntity {
  @PrimaryGeneratedColumn("increment")
  PersonaId: number;

  @Column()
  PrimerNombre: string;

  @Column({ nullable: true })
  SegundoNombre: string;

  @Column()
  PrimerApellido: string;

  @Column({ nullable: true })
  SegundoApellido: string;

  @Column()
  Dni: string;

  @Column({ nullable: true })
  Telefono: string;

  @Column()
  Direccion: string;

  @Column()
  FechaNacimiento: Date;

  @CreateDateColumn()
  CreatedAt: Date;

  @UpdateDateColumn({ nullable: true })
  UpdatedAt: Date;
}
