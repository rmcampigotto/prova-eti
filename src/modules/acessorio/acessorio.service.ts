import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateAcessorioDto } from './dto/create-acessorio.dto';
import { UpdateAcessorioDto } from './dto/update-acessorio.dto';
import { DRIZZLE } from 'src/db/drizzle/drizzle.module';
import type { DrizzleDB } from 'src/db/drizzle/types/drizzle';
import { acessorio } from 'src/db/schemas';
import { eq } from 'drizzle-orm';

@Injectable()
export class AcessorioService {
  constructor(@Inject(DRIZZLE) private db: DrizzleDB) {}
  
  async findAll(){
    return await this.db.select().from(acessorio);
  };

  async findOneById(id: number) {
    const result = await this.db.select().from(acessorio).where(eq(acessorio.id, id));
    if (result.length === 0) throw new NotFoundException(`Acessorio ${id} nao encontrado.`);
    return result[0];
  };

  async create(createAcessorioDto: CreateAcessorioDto){
    return await this.db.insert(acessorio).values(createAcessorioDto).returning();  
  };

  async update(id: number, updateAcessorioDto: UpdateAcessorioDto){
    const data = Object.fromEntries(
      Object.entries(updateAcessorioDto).filter(([_, v]) => v !== undefined)
    );

    if (Object.keys(data).length === 0) throw new Error("Nenhum campo alterado.");

    const result = await this.db
      .update(acessorio)
      .set(data)
      .where(eq(acessorio.id, id))
      .returning();

    if (result.length === 0) throw new NotFoundException(`Acessorio ${id} nao encontrado.`);
    return result[0];
  };
  
  async delete(id: number){
    const result = await this.db.delete(acessorio).where(eq(acessorio.id, id)).returning();
    if (result.length === 0) throw new NotFoundException(`Acessorio ${id} não encontrado.`);
    return result[0]
  };

};