import escape from 'escape-html';

/** @alias 게시글-문자열 */
export class PostText {
  private _text: string;

  constructor(text: string | PostText) {
    this._text = typeof text === 'string' ? text : text.originalText;
  }

  get text(): string {
    return PostText.escapeText(this._text);
  }

  get originalText(): string {
    return this._text;
  }

  static escapeText(text: string): string {
    return escape(text);
  }
}
