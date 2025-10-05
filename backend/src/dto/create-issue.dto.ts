import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateIssueDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsOptional()
  description: string;
 
  @IsString()
  @IsOptional()
  state: string;
  
  @IsString()
  @IsOptional()
  priority: string;
  
  @IsString()
  @IsNotEmpty()
  userEmail: string;

}
