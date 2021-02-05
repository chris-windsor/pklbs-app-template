import { BadRequestException, Controller, Post, Request } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {
  }

  @Post('register')
  async register(@Request() req) {
    return this.authService.register(req.body.user);
  }

  @Post('login')
  async login(@Request() req) {
    if (await this.authService.validateUser(req.body.user)) {
      return this.authService.login(req.body.user);
    } else {
      throw new BadRequestException('User does not exist')
    }
  }
}
