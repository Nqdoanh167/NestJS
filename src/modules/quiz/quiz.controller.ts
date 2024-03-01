/* eslint-disable prettier/prettier */
import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { QuizService } from './quiz.service';
import { createQuizDTO } from './quiz.dto';
import { Quiz } from './quiz.entity';

@Controller('quiz')
export class QuizController {
  constructor(private readonly quizService: QuizService) {}

  @Post()
  @HttpCode(200)
  @UsePipes(ValidationPipe)
  async createQuiz(@Body() quiz: createQuizDTO) {
    return await this.quizService.createQuiz(quiz);
  }
  @Get('/get-all')
  async getAllQuiz(): Promise<Quiz[]> {
    return await this.quizService.getAllQuiz();
  }
  @Get('/:id')
  async getQuizById(@Param('id') quizId: string): Promise<Quiz> {
    return await this.quizService.getQuizById(quizId);
  }
}
