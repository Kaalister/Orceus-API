import { ApiProperty, OmitType } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";
import { CreateSkillItemDto } from "./create-skill.dto";

export class UpdateSkillItemDto extends OmitType(CreateSkillItemDto, [
    'id',
]) {
    @ApiProperty({ type: String })
    @IsNotEmpty()
    @IsString()
    readonly id!: string;
}