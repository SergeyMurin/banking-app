import { Sequelize } from 'sequelize';
import { databaseConfig } from './database.config';

export const sequelize = new Sequelize({
  dialect: databaseConfig.dialect,
  host: databaseConfig.host,
  port: databaseConfig.port,
  username: databaseConfig.username,
  password: databaseConfig.password,
  database: databaseConfig.database,
});
