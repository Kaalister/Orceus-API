import { ApiProperty, OmitType } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";
import { CreateImageDto } from "./create-image.dto";

export class UpdateImageDto extends OmitType(CreateImageDto, [
    'id'
]) {
    @ApiProperty({ type: String })
    @IsNotEmpty()
    @IsString()
    readonly id!: string;
}
