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

  @Column({ nullable: false })
  PrimerNombre: string;

  @Column()
  SegundoNombre: string;

  @Column({ nullable: false })
  PrimerApellido: string;

  @Column()
  SegundoApellido: string;

  @Column({ nullable: false })
  Dni: string;

  @Column()
  Telefono: string;

  @Column()
  Direccion: string;

  @Column({ nullable: false })
  FechaNacimiento: Date;

  @CreateDateColumn()
  CreatedAt: Date;

  @UpdateDateColumn()
  UpdatedAt: Date;
}
