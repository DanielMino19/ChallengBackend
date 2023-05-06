import { Module } from '@nestjs/common';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Module({})
@Entity()
export class PersonaModule {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  apellido: string;

  @Column()
  name: string;

  @Column()
  fechaDeNacimiento: Date;

  @Column()
  direccion:string;

  @Column()
  telefono:number;

  @Column()
  pais:string;
}
