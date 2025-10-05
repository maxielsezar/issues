import {
  Body,
  ConflictException,
  NotFoundException,
  Controller,
  Get,
  Param,
  Post,
  Delete,
  HttpCode,
  Put,
} from '@nestjs/common';
import { IssuesService } from './issuess.service';
import { CreateIssueDto } from 'src/dto/create-issue.dto';
import { UpdateIssueDto } from 'src/dto/update-issue.dto';

@Controller('issues')
export class IssuesController {
  constructor(private issuesService: IssuesService) {}

  @Get()
  async findAll() {
    return this.issuesService.findAll();
  }

  @Post()
  async create(@Body() body: CreateIssueDto) {
    try {
      return await this.issuesService.create(body);
    } catch (error) {
      if (error.code === 11000) {
        throw new ConflictException('Issue already exists');
      }
      throw error;
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const issue = await this.issuesService.findOne(id);
    if (!issue) throw new NotFoundException('issue does not exist!');
    return issue;
  }

  @Delete(':id')
  @HttpCode(204)
  async delete(@Param('id') id: string) {
    const issue = await this.issuesService.delete(id);
    if (!issue) throw new NotFoundException('issue does not exist!');
    return issue;
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() body: UpdateIssueDto) {
    const issue = await this.issuesService.update(id, body);
    if (!issue) throw new NotFoundException('issue does not exist!');
    return issue;
  }
}
