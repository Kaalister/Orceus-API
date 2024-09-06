import { ApiProperty } from "@nestjs/swagger";
import { IsEmpty, IsNotEmpty, IsString } from "class-validator";

export class CreateSkillItemDto {
    @ApiProperty({ type: String })
    @IsNotEmpty()
    @IsString()
    readonly name!: string;

    @ApiProperty({ type: String })
    @IsNotEmpty()
    @IsString()
    readonly desc!: string;

    @IsEmpty()
    readonly id?: string;
}