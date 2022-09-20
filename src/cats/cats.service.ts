import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
// import * as catData from './../../catData.json';
import { Cat } from './entities/cat.entity';

@Injectable()
export class CatsService {
  // private cats = catData;

  constructor(
    @InjectModel(Cat.name)
    private readonly catModel: Model<Cat>,
  ) {}

  findAll() {
    return this.catModel.find();
  }

  async findOneByCode(code: number) {
    const cat = await this.catModel.findOne({ code });
    if (!cat) throw new NotFoundException(`Status Code ${code} not found`);
    return cat;
  }
}
