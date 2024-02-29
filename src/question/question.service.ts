/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Question } from './question.entity';
import { CreateQuestionDto } from './question.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Quiz } from 'src/quiz/quiz.entity';

@Injectable()
export class QuestionService {
  constructor(
    @InjectRepository(Question)
    private questionRepository: Repository<Question>,
  ) {}

  async createQuestion(question: CreateQuestionDto, quiz: Quiz) {
    const newQuestion = await this.questionRepository.save({
      question: question.question,
      quiz: quiz,
    });
    delete newQuestion.quiz;
    return newQuestion;
  }
  async getQuestionById(questionId: string): Promise<Question> {
    return await this.questionRepository.findOne({
      where: {
        id: questionId,
      },
      relations: {
        options: true,
      },
    });
  }
}
