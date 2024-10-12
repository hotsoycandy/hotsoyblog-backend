import { Module } from '@nestjs/common';
import { TypeOrmModule as NestTypeOrmModule } from '@nestjs/typeorm';
import { DbConfig } from '../config/db.config';
import { PostSchema } from '@src/infra/post/persistence/post.schema';

@Module({
  imports: [
    NestTypeOrmModule.forRootAsync({
      inject: [DbConfig],
      useFactory: (dbConfig: DbConfig) => {
        return {
          type: 'mysql',
          host: dbConfig.host,
          port: dbConfig.port,
          username: dbConfig.user,
          password: dbConfig.password,
          database: dbConfig.database,
          entities: [PostSchema],
          synchronize: true,
        };
      },
    }),
  ],
})
export class TypeOrmModule {}
