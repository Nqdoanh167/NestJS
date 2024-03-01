/* eslint-disable prettier/prettier */

import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';

import { AuthModule } from './modules/auth/auth.module';
import { OptionModule } from './modules/option/option.module';
import { QuizModule } from './modules/quiz/quiz.module';
import { QuestionModule } from './modules/question/question.module';
import { UserModule } from './modules/user/user.module';
import { dataSourceOptions } from './database/data-source';

@Module({
  imports: [
    AuthModule,
    QuizModule,
    TypeOrmModule.forRoot(dataSourceOptions),
    QuestionModule,
    OptionModule,
    UserModule,
  ],
})
export class AppModule {}
