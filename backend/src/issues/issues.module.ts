import { Module } from '@nestjs/common';
import { IssuesController } from './issuess.controller';
import { IssuesService } from './issuess.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Task, IssueSchema } from 'src/schemas/issues.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Task.name, schema: IssueSchema }]),
  ],
  controllers: [IssuesController],
  providers: [IssuesService],
})
export class IssuesModule {}
