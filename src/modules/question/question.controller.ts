/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { QuestionService } from './question.service';
import { CreateQuestionDto } from './question.dto';
import { QuizService } from '../quiz/quiz.service';
import { Question } from './question.entity';

@Controller('question')
export class QuestionController {
  constructor(
    private questionService: QuestionService,
    private quizService: QuizService,
  ) {}

  @Post()
  async createQuestion(@Body() question: CreateQuestionDto) {
    const quiz = await this.quizService.getQuizById(question.quizId);
    return await this.questionService.createQuestion(question, quiz);
  }

  @Get('/:id')
  async getQuestionById(@Param('id') questionId: string): Promise<Question> {
    return await this.questionService.getQuestionById(questionId);
  }
}
