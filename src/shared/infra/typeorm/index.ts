import { DataSource } from 'typeorm';
import * as fs from 'fs';
import User from '@modules/users/infra/typeorm/entities/User';
import UserToken from '@modules/users/infra/typeorm/entities/UserToken';

import { CreateUsers1607534203339 } from './migrations/1607534203339-CreateUsers';
import { CreateUserTokens1607917238905 } from './migrations/1607917238905-CreateUserTokens';

export const dataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'example',
  database: 'mv_user',
  entities: [User, UserToken],
  migrations: [CreateUsers1607534203339, CreateUserTokens1607917238905],
});
