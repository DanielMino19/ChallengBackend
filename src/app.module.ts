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
      host: 'bgfh4edmciemtav8nqxq-mysql.services.clever-cloud.com',
      port: 3306,
      username: 'umx2e96ryhtrvw0c',
      password: 'FAzGrfGcqMhPUxzjRQw9',
      database: 'bgfh4edmciemtav8nqxq',
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
