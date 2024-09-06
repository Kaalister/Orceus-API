import { ApiProperty } from "@nestjs/swagger";
import { IsEmpty, IsNotEmpty, IsString } from "class-validator";

export class CreateImageDto {
    @ApiProperty({ type: String })
    @IsNotEmpty()
    @IsString()
    readonly filename!: string;

    @ApiProperty({ type: String })
    @IsNotEmpty()
    @IsString()
    readonly originalName!: string;

    @ApiProperty({ type: Number })
    @IsNotEmpty()
    @IsString()
    readonly size!: number;

    @IsEmpty()
    readonly id?: string;

    @IsEmpty()
    readonly createdAt?: string;

    @IsEmpty()
    readonly updatedAt?: string;
}