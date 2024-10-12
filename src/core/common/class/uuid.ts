import { v1 as uuidV1 } from 'uuid';
import { isUndefined } from '../lib/is-undefined';

export class Uuid {
  private _uuid: string;

  constructor(uuid?: string) {
    if (isUndefined(uuid)) {
      const tokens = uuidV1().split('-');
      uuid = `${tokens[2]}${tokens[1]}${tokens[0]}${tokens[3]}${tokens[4]}`;
    }
    this._uuid = uuid;
  }

  toString(): string {
    return this._uuid;
  }

  get createdAt(): Date {
    return new Date(parseInt(this._uuid.substring(1, 16), 16));
  }
}
