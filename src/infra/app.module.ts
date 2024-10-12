import { Module } from '@nestjs/common';
import { PostModule } from './post/post.module';
import { ConfigModule } from './common/config/config.module';
import { TypeOrmModule } from './common/db/type-orm.module';

@Module({
  imports: [TypeOrmModule, ConfigModule, PostModule],
})
export class AppModule {}
