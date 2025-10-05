import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type IssueDocument = HydratedDocument<Task>;

@Schema({
  timestamps: true,
})
export class Task {
  @Prop({ unique: true, trim: true, required: true })
  title: string;

  @Prop({ trim: true })
  description: string;

 @Prop({ trim: true })
  state: string;

  @Prop({ trim: true })
  priority: string;
  
  @Prop({ trim: true })
  userEmail: string;
}

export const IssueSchema = SchemaFactory.createForClass(Task);
