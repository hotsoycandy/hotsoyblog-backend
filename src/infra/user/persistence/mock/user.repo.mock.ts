import { UserRepo } from '../../../../core/user/persistence/user.repo';

export class MockedUserRepo extends UserRepo {
  insert: jest.MockedFn<UserRepo['insert']> = jest.fn();
}
