import { ApiProperty, PickType } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";
import { CreateConfigDto } from "./create-config.dto";

export class UpdateConfigDto extends PickType(CreateConfigDto, [
    'puissName',
]) {
    @ApiProperty({ type: String })
    @IsNotEmpty()
    @IsString()
    readonly id: string;
}