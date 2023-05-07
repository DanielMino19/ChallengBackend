import { Controller,Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { PersonaService } from './persona.service';
import { Persona } from './persona.entity';

@Controller('persona')
export class PersonaController {
    constructor(private readonly personasService: PersonaService) {}

    @Get()
    async findAll(): Promise<Persona[]> {
      return this.personasService.findAll();
    }
  
    @Get(':id')
    async findOne(@Param('id') id: number): Promise<Persona> {
      return this.personasService.findOne(id);
    }
  
    @Post()
    async create(@Body() perso: Persona): Promise<Persona> {
      return this.personasService.create(perso);
    }
  
    @Put(':id')
    async update(@Param('id') id: number, @Body() perso: Persona): Promise<Persona> {
      return this.personasService.update(id, perso);
    }
  
    @Delete(':id')
    async delete(@Param('id') id: number): Promise<void> {
      await this.personasService.delete(id);
    }
}
