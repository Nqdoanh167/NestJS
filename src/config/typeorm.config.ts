/* eslint-disable prettier/prettier */
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const DBOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '123456',
  database: 'db_nest', // Thêm 'photpo' vào mảng database
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  synchronize: true,
  //   logging: true,
};
