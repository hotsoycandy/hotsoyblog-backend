import { PostRepo } from '../post.repo';

export class MockedPostRepo extends PostRepo {
  insert: jest.MockedFunction<PostRepo['insert']> = jest.fn();
  find: jest.MockedFunction<PostRepo['find']> = jest.fn();
  findOne: jest.MockedFunction<PostRepo['findOne']> = jest.fn();
  update: jest.MockedFunction<PostRepo['update']> = jest.fn();
  delete: jest.MockedFunction<PostRepo['delete']> = jest.fn();

  mockClear(): void {
    this.insert.mockClear();
    this.find.mockClear();
    this.findOne.mockClear();
    this.update.mockClear();
    this.delete.mockClear();
  }
}
