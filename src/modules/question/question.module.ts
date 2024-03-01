/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { QuestionController } from './question.controller';
import { QuestionService } from './question.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Question } from './question.entity';
import { QuestionRepository } from './question.repositoy';
import { QuizModule } from '../quiz/quiz.module';

@Module({
  controllers: [QuestionController],
  providers: [QuestionService],
  imports: [
    TypeOrmModule.forFeature([Question, QuestionRepository]),
    QuizModule,
  ],
  exports: [QuestionService],
})
export class QuestionModule {}
