import { IsInt, IsNotEmpty, IsString } from "class-validator";

export class CreateVeiculoDto {

    @IsNotEmpty()
    @IsString()
    modelo: string;

    @IsNotEmpty()
    @IsInt()
    anoFabricacao: number;

    @IsNotEmpty()
    @IsString()
    placa: string;

};