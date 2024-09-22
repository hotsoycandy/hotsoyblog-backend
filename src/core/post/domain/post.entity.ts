import { Uuid } from '../../common/class/uuid';
import { PostText } from './post-text.vo';

/** @alias 게시글 */
export class Post {
  private _postId: Uuid;
  private _title: PostText;
  private _content: PostText;
  private _viewCount: number;
  private _createdAt: Date;

  constructor(params: {
    postId?: Uuid;
    title: string | PostText;
    content: string | PostText;
    createdAt?: Date;
  }) {
    const {
      postId = new Uuid(),
      title,
      content,
      createdAt = new Date(),
    } = params;

    this._postId = postId;
    this._title = new PostText(title);
    this._content = new PostText(content);
    this._viewCount = 0;
    this._createdAt = createdAt;
  }

  get postId(): Uuid {
    return this._postId;
  }

  get title(): string {
    return this._title.text;
  }

  get content(): string {
    return this._content.text;
  }

  get viewCount(): number {
    return this._viewCount;
  }

  get createdAt(): Date {
    return this._createdAt;
  }

  increaseViewCount(): void {
    this._viewCount++;
  }
}
