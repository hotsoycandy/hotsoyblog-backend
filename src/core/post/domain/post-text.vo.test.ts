import { PostText } from './post-text.vo';

describe('PostText Vo 테스트', () => {
  test('text를 조회할 때 escape된 문자열을 반환하는가?', () => {
    const postText = new PostText('<script>alert("you are hacked!");</script>');
    expect(postText.text).toBe(
      '&lt;script&gt;alert(&quot;you are hacked!&quot;);&lt;/script&gt;'
    );
  });

  test('원본 text도 조회할 수 있는가?', () => {
    const postText = new PostText('<script>alert("you are hacked!");</script>');
    expect(postText.originalText).toBe(
      '<script>alert("you are hacked!");</script>'
    );
  });
});
