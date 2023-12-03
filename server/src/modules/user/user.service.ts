import { Injectable } from '@nestjs/common';
import { UserEntity } from './entity/user.entity/user.entity';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(UserEntity)
    private userModel: typeof UserEntity,
  ) {}
}
