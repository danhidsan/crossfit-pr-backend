import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PrModule } from './pr/pr.module';
import { ExerciseModule } from './exercise/exercise.module';
import { User } from './user/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    UserModule, PrModule, ExerciseModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
