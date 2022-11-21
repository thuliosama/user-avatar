import { DataSource } from 'typeorm';
import * as fs from 'fs';
import User from '@modules/users/infra/typeorm/entities/User';
import UserToken from '@modules/users/infra/typeorm/entities/UserToken';

import { CreateUsers1607534203339 } from './migrations/1607534203339-CreateUsers';
import { CreateUserTokens1607917238905 } from './migrations/1607917238905-CreateUserTokens';

export const dataSource = new DataSource({
  type: 'mysql',
  host: 'mv-user-db-mysql-nyc1-do-user-1216975-0.b.db.ondigitalocean.com',
  port: 25060,
  username: 'doadmin',
  password: 'AVNS_nUqpQGe5bFbmuHrGqUW',
  database: 'defaultdb',
  ssl: {
    ca: fs.readFileSync('./cert/ca-certificate.crt').toString(),
  },
  entities: [User, UserToken],
  migrations: [CreateUsers1607534203339, CreateUserTokens1607917238905],
});
