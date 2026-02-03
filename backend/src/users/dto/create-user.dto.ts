import {
  IsNotEmpty,
  IsEmail,
  IsString,
  Length,
  MinLength,
  MaxLength,
  Matches,
} from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty({ message: 'First name cannot be empty' })
  @IsString()
  @MinLength(3, { message: 'First name must be at least 3 characters long' })
  firstName: string;

  @IsNotEmpty({ message: 'Last name cannot be empty' })
  @IsString()
  @MinLength(3, { message: 'Last name must be at least 3 characters long' })
  lastName: string;

  @IsEmail({}, { message: 'Please provide a valid email address' })
  @IsNotEmpty({ message: 'E-mail cannot be empty' })
  email: string;

  @IsString()
  @Length(11, 14, { message: 'CPF must be between 11 and14 characters' })
  cpf: string;

  @IsString()
  @IsNotEmpty({ message: 'Address cannot be empty' })
  address: string;

  @IsString()
  @IsNotEmpty({ message: 'City cannot be empty' })
  city: string;

  @IsString()
  @IsNotEmpty({ message: 'State cannot be empty' })
  state: string;

  @IsString()
  @MinLength(6, { message: 'Password must be at least 6 characters long' })
  @MaxLength(20, { message: 'Password must be at most 20 characters long' })
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message:
      'Password must contain at least one uppercase letter, one lowercase letter, and one number or special character',
  })
  password: string;
}
