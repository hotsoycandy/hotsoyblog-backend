export class Post {
  private _postId: string;
  private _title: string;
  private _content: string;
  private _viewCount: number;
  private _createdAt: Date;

  constructor() {}

  increaseViewCount(): void {
    this._viewCount++;
  }
}
