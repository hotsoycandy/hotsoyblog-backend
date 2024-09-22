import { emitWarning } from 'process';
import { Email } from './email';
import { Password } from './password.vo';

export class User {
  private _email: Email;
  private _password: Password;
  private _createdAt: Date;

  constructor(params: { email: Email; password: string }) {
    const { email, password } = params;
    this._email = email;
    this._password = new Password(password);
    this._createdAt = new Date();
  }
}
