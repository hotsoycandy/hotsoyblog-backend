import { User } from '../model/user.entity';

export abstract class UserRepo {
  abstract insert(use: User): Promise<void>;
}
