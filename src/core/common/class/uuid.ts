import { v1 as uuidV1 } from 'uuid';

export class Uuid {
  private _uuid: string;

  constructor() {
    const uuid = uuidV1();
    const tokens = uuid.split('-');
    this._uuid = `${tokens[2]}${tokens[1]}${tokens[0]}${tokens[3]}${tokens[4]}`;
  }

  get createdAt(): Date {
    console.log(this._uuid, parseInt(this._uuid.substring(1, 16), 16));
    return new Date(parseInt(this._uuid.substring(1, 16), 16));
  }
}
