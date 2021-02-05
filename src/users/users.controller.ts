import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {
  }

  @UseGuards(JwtAuthGuard)
  @Post('/set_access_token')
  async setAccessToken(@Request() req) {
    this.usersService.setAccessToken(req.user.username, req.body.access_token);
    return true;
  }
}
