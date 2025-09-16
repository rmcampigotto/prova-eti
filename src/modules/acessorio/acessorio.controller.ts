import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { AcessorioService } from './acessorio.service';
import { CreateAcessorioDto } from './dto/create-acessorio.dto';
import { UpdateAcessorioDto } from './dto/update-acessorio.dto';

@Controller('acessorio')
export class AcessorioController {
  constructor(private readonly acessorioService: AcessorioService) {}

  @Post()
  create(@Body() createAcessorioDto: CreateAcessorioDto) {
    return this.acessorioService.create(createAcessorioDto);
  }

  @Get()
  findAll() {
    return this.acessorioService.findAll();
  }

  @Get(':id')
  findOneById(@Param('id', ParseIntPipe) id: number) {
    return this.acessorioService.findOneById(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateAcessorioDto: UpdateAcessorioDto
  ) {
    return this.acessorioService.update(id, updateAcessorioDto);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.acessorioService.delete(id);
  }

};