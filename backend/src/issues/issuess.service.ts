import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateIssueDto } from 'src/dto/create-issue.dto';
import { UpdateIssueDto } from 'src/dto/update-issue.dto';
import { Task } from 'src/schemas/issues.schema';

@Injectable()
export class IssuesService {
  constructor(@InjectModel(Task.name) private issueModel: Model<Task>) {}

  async create(createIssueDto: CreateIssueDto): Promise<Task> {
    const createdIssue = new this.issueModel(createIssueDto);
    return createdIssue.save();
  }

  async findAll(): Promise<Task[]> {
    return this.issueModel.find().exec();
  }

  async findOne(id: string): Promise<Task> {
    return this.issueModel.findById(id).exec();
  }

  async delete(id: string): Promise<Task> {
    return this.issueModel.findByIdAndDelete(id);
  }

  async update(id: string, createIssueDto: UpdateIssueDto): Promise<Task> {
    return this.issueModel.findByIdAndUpdate(id, createIssueDto, { new: true });
  }
}
