/* eslint-disable prettier/prettier */
import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTest1709280656014 implements MigrationInterface {
  name = 'CreateTest1709280656014';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "quiz" ALTER COLUMN "isActive" SET DEFAULT '1'`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "quiz" ALTER COLUMN "isActive" SET DEFAULT true`,
    );
  }
}
