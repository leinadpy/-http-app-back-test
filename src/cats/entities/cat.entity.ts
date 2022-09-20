import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';

@Schema()
export class Cat extends Document {
  @ApiProperty({
    description: 'Status Code',
    uniqueItems: true,
    example: 200
  })
  @Prop({
    unique: true,
    index: true,
  })
  code: number;

  @ApiProperty({
    description: 'Title of status code',
    uniqueItems: true,
  })
  @Prop()
  title: string;

  @ApiProperty({
    description: 'Description of status code',
  })
  @Prop()
  description: string;

  @ApiProperty({
    description: 'Url Image',
  })
  @Prop()
  image: string;
}

export const CatSchema = SchemaFactory.createForClass(Cat);
