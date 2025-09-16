import { Module } from '@nestjs/common';
import { VeiculoModule } from './modules/veiculo/veiculo.module';
import { AcessorioModule } from './modules/acessorio/acessorio.module';
import { DrizzleModule } from './db/drizzle/drizzle.module';

@Module({
  imports: [
    DrizzleModule,
    VeiculoModule, 
    AcessorioModule
  ]
})

export class AppModule {};