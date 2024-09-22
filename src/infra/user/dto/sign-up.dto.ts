import { IsEmail, IsString, Matches } from 'class-validator';
import { Password } from 'src/core/user/model/password.vo';

export class SignUpApiRequestDto {
  @IsString()
  @IsEmail()
  email!: string;

  @IsString()
  @Matches(Password.pattern)
  password!: string;
}
