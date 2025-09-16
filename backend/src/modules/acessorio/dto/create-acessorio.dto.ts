import { IsInt, IsNotEmpty, IsString } from "class-validator";

export class CreateAcessorioDto {

    @IsNotEmpty()
    @IsString()
    nome: string;
    
};