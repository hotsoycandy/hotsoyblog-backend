import { describe, expect, test } from '@jest/globals';
import { Uuid } from './uuid';

describe('Uuid 테스트', () => {
  test('생성하는 아이디는 32자인가?', () => {
    const uuid = new Uuid();
    expect(`${uuid}`).toBe(32);
  });

  test('현재 시간을 잘 반영하는가?', () => {
    const uuid = new Uuid();
    expect(uuid.createdAt.getTime()).toBeGreaterThan(Date.now() - 10);
    expect(uuid.createdAt.getTime()).toBeLessThan(Date.now() + 10);
  });
});
