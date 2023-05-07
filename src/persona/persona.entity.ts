import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { PersonaController } from './persona.controller';
import { PersonaService } from './persona.service';

@Entity()
export class Persona {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  apellido: string;

  @Column()
  nombre: string;

  @Column()
  fechaDeNacimiento:Date;

  @Column()
  direccion:string;

  @Column()
  telefono:string;

  @Column()
  pais:string;
}
