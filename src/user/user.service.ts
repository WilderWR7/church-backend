import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    try {
      const user = this.userRepository.create(createUserDto);
      const newUser = await this.userRepository.save(user);
      return newUser;
    } catch (error) {
      return error;
    }
  }

  async findOne(id: string) {
    try {
      const user = await this.userRepository.findOneBy({ id });
      return user;
    } catch (error) {
      return error;
    }
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    try {
      const user = await this.findOne(id);
      Object.assign(user, updateUserDto);
      return this.userRepository.save(user);
    } catch (error) {
      return error;
    }
  }

  async remove(id: string) {
    try {
      await this.userRepository.softDelete(id);
      return {
        status: 'OK',
      };
    } catch (error) {
      return error;
    }
  }
}
