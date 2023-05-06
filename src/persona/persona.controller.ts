import { Controller,Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { PersonaService } from './persona.service';
import { PersonaModule } from './persona.module';

@Controller('persona')
export class PersonaController {
    constructor(private readonly productsService: PersonaService) {}

    @Get()
    async findAll(): Promise<PersonaModule[]> {
      return this.productsService.findAll();
    }
  
    @Get(':id')
    async findOne(@Param('id') id: number): Promise<PersonaModule> {
      return this.productsService.findOne(id);
    }
  
    @Post()
    async create(@Body() product: PersonaModule): Promise<PersonaModule> {
      return this.productsService.create(product);
    }
  
    @Put(':id')
    async update(@Param('id') id: number, @Body() product: PersonaModule): Promise<PersonaModule> {
      return this.productsService.update(id, product);
    }
  
    @Delete(':id')
    async delete(@Param('id') id: number): Promise<void> {
      await this.productsService.delete(id);
    }
}
