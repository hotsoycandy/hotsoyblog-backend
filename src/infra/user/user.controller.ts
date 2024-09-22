import { Body, Controller, Post } from '@nestjs/common';
import { SignUp } from 'src/core/user/service/use-case/sign-up.use-case';
import { SignUpApiRequestDto } from './dto/sign-up.dto';

@Controller('/users')
export class UserController {
  constructor(private readonly signUp: SignUp) {}

  @Post('/sign-up')
  async signUpApi(@Body() body: SignUpApiRequestDto): Promise<void> {
    const { email, password } = body;
    await this.signUp.execute({
      email,
      password,
    });
  }
}
