import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Persona } from './persona.entity';

@Injectable()
export class PersonaService {
  constructor(
    @InjectRepository(Persona)
    private personasRepository: Repository<Persona>,
  ) {}

  create(persona: Persona) {
    return this.personasRepository.save(persona);
      }
    
  findAll(): Promise<Persona[]> {
        return this.personasRepository.find();
      }
    
   findOne(id: number): Promise<Persona> {
        return this.personasRepository.findOne({ where: { id } });
      }
    
      async update(id: number, persona: Persona) {
        await this.personasRepository.update(id, persona);
        return this.personasRepository.findOne({ where: { id } });
      }
    
  delete(id: number) {
    return this.personasRepository.delete(id);
  }
}
