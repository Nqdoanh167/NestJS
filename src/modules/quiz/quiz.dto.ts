/* eslint-disable prettier/prettier */

import { IsNotEmpty, Length } from 'class-validator';

/* eslint-disable prettier/prettier */
export class createQuizDTO {
  @IsNotEmpty({ message: 'The quiz should have a title' })
  @Length(3, 255)
  title: string;

  @IsNotEmpty()
  @Length(3)
  description: string;
}
