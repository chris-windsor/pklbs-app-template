import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entity/User';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  async add(username: string, password: string): Promise<void> {
    const newUser = new User();
    newUser.username = username;
    newUser.password = password;

    await this.usersRepository.save(this.usersRepository.create(newUser));
  }

  findOne(username: string): Promise<User> {
    return this.usersRepository.findOne({
      username
    });
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }

  setAccessToken(username: string, access_token: string) {
    this.usersRepository.update({username}, { access_token });
  }
}
