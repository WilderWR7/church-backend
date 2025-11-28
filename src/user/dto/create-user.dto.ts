import { IsString, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @MinLength(4)
  id: string;
  @IsString()
  @MinLength(6)
  password: string;
  @IsString()
  @MinLength(3)
  firstName: string;
  @IsString()
  @MinLength(3)
  lastName: string;
  @IsString({
    groups: ['super-admin', 'admin', 'user'],
  })
  rol: string;
}
