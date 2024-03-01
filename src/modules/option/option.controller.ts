/* eslint-disable prettier/prettier */
import { Body, Controller, Post } from '@nestjs/common';
import { OptionService } from './option.service';
import { CreateOptionDto } from './option.dto';
import { Option } from './option.entity';
import { QuestionService } from '../question/question.service';

@Controller('option')
export class OptionController {
  constructor(
    private optionService: OptionService,
    private questionService: QuestionService,
  ) {}

  @Post()
  async createOption(@Body() option: CreateOptionDto): Promise<Option> {
    const question = await this.questionService.getQuestionById(
      option.questionId,
    );
    return await this.optionService.createOption(option, question);
  }
}
