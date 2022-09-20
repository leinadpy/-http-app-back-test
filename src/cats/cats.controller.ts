import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { CatsService } from './cats.service';
import { Cat } from './entities/cat.entity';

@ApiTags('Cats')
@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  @ApiOkResponse({
    description: 'List of all status code',
    type: Cat,
    isArray: true
  })
  getAllCats() {
    return this.catsService.findAll();
  }

  @Get(':code')
  @ApiOkResponse({
    description: 'Get One By Status Code',
    type: Cat
  })
  getCatByCode(@Param('code', ParseIntPipe) code: number) {
    return this.catsService.findOneByCode(code);
  }
}
