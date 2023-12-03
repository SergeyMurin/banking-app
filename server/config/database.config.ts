import { Dialect } from "sequelize";

interface IDatabaseConfig {
  dialect: Dialect;
  host: string;
  port: number;
  username: string;
  password: string;
  database: string;
}

export const databaseConfig: IDatabaseConfig = {
  dialect: 'postgres',
  host: 'localhost',
  port: 5555,
  username: 'postgres',
  password: 'admin',
  database: 'banking',
};
