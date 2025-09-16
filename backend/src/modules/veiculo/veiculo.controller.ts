import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, NotFoundException } from '@nestjs/common';
import { VeiculoService } from './veiculo.service';
import { CreateVeiculoDto } from './dto/create-veiculo.dto';
import { UpdateVeiculoDto } from './dto/update-veiculo.dto';
import { CreateAcessorioDto } from '../acessorio/dto/create-acessorio.dto';
import { DatabaseError } from "pg";
import { DrizzleQueryError } from "drizzle-orm/errors";

@Controller('veiculo')
export class VeiculoController {
  constructor(private readonly veiculoService: VeiculoService) {}

  @Post()
  create(@Body() createVeiculoDto: CreateVeiculoDto) {
    return this.veiculoService.create(createVeiculoDto);
  };

  @Get()
  findAll() {
    return this.veiculoService.findAll();
  };

  @Get(':id')
  findOneById(@Param('id', ParseIntPipe) id: number) {
    return this.veiculoService.findOneById(id);
  };

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number, 
    @Body() updateVeiculoDto: UpdateVeiculoDto
  ) {
    return this.veiculoService.update(id, updateVeiculoDto);
  };

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.veiculoService.delete(id);
  };

  @Post(':id_veiculo/acessorio')
  addAcessorio(
    @Param('id_veiculo', ParseIntPipe) id_veiculo: number,
    @Body() createAcessorioDto: CreateAcessorioDto
  ){
    return this.veiculoService.addAcessorio(id_veiculo, createAcessorioDto);
  };

  @Delete('/acessorio/:id_acessorio')
  removeAcessorio(@Param('id_acessorio', ParseIntPipe) id_acessorio: number){
    return this.veiculoService.removeAcessorio(id_acessorio);  
  };

};