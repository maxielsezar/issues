import { Module } from '@nestjs/common';
import { IssuesModule } from './issues/issues.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    IssuesModule,
    MongooseModule.forRoot('mongodb+srv://elsezarmaxi_db_user:8QSB7dvFP8roULv3@cluster0.0qnfi4r.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
