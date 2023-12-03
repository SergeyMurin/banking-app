import { databaseConfig } from 'config/database.config';
import { Sequelize } from 'sequelize-typescript';
import { UserEntity } from 'src/modules/user/entity/user.entity/user.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: databaseConfig.dialect,
        host: databaseConfig.host,
        port: databaseConfig.port,
        username: databaseConfig.username,
        password: databaseConfig.password,
        database: databaseConfig.database,
      });

      try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
      sequelize.addModels([UserEntity]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
