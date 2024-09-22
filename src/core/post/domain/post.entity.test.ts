import { Post } from './post.entity';

describe('게시글 Entity 테스트', () => {
  test('게시글 조회수를 정상적으로 올릴 수 있는가?', () => {
    const post = new Post({
      title: '123',
      content: '123',
    });
    expect(post.viewCount).toBe(0);
    post.increaseViewCount();
    expect(post.viewCount).toBe(1);
  });

  test('제목을 입력했을 때 escape된 문자열을 반환하는가?', () => {
    const post = new Post({
      title: '<h1>this is title</h1>',
      content: 'nothing',
    });
    expect(post.title).toBe('&lt;h1&gt;this is title&lt;/h1&gt;');
  });

  test('제목을 입력했을 때 escape된 문자열을 반환하는가?', () => {
    const post = new Post({
      title: 'nothing',
      content: '<p>this is content</p>',
    });
    expect(post.content).toBe('&lt;p&gt;this is content&lt;/p&gt;');
  });
});
