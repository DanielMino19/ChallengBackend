import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { PersonaController } from './persona/persona.controller';
import { PersonaService } from './persona/persona.service';
import { PersonaModule } from './persona/persona.module';

@Module({
  imports:[
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [PersonaModule],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([PersonaModule]), 
    PersonaModule,
  ],
  controllers: [AppController, PersonaController],
  providers: [AppService, PersonaService],
})
export class AppModule {}
