import { v1 as uuidV1 } from 'uuid';

export class Uuid {
  private _uuid: string;

  constructor(uuid: string = uuidV1()) {
    const tokens = uuid.split('-');
    this._uuid = `${tokens[2]}${tokens[1]}${tokens[0]}${tokens[3]}${tokens[4]}`;
  }

  toString(): string {
    return this._uuid;
  }

  get createdAt(): Date {
    return new Date(parseInt(this._uuid.substring(1, 16), 16));
  }
}
