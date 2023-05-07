import { Controller,Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { PersonaService } from './persona.service';
import { PersonaModule } from './persona.module';

@Controller('persona')
export class PersonaController {
    constructor(private readonly personasService: PersonaService) {}

    @Get()
    async findAll(): Promise<PersonaModule[]> {
      return this.personasService.findAll();
    }
  
    @Get(':id')
    async findOne(@Param('id') id: number): Promise<PersonaModule> {
      return this.personasService.findOne(id);
    }
  
    @Post()
    async create(@Body() perso: PersonaModule): Promise<PersonaModule> {
      return this.personasService.create(perso);
    }
  
    @Put(':id')
    async update(@Param('id') id: number, @Body() perso: PersonaModule): Promise<PersonaModule> {
      return this.personasService.update(id, perso);
    }
  
    @Delete(':id')
    async delete(@Param('id') id: number): Promise<void> {
      await this.personasService.delete(id);
    }
}
