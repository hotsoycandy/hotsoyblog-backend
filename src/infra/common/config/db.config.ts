import configValidator from './config.validator';
import { registerAs } from '@nestjs/config';
import { Expose, Type } from 'class-transformer';
import { IsNumber, IsString } from 'class-validator';

export class DbConfig {
  @IsString()
  @Expose({ name: 'DB_HOST' })
  host!: string;

  @IsString()
  @Expose({ name: 'DB_DATABASE' })
  database!: string;

  @IsNumber()
  @Expose({ name: 'DB_PORT' })
  @Type(() => Number)
  port!: number;

  @IsString()
  @Expose({ name: 'DB_USER' })
  user!: string;

  @IsString()
  @Expose({ name: 'DB_PASSWORD' })
  password!: string;
}

export const DBConfigNamespace = registerAs(DbConfig.name, () =>
  configValidator(DbConfig)
);
