import { PostSubscriber } from './post/post.subscriber';
import { PostModule } from './post/post.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'your_password',
      database: 'test_db',
      autoLoadEntities: true,
      synchronize: true,
      subscribers: [PostSubscriber],
    }),
    PostModule,
  ],
})
export class AppModule {}
