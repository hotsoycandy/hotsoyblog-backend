import { Injectable } from '@nestjs/common';
import { PostRepo } from '../post.repo';

@Injectable()
export class MockedPostRepo extends PostRepo {
  insert: jest.MockedFunction<PostRepo['insert']> = jest.fn();
  findList: jest.MockedFunction<PostRepo['findList']> = jest.fn();
  findOne: jest.MockedFunction<PostRepo['findOne']> = jest.fn();
  update: jest.MockedFunction<PostRepo['update']> = jest.fn();
  delete: jest.MockedFunction<PostRepo['delete']> = jest.fn();

  mockClear(): void {
    this.insert.mockClear();
    this.findList.mockClear();
    this.findOne.mockClear();
    this.update.mockClear();
    this.delete.mockClear();
  }

  isInsertCalled(): boolean {
    return this.insert.mock.calls.length > 0;
  }

  isUpdateCalled(): boolean {
    return this.insert.mock.calls.length > 0;
  }

  isDeleteCalled(): boolean {
    return this.insert.mock.calls.length > 0;
  }
}
