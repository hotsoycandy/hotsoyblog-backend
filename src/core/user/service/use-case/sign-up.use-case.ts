import { User } from '../../model/user.entity';
import { UserRepo } from '../../persistence/user.repo';

/** @alias 회원가입 */
export class SignUp {
  constructor(private readonly userRepo: UserRepo) {}

  async execute(params: { email: string; password: string }): Promise<void> {
    const { email, password } = params;
    const user = new User({ email, password });
    await this.userRepo.insert(user);
  }
}
