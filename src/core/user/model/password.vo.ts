export class Password {
  private readonly _password;

  static pattern: RegExp =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,24}$/;

  constructor(password: string, salt: string = '') {
    this._password = password;
  }

  private static encrypt(password: string): string {
    return '';
  }
}
