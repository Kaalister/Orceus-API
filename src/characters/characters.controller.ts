import { 
    Controller,
    Get,
    Put,
    Param,
    Body,
    Post,
    Delete,
    UsePipes,
    ValidationPipe,
    HttpCode,
} from '@nestjs/common';
import { CharactersService } from './characters.service';
import { CreateCharacterDto } from './dto/create-character.dto';
import { UpdateCharacterDto } from './dto/update-character.dto';

@Controller('characters')
export class CharactersController {
    constructor(private readonly charactersService: CharactersService) {}

    @Get()
    findAll() {
        return this.charactersService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.charactersService.findOne(id);
    }

    @UsePipes(new ValidationPipe({transform: true}))
    @Post()
    createCharacter(@Body() character: CreateCharacterDto) {
        return this.charactersService.createCharacter(character);
    }

    @Put(':id')
    updateCharacter(
        @Param('id') id: string,
        @Body() updatedCharacter: UpdateCharacterDto
    ) {
        return this.charactersService.updateCharacter(id, updatedCharacter)
    }

    @Delete(':id')
    @HttpCode(204)
    deleteCharacter(@Param('id') id: string) {
        this.charactersService.deleteCharacter(id)
    }

}
