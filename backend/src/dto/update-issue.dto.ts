import { IsBoolean, IsOptional, IsString } from 'class-validator';

export class UpdateIssueDto {
  @IsOptional()
  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  description: string;
 
  @IsString()
  @IsOptional()
  state: string;
  
  @IsString()
  @IsOptional()
  priority: string;

  @IsString()
  userEmail: string;
}
