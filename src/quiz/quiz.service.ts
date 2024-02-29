/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { createQuizDTO } from './quiz.dto';
import { Quiz } from './quiz.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Question } from 'src/question/question.entity';

@Injectable()
export class QuizService {
  constructor(
    @InjectRepository(Quiz)
    private quizRepository: Repository<Quiz>,
  ) {}
  async createQuiz(quiz: createQuizDTO) {
    return await this.quizRepository.save(quiz);
  }
  async getAllQuiz(): Promise<Quiz[]> {
    return await this.quizRepository
      .createQueryBuilder('q')
      .leftJoinAndSelect('q.questions', 'qt')
      .getMany();
  }
  async getQuizById(quizId: string): Promise<Quiz> {
    return await this.quizRepository.findOne({
      where: {
        id: quizId,
      },
      relations: {
        questions: true,
      },
    });
  }
}
