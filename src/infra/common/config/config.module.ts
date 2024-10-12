import { Global, Module, Provider } from '@nestjs/common';
import { ConfigModule as NestConfigModule } from '@nestjs/config';
import { DbConfig, DBConfigNamespace } from './db.config';

const providers: Provider[] = [
  {
    provide: DbConfig,
    useExisting: DBConfigNamespace.KEY,
  },
];

@Global()
@Module({
  imports: [
    NestConfigModule.forRoot({
      load: [DBConfigNamespace],
      cache: true,
    }),
  ],
  providers: [...providers],
  exports: [...providers],
})
export class ConfigModule {}
