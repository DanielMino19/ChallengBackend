import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PersonaModule } from './persona.module';

@Injectable()
export class PersonaService {
  constructor(
    @InjectRepository(PersonaModule)
    private productsRepository: Repository<PersonaModule>,
  ) {}

  create(perso: PersonaModule) {
    return this.productsRepository.save(perso);
      }
    
  findAll(): Promise<PersonaModule[]> {
        return this.productsRepository.find();
      }
    
   findOne(id: number): Promise<PersonaModule> {
        return this.productsRepository.findOne({ where: { id } });
      }
    
      async update(id: number, product: PersonaModule) {
        await this.productsRepository.update(id, product);
        return this.productsRepository.findOne({ where: { id } });
      }
    
  delete(id: number) {
    return this.productsRepository.delete(id);
  }
}
