import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'owner',
  password: 'root',
  database: 'catmanagement',
  entities: [__dirname + '/../**/*.entities.ts'],
  synchronize: true,
};
