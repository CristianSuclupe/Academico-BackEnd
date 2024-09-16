import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity()
export class Rol extends BaseEntity {
  @PrimaryGeneratedColumn("increment")
  RolId: number;

  @Column({ nullable: false })
  NombreRol: string;

  @CreateDateColumn()
  CreatedAt: Date;

  @UpdateDateColumn()
  UpdatedAt: Date;
}
