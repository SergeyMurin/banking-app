import {
  Column,
  DataType,
  Default,
  IsUUID,
  Length,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';

@Table({
  tableName: 'Users',
})
export class UserEntity extends Model<UserEntity> {
  @PrimaryKey
  @IsUUID(4)
  @Default(DataType.UUIDV4)
  @Column({
    type: DataType.UUID,
    comment: 'UUID primary key',
    allowNull: false,
  })
  id: string;

  @Length({ msg: '', min: 5, max: 25 })
  @Column({ unique: true, allowNull: false })
  username: string;

  @Column({ unique: true, allowNull: false })
  email: string;

  @Column({ allowNull: false, defaultValue: false })
  email_confirmed: boolean;

  @Column
  password: string;
}
