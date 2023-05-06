import { Module } from '@nestjs/common';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Module({})
@Entity()
export class PersonaModule {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  price: number;
}
