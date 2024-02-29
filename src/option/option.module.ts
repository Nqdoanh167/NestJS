/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { OptionController } from './option.controller';
import { OptionService } from './option.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OptionRepository } from './option.repository';
import { QuestionModule } from 'src/question/question.module';
import { Option } from './option.entity';

@Module({
  controllers: [OptionController],
  providers: [OptionService],
  imports: [
    QuestionModule,
    TypeOrmModule.forFeature([Option, OptionRepository]),
  ],
})
export class OptionModule {}
