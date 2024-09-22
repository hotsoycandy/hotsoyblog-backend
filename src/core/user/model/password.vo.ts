import crypto from 'crypto';

export class Password {
  private readonly _password;

  constructor(password: string, salt: string = '') {
    this._password = password;
  }

  private static encrypt(password: string): string {
    return '';
  }

  static pattern =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,24}$/;
}
