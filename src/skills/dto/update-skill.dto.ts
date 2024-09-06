import { ApiProperty, PickType } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";
import { CreateSkillItemDto } from "./create-skill.dto";

export class UpdateSkillItemDto extends PickType(CreateSkillItemDto, [
    'name',
    'desc'
]) {
    @ApiProperty({
        type: String,
        example: '123e4567-e89b-12d3-a456-426614174000'
    })
    @IsNotEmpty()
    @IsString()
    readonly id: string;
}