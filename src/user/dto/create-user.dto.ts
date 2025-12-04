import { IsEnum, IsString, MinLength } from 'class-validator';
import { ValidRoles } from 'src/auth/interfaces/valid-roles';

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
  @IsEnum(ValidRoles, {
    message: `El rol debe ser uno de: ${Object.values(ValidRoles).join(', ')}`,
  })
  rol: string;
}
