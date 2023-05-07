import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PersonaModule } from './persona.module';

@Injectable()
export class PersonaService {
  constructor(
    @InjectRepository(PersonaModule)
    private personasRepository: Repository<PersonaModule>,
  ) {}

  create(perso: PersonaModule) {
    return this.personasRepository.save(perso);
      }
    
  findAll(): Promise<PersonaModule[]> {
        return this.personasRepository.find();
      }
    
   findOne(id: number): Promise<PersonaModule> {
        return this.personasRepository.findOne({ where: { id } });
      }
    
      async update(id: number, perso: PersonaModule) {
        await this.personasRepository.update(id, perso);
        return this.personasRepository.findOne({ where: { id } });
      }
    
  delete(id: number) {
    return this.personasRepository.delete(id);
  }
}
