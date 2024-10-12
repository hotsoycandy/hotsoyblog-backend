import { plainToInstance, type ClassConstructor } from 'class-transformer';
import { validateSync } from 'class-validator';

export default <T extends object>(cls: ClassConstructor<T>): T => {
  const validatedConfig = plainToInstance(cls, process.env, {
    enableImplicitConversion: true,
    excludeExtraneousValues: true,
  });

  const errors = validateSync(validatedConfig, {
    skipMissingProperties: false,
  });

  if (errors.length > 0) {
    throw new Error(errors.toString());
  }

  return validatedConfig;
};
