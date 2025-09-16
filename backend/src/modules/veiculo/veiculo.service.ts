import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateVeiculoDto } from './dto/create-veiculo.dto';
import { UpdateVeiculoDto } from './dto/update-veiculo.dto';
import { DRIZZLE } from 'src/db/drizzle/drizzle.module';
import type { DrizzleDB } from 'src/db/drizzle/types/drizzle';
import { acessorio, veiculo } from 'src/db/schemas';
import { eq } from 'drizzle-orm';
import { CreateAcessorioDto } from '../acessorio/dto/create-acessorio.dto';

@Injectable()
export class VeiculoService {
  constructor(@Inject(DRIZZLE) private db: DrizzleDB) {}

  async findAll(){
    return await this.db.select().from(veiculo);
  };

  async findOneById(id: number) {
    const result = await this.db.select().from(veiculo).where(eq(veiculo.id, id));
    if (result.length === 0) throw new NotFoundException(`Veiculo ${id} nao encontrado.`);
    return result[0];
  };

  async create(createVeiculoDto: CreateVeiculoDto){
    return await this.db.insert(veiculo).values(createVeiculoDto).returning();  
  };

  async update(id: number, updateVeiculoDto: UpdateVeiculoDto){
    const data = Object.fromEntries(
      Object.entries(updateVeiculoDto).filter(([_, v]) => v !== undefined)
    );

    if (Object.keys(data).length === 0) throw new Error("Nenhum campo alterado.");

    const result = await this.db
      .update(veiculo)
      .set(data)
      .where(eq(veiculo.id, id))
      .returning();

    if (result.length === 0) throw new NotFoundException(`Veiculo ${id} nao encontrado.`);
    return result[0];
  };
  
  async delete(id: number){
    await this.db.delete(acessorio).where(eq(acessorio.id_veiculo, id)).returning();
    const resultVeiculo = await this.db.delete(veiculo).where(eq(veiculo.id, id)).returning();
    if (resultVeiculo.length === 0) throw new NotFoundException(`Veiculo ${id} não encontrado.`);
    return 'Veiculo e acessórios excluídos!'
  };
  
  async addAcessorio(id_veiculo: number, createAcessorioDto: CreateAcessorioDto){
    const result = await this.db.select().from(veiculo).where(eq(veiculo.id, id_veiculo));
    if (result.length === 0) throw new NotFoundException(`Veiculo ${id_veiculo} nao encontrado.`);
    return await this.db.insert(acessorio).values({...createAcessorioDto, id_veiculo: id_veiculo}).returning();  
  }

  async removeAcessorio(id: number) {
    await this.db.delete(acessorio).where(eq(acessorio.id, id)).returning();
  }

};