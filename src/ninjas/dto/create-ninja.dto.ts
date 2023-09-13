import { IsEnum, MinLength } from 'class-validator';

export class CreateNinjaDto {
  @MinLength(3)
  name: string;

  @IsEnum(['stars', 'nun chucks'], { message: 'Use the correct weapon' })
  weapon: 'stars' | 'nun chucks';
}
