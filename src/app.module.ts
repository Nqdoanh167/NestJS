/* eslint-disable prettier/prettier */

import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';

import { TypeOrmModule } from '@nestjs/typeorm';
import { DBOrmConfig } from './config/typeorm.config';

import { OptionModule } from './modules/option/option.module';
import { QuizModule } from './modules/quiz/quiz.module';
import { QuestionModule } from './modules/question/question.module';

@Module({
  imports: [
    AuthModule,
    QuizModule,
    TypeOrmModule.forRoot(DBOrmConfig),
    QuestionModule,
    OptionModule,
  ],
})
export class AppModule {}
