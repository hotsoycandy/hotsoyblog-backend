import { SignUp } from './sign-up.use-case';
import { MockedUserRepo } from 'src/infra/user/persistence/mock/user.repo.mock';

describe('회원가입 테스트', () => {
  let signUp: SignUp;
  let userRepo: MockedUserRepo;

  beforeEach(async () => {
    userRepo = new MockedUserRepo();
    signUp = new SignUp(userRepo);
  });

  test('123', async () => {
    await signUp.execute({
      email: '',
      password: '',
    });
  });
});
